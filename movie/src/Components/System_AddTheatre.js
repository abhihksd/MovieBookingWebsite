import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function AddTheater() {
  const [theaterInfo, setTheaterInfo] = useState({
    theaterName: "",
    location: "",
    totalSeats: "",
    screenCount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheaterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/addTheater", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(theaterInfo)
      });
      if (response.ok) {
        console.log("Theater info saved successfully!");
       //reset if need
        setTheaterInfo({
          theaterName: "",
          location: "",
          totalSeats: "",
          screenCount: ""
        });
      } else {
        console.error("Failed to save theater info");
      }
    } catch (error) {
      console.error("Error occurred while saving theater info:", error);
    }
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
                name="theaterName"
                value={theaterInfo.theaterName}
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
                name="totalSeats"
                value={theaterInfo.totalSeats}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="screenCount">
              <Form.Label>Screen Count:</Form.Label>
              <Form.Control
                type="number"
                name="screenCount"
                value={theaterInfo.screenCount}
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
