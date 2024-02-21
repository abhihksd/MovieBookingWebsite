import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookTicket = () => {
  const [theaters, setTheaters] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [showTimings, setShowTimings] = useState([]);
  const { movie_id } = useParams();

  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getTheatersByMovie/${movie_id}`);
      const data = await response.json();
      setTheaters(data);
    } catch (error) {
      console.error('Error fetching theaters:', error);
    }
  };

  const fetchShowTimings = async (theaterId) => {
    try {
      const response = await fetch(`http://localhost:8080/getShowTimingsByTheaterAndMovie/${theaterId}/${movie_id}`);
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
      <h2 className="mt-4">Book Ticket</h2>
      <Row>
        <Col>
          <h3>Theaters</h3>
          <ul className="list-group">
            {theaters.map((theater, index) => (
              <li
                key={theater.theater_id}
                onClick={() => handleTheaterSelect(theater.theater_id)}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>{index + 1}</span>
                
                {theater.theater_name}
                <Link to={`/seatselect/${theater.theater_id}/${movie_id}`} className="bi bi-arrow-right-circle"></Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h3>Show Timings</h3>
          <ul className="list-group">
            {showTimings.map((showTiming, index) => (
              <li 
                key={showTiming.show_id} 
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>{index + 1}</span>
               
                <Link to={`/seatselect/${showTiming.show_id}`} className="bi bi-arrow-right-circle">
                  <div>
                    <div>{new Date(showTiming.show_date).toDateString()}</div>
                    <div>{showTiming.show_time}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTicket;
