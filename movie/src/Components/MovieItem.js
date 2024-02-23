// // MovieItem.js
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";
// import MovieDetails from "./MovieDetailsAfterClick";

// const MovieItem = ({ movie_id, title, description, release_date, genre, duration, language, director, imageurl }) => {
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);

//   const mobject = {
//     movie_id,
//     title,
//     description,
//     release_date,
//     genre,
//     duration,
//     language,
//     director,
//     imageurl
//   };

//   const handleViewDetails = () => {
//     setShowDetails(true);
//   };

//   const handleBookTicket = () => {
//     navigate(`/bookTicket/${movie_id}`); // Adjust the route as per your routing setup
//   };

//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={imageurl} alt={`Image for ${title}`} />
//         <Card.Body>
//           <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{genre}</span>
//           <Card.Title className="text-center">{title}</Card.Title>
//           <Card.Text>{director}</Card.Text>
//           <Card.Text>{release_date}</Card.Text>
//           {showDetails && <MovieDetails movie={mobject} />}
//           <Button variant="primary" onClick={handleViewDetails}>View</Button>
//           <Button variant="success" onClick={handleBookTicket}>Book Ticket</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default MovieItem;


//move to diff component

// MovieItem.js
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetailsAfterClick";

const MovieItem = ({ movie_id, title, description, release_date, genre, director, language,imageurl }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageurl} alt={`Image for ${title}`} />
        <Card.Body>
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{genre}</span>
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

