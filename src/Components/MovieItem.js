// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import M1 from"../img/M1.jpg"

// import '../CSS/card.css';
// import MovieDetails from "./MovieDetailsAfterClick";
// import { useNavigate } from "react-router";



// const MovieItem = ({ title, description, release_date, genre, duration, language, director, imageurl }) => {

//   const navigate = useNavigate();
//   return (
//     <div>
      
//       <Card style={{ width: "14rem" }}>
//         <Card.Img variant="top" />
//         <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
//         <Card.Body>
//           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: 1 }}>{genre}</span>
//           <Card.Img variant="top" />
//           <Card.Title className="text-center" >{title}</Card.Title>
//           <Card.Text>{director}</Card.Text>
         
//           <Button variant="primary" onClick={()=>{navigate('/MovieDetails')}}>View</Button>
//         </Card.Body>
//       </Card>
      
//     </div>
//   );
// };

// export default MovieItem;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import M1 from "../img/M1.jpg";
import { Link, useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetailsAfterClick";

const MovieItem = ({ movie_id, title, description, release_date, genre, duration, language, director, image }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const mobject = {
    movie_id,
    title,
    description,
    release_date,
    genre,
    duration,
    language,
    director,
    image
  };

  const handleViewDetails = () => {
    navigate(`/selectMovie/${movie_id}`);
  };

  return (
    <div>
      <Card style={{ width: "14rem" }}>
        {/*<Card.Img variant="top" src={M1} alt={`Image for ${title}`} />*/}
        <Card.Img variant="top" src={`data:image/jpeg;base64,${mobject.image}`} height={350} width={100} alt={`Image for ${title}`} />

        <Card.Body>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: 1 }}>{genre}</span>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{director}</Card.Text>
          <Card.Text>{release_date}</Card.Text>
          <Link to={`/movie/${movie_id}`} className="btn btn-primary"><Button>View</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieItem;
