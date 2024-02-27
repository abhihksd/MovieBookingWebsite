import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import movie_logo from "../img/logo.jpeg";
>>>>>>> AbhishekS
export default function ShowTheater(){

    useEffect(()=>{
        fetchTheaters();
    })
    const[theaters,setTheaters]=useState([]);
    const fetchTheaters=async()=>{
        
        try{
            const response=await fetch("http://localhost:8080/alltheaters")
            const data=await response.json();
            setTheaters(data)
        }catch(error){
            console.error("Error in fetching theaters");
        }
        
    }


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

<<<<<<< HEAD
<ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>
           
=======
<ul className="navbar navbar-expand-sm bg-secondary mb-3">
        <div className="topnav">
          <div className="topnav-right">
          <li className="nav-item">
                <Link to={"/systemAdmin"}>
                <img className="App-logo" src={movie_logo} alt="Logo" />
                </Link>
              </li>
>>>>>>> AbhishekS
           <li className="nav-item">
              <Link to="/showTheater">Show Theaters</Link>
           </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link to="/removeTheatre">Remove Theatre</Link>
            </li>
            <li className="nav-item">
              <Link to="/editTheatre">Edit Theatre details</Link>
            </li>
            <li className="nav-item">
=======
>>>>>>> AbhishekS
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Theater Name</th>
            <th>Owner Name</th>
            <th>License No</th>
            <th>Theater Location</th>
<<<<<<< HEAD
=======
            <th>Status</th>
>>>>>>> AbhishekS
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
              <td>{theater.theater_status}</td>
              <td>
                {/* <Button variant="success" onClick={() => handleApprove(theater.theater_id)}>Approve</Button>{' '} */}
                <Button variant="danger" onClick={() => handleReject(theater.theater_id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    )

}