import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import M1 from"../img/M1.jpg"

import '../CSS/card.css';
const MovieItem = ({ title, description, release_date, genre, duration, language, director, imageurl }) => {
  return (
    <div>
      
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" />
        <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
        <Card.Body>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: 1 }}>{genre}</span>
          <Card.Img variant="top" />
          <Card.Title className="text-center" >{title}</Card.Title>
          <Card.Text>{director}</Card.Text>
          {/* <Card.Text>{release_date}</Card.Text> */}
          {/* <Card.Text>{duration}</Card.Text> */}
          {/* <Card.Text>{language}</Card.Text> */}
          {/* <Card.Text>{description}</Card.Text> */}
          <Button variant="primary" >View</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default MovieItem;