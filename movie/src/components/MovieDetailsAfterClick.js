import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import TheaterDropDown from "./TheaterDropDown";
import { Button } from "react-bootstrap";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/movies/getMovieById/${movie_id}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

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
    image,
  } = movie;

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-secondary mb-3">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                <Button >Logout</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <div className="row">
        <div className="col-xs-3 col-md-3">
          <div className="card">
            <img
              src={`data:image/jpeg;base64,${image}`}
              height={350}
              width={250}
              alt={`Image for ${title}`}
            />
          </div>
        </div>
        <div className="col-xs-3 col-md-3">
          <div className="details">
            <h2 style={{ fontFamily: "Arial, sans-serif" }}>{title}</h2>
            <p>
              <strong>Release Date:</strong> {release_date}
            </p>
            <p>
              <strong>Genre:</strong> {genre}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Language:</strong> {language}
            </p>
            <p>
              <strong>Director:</strong> {director}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <br />
            <Link to={`/book-ticket/${movie_id}`} className="btn btn-success">
              Book Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;