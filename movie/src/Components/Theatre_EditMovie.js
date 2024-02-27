import { useReducer, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/thedit.css";

const init = {
  title: "",
  director: "",
  releaseDate: "",
  genre: "",
  duration: "",
  language: "",
  description: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default function EditMovie() {
  const { movie_id } = useParams();
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    // Fetch movie details when the component mounts
    fetch(`http://localhost:8080/movies/getMovieById/${movie_id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return response.json();
      })
      .then(data => {
        // Populate state with movie details
        dispatch({ type: "update", field: "title", value: data.title });
        dispatch({ type: "update", field: "director", value: data.director });
        dispatch({ type: "update", field: "releaseDate", value: data.releaseDate });
        dispatch({ type: "update", field: "genre", value: data.genre });
        dispatch({ type: "update", field: "duration", value: data.duration });
        dispatch({ type: "update", field: "language", value: data.language });
        dispatch({ type: "update", field: "description", value: data.description });
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  }, [movie_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/editmovie/${movie_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Movie updated");
        console.log("successfully updated");
      })
      .catch(error => {
        console.error("Error updating movie", error);
        alert("Error updating movie");
      });
  };

  const { title, director, releaseDate, genre, duration, language, description } = state;

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <h1>Edit movie</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">Director:</label>
          <input type="text" id="director" name="director" value={director} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">Release Date:</label>
          <input type="date" id="releaseDate" name="releaseDate" value={releaseDate} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input type="text" id="genre" name="genre" value={genre} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration:</label>
          <input type="number" id="duration" name="duration" value={duration} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">Language:</label>
          <input type="text" id="language" name="language" value={language} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea id="description" name="description" value={description} onChange={handleChange} className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
