// import React, { useState, useEffect } from "react";
// import {Link, useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const MovieDetails = () => {
//   const { movie_id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetchMovie();
//   }, []);

//   const fetchMovie = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/movies/getMovieById/${movie_id}`);
//       const data = await response.json();
//       setMovie(data);
//     } catch (error) {
//       console.error('Error fetching movie:', error);
//     }
//   };
  
//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   const { title, description, release_date, genre, duration, language, director, image} = movie;

//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={6}>
//           <Card>
//           <img src={`data:image/jpeg;base64,${image}`} height={350} width={350} alt={`Image for ${title}`} />
//           </Card>
//         </Col>
//         <Col xs={12} md={6}>
//           <div className="details">
//             <h2>{title}</h2>
//             <h4>Release Date: </h4>{release_date}
//             <h4>Genre: </h4>{genre}
//             <h4>Duration: </h4>{duration}
//             <h4>Language: </h4>{language}
//             <h4>Director: </h4>{director}
//             <h4>Description:</h4> {description}
//             <br/>
//             <Link to={`/book-ticket/${movie_id}`}>
//               <Button variant="success">Book Ticket</Button>
//             </Link>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MovieDetails;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import TheaterDropDown from "./TheaterDropDown";

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

  const { title, description, release_date, genre, duration, language, director, image } = movie;

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right ml-auto">
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <div className="row">
        <div className="col-xs-3 col-md-3">
          <div className="card">
            <img src={`data:image/jpeg;base64,${image}`} height={350} width={250} alt={`Image for ${title}`} />
          </div>
        </div>
        <div className="col-xs-3 col-md-3">
          <div className="details">
            <h2 style={{ fontFamily: 'Arial, sans-serif' }}>{title}</h2>
            <p><strong>Release Date:</strong> {release_date}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Duration:</strong> {duration}</p>
            <p><strong>Language:</strong> {language}</p>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Description:</strong> {description}</p>
            <br />
            <a href={`/book-ticket/${movie_id}`}>
              <button className="btn btn-success">Book Ticket</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;