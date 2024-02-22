import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';
import NavBar from "./NavBar";

export default function SystemAdmin() {
  const [theaters, setTheaters] = useState([]);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    // Fetch data from API
    fetchTheaters();
  }, []);

  const fetchTheaters = async () => {
    try {
      const response = await fetch("http://localhost:8080/displaypendingtheaters"); 
      const data = await response.json();

      //check theater_status 0 or not
      setTheaters(data.filter(theater => theater.theater_status === 0)); 
    } catch (error) {
      console.error("Error fetching theaters:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      // Update status to 1 in the backend
      await fetch(`http://localhost:8080/updatestatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: 1 }),
      });

      // Fetch updated list of theaters after approval
    const response = await fetch("http://localhost:8080/displaypendingtheaters");
    const data = await response.json();
    setTheaters(data.filter(theater => theater.theater_status === 0));
  } catch (error) {
    console.error("Error approving theater:", error);
  }
  };

  const handleReject = async (id) => {
    try {
      // Update status to 1 in the backend
      await fetch(`http://localhost:8080/updatestatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: 0 }),
      });
     // Fetch updated list of theaters after rejection
    const response = await fetch("http://localhost:8080/displaypendingtheaters");
    const data = await response.json();
    setTheaters(data.filter(theater => theater.theater_status === 0));
  } catch (error) {
    console.error("Error rejecting theater:", error);
  }
  };

  return (
    <div>
      <NavBar/>
      <h1 style={{ textAlign: "center" }}>System Admin Homepage</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Theater Name</th>
          <th>Owner Name</th>
          <th>License No</th>
          <th>Theater Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {theaters.map((theater) => (
          <tr key={theater.id}>
            <td>{theater.theater_name}</td>
            <td>{theater.owner_name}</td>
            <td>{theater.licence_no}</td>
            <td>{theater.theater_location}</td>
            <td>
              <Button variant="success" onClick={() => handleApprove(theater.theater_id)}>Approve</Button>{' '}
              <Button variant="danger" onClick={() => handleReject(theater.theater_id)}>Reject</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}



