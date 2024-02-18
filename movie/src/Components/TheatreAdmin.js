import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

export default function TheatreAdmin() {
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.login_id) {
      const loginid = user.login_id;
      console.log("Login id = "+loginid)
      // Fetch theater info from db
      fetch("http://localhost:8080/getTheater?id=" + loginid)
        .then(resp => resp.json())
        .then(obj => {
          localStorage.setItem("theater", JSON.stringify(obj));
          setTheaterInfo(obj);
        })
        .catch(error => console.error("Error fetching theater:", error));
      
      // Fetch all movies reg on that login_id->theater_id
      fetch("http://localhost:8080/getMovies/" + loginid)
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
      <div className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <div className="navbar-collapse">                      
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/addMovie">Add movie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewSchedule">View scheduled bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addSlot">Add slot</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editSlot">Edit slot</Link>
              </li>          
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1 className="text-center">Welcome {theaterInfo ? theaterInfo.owner_name : ''}</h1>
            <h4>Theater Name: {theaterInfo ? theaterInfo.theater_name : ''}</h4>
            <h4>Total Seats: {theaterInfo ? theaterInfo.total_seats : ''}</h4>
            <h4>Location: {theaterInfo ? theaterInfo.theater_location : ''}</h4>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
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
                  <tr key={movie.movie_id}>
                    <td>{movie.title}</td>
                    <td>
                      <Button variant="primary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


