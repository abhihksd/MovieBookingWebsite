import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../CSS/moviesearch.css'; // Import custom CSS

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch movies when the component mounts
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://localhost:8080/movies/search?title=${searchTerm}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const handleLinkClick = () => {
    setShowDropdown(false); // Hide dropdown when link is clicked
  };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0); // Show dropdown only if search term is not empty
    fetchMovies(); // Fetch movies on search term change
  };
console.log(JSON.stringify(movies));
  return (
    <div className="container" >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {showDropdown && (
        <div className="dropdown-menu">
          {movies.map((movie) => (
            
            <Link key={movie.movie_id} to={`/movie/${movie.movie_id}`} className="dropdown-item" onClick={handleLinkClick}>
              {movie.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
