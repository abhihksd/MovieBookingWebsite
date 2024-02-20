import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookTicket = ({ movieId }) => {
  const [theaters, setTheaters] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [showTimings, setShowTimings] = useState([]);

  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = async () => {
    try {
      const response = await fetch(`http://localhost:8080/theaters/getTheatersByMovie/${movieId}`);
      const data = await response.json();
      setTheaters(data);
    } catch (error) {
      console.error('Error fetching theaters:', error);
    }
  };

  const fetchShowTimings = async (theaterId) => {
    try {
      const response = await fetch(`http://localhost:8080/showtimes/getShowTimingsByTheaterAndMovie/${theaterId}/${movieId}`);
      const data = await response.json();
      setShowTimings(data);
    } catch (error) {
      console.error('Error fetching show timings:', error);
    }
  };

  const handleTheaterSelect = (theaterId) => {
    setSelectedTheater(theaterId);
    fetchShowTimings(theaterId);
  };

  return (
    <Container>
      <h2>Book Ticket</h2>
      <Row>
        <Col>
          <h3>Theaters</h3>
          <ul>
            {theaters.map(theater => (
              <li key={theater.id} onClick={() => handleTheaterSelect(theater.id)}>
                {theater.name}
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h3>Show Timings</h3>
          <ul>
            {showTimings.map(showTiming => (
              <li key={showTiming.id}>
                {showTiming.time}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTicket;
