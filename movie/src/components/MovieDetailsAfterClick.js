import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import M1 from "../img/M1.jpg";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.movie_id === parseInt(id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    release_date,
    genre,
    duration,
    language,
    director,
  } = movie;

  const handleBookNow = () => {
    // Handle booking logic here
    alert(`Booking for ${title} is not implemented yet!`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Release Date: {release_date}</Card.Text>
              <Card.Text>Genre: {genre}</Card.Text>
              <Card.Text>Duration: {duration}</Card.Text>
              <Card.Text>Language: {language}</Card.Text>
              <Card.Text>Director: {director}</Card.Text>
              <Button variant="primary" onClick={handleBookNow}>
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
