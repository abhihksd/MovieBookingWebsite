import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function AddTheater() {
  const [theaterInfo, setTheaterInfo] = useState({
    theater_name: "",
    location: "",
    total_seats: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/addTheater", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...theaterInfo,
          username: getCookieValue("username"),
          password: getCookieValue("password")
        })
      });
      if (response.ok) {
        console.log("Theater info saved successfully!");
        // Reset form after successful submission if needed
        setTheaterInfo({
          theater_name: "",
          location: "",
          total_seats: "",
        });
      } else {
        console.error("Failed to save theater info");
      }
    } catch (error) {
      console.error("Error occurred while saving theater info:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheaterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Function to get cookie value by name
  const getCookieValue = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "";
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">Add Theatre</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="theaterName">
              <Form.Label>Theater Name:</Form.Label>
              <Form.Control
                type="text"
                name="theater_name"
                value={theaterInfo.theater_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={theaterInfo.location}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="totalSeats">
              <Form.Label>Total Seats:</Form.Label>
              <Form.Control
                type="number"
                name="total_seats"
                value={theaterInfo.total_seats}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-md-center">
        <Col xs="auto">
          <Link to="/logout">Logout</Link>
        </Col>
      </Row>
    </Container>
  );
}
