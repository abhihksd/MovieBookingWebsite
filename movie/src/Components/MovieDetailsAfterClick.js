// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import M1 from "../img/M1.jpg";
// import { useParams } from "react-router-dom";

// const MovieDetails = ({ movies }) => {
//   const { id } = useParams();

//   const movie = movies.find((movie) => movie.movie_id === parseInt(id));

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   const {
//     title,
//     description,
//     release_date,
//     genre,
//     duration,
//     language,
//     director,
//   } = movie;

//   const handleBookNow = () => {
//     // Handle booking logic here
//     alert(`Booking for ${title} is not implemented yet!`);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="auto">
//           <Card style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
//             <Card.Body>
//               <Card.Title>{title}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//               <Card.Text>Release Date: {release_date}</Card.Text>
//               <Card.Text>Genre: {genre}</Card.Text>
//               <Card.Text>Duration: {duration}</Card.Text>
//               <Card.Text>Language: {language}</Card.Text>
//               <Card.Text>Director: {director}</Card.Text>
//               <Button variant="primary" onClick={handleBookNow}>
//                 Book Now
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MovieDetails;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import M1 from "../img/M1.jpg"; // Import your movie image here

// const MovieDetails = () => {
//   const { id } = useParams(); // Extract movie ID from URL parameters
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // Fetch movie details based on movie ID
//     // Replace this with your actual data fetching logic
//     // For example, you might use fetch or Axios to fetch data from an API
//     // Here, we'll just simulate fetching movie details from a local data source
//     const fetchMovieDetails = async () => {
//       try {
//         // Simulated movie data (replace with actual API call)
//         const response = await fetch(`http://localhost:8080/movies/${id}`);
//         const data = await response.json();
//         setMovie(data);
//       } catch (error) {
//         console.error("Error fetching movie:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>; // Render loading indicator while fetching data
//   }

//   const { title, description, release_date, genre, duration, language, director } = movie;

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="auto">
//           <Card style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={M1} alt={`Image for ${title}`} />
//             <Card.Body>
//               <Card.Title>{title}</Card.Title>
//               <Card.Text>Description: {description}</Card.Text>
//               <Card.Text>Release Date: {release_date}</Card.Text>
//               <Card.Text>Genre: {genre}</Card.Text>
//               <Card.Text>Duration: {duration}</Card.Text>
//               <Card.Text>Language: {language}</Card.Text>
//               <Card.Text>Director: {director}</Card.Text>
//               <Button variant="primary">Book Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MovieDetails;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  }, []);

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
            <Button variant="success">Book Ticket</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;