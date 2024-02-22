import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const fetchMovie = async () => {
    try {
      const response = await fetch(`http://localhost:8080/movies/getMovieById/${movie_id}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };
  
  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, description, release_date, genre, duration, language, director, imageurl } = movie;

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src={imageurl} alt={`Image for ${title}`} />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <div className="details">
            <h2>{title}</h2>
            <h4>Release Date: </h4>{release_date}
            <h4>Genre: </h4>{genre}
            <h4>Duration: </h4>{duration}
            <h4>Language: </h4>{language}
            <h4>Director: </h4>{director}
            <h4>Description:</h4> {description}
            <br/>
            <Link to={`/book-ticket/${movie_id}`}>
              <Button variant="success">Book Ticket</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
