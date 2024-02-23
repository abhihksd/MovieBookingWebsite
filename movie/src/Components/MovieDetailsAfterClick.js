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
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>
            <li className="nav-item">{<TheaterDropDown/>} </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <div className="row">
        <div className="col-xs-4 col-md-4">
          <div className="card">
            <img src={`data:image/jpeg;base64,${image}`} height={350} width={350} alt={`Image for ${title}`} />
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
