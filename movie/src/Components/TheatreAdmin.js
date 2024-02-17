import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';

export default function TheatreAdmin() {
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.login_id) {
      const loginid = user.login_id;
      // Fetch theater info from db
      fetch("http://localhost:8080/getTheater?id=" + loginid)
        .then(resp => resp.json())
        .then(obj => {
          localStorage.setItem("theater", JSON.stringify(obj));
          setTheaterInfo(obj);
        })
        .catch(error => console.error("Error fetching theater:", error));
      
      // Fetch all movies reg on that login_id->theater_id
      fetch("http://localhost:8080/getMovies?id=" + loginid)
        .then(resp => resp.json())
        .then(moviesData => {
          setMovies(moviesData);
        })
        .catch(error => console.error("Error fetching movies:", error));
    } else {
      console.error("User object or login_id not found in localStorage.");
    }
  }, []);

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            {theaterInfo && (
              <li className="nav-item">
                <p>Welcome {theaterInfo.owner_name}, {theaterInfo.theater_name}, {theaterInfo.theater_location}, Total Seats: {theaterInfo.total_seats}</p>
              </li>
            )}

            <li className="nav-item">
              <Link to="/addMovie">Add movie</Link>
            </li>
            <li className="nav-item">
              <Link to="/viewSchedule">View scheduled bookings</Link>
            </li>
            <li className="nav-item">
              <Link to="/addSlot">Add slot</Link>
            </li>
            <li className="nav-item">
              <Link to="/editSlot">Edit slot</Link>
            </li>
            <li className="nav-item">
              <Link to="/editMoive">Edit movie details</Link>
            </li>
            <li className="nav-item">
              <Link to="/removeMovie">Remove movie</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <h1 style={{ textAlign: "center" }}>Theatre Admin Homepage</h1>
      
      <div className="container">
        <h2>Movies</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>
                  <Button variant="primary">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
