import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import M1 from"../img/M1.jpg"

import '../CSS/card.css';
import MovieDetails from "./MovieDetailsAfterClick";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const MovieItem = ({ movie_id, title, description, release_date, genre, duration, language, director, imageurl }) => {
  const nav=useNavigate();
  const [mobject,setMobject]=useState({ movie_id, title, description, release_date, genre, duration, language, director, imageurl })
 const [showDetails, setShowDetails] = useState(false);
 
  return (
    <div>
      
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" />
        <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
        <Card.Body>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: 1 }}>{genre}</span>
          <Card.Img variant="top" />
          <Card.Title className="text-center" >{title}</Card.Title>
          <Card.Text>{movie_id}</Card.Text>
          <Card.Text>{director}</Card.Text>
          <Card.Text>{release_date}</Card.Text>
          {showDetails && <MovieDetails movie={mobject} />}
          <Link to={{ pathname:'/selectMovie',state:{mobject}}}>
          View Movie
           </Link>
          <Button variant="primary"  onClick={() => setShowDetails(!showDetails)} >View</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default MovieItem;