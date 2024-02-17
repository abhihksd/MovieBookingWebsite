import React from 'react';
import '../CSS/MovieDetails'; 

const MovieDetails = ({ movie }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.posterUrl} alt={movie.title} className="img-fluid movie-poster" />
        </div>
        <div className="col-md-8">
          <div className="movie-info">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <p className="movie-cast"><strong>Cast:</strong> {movie.cast}</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
