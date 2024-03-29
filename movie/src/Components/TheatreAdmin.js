import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import EditMovie from "./Theatre_EditMovie";
import NavBar from "./NavBar";

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
 const [selectmoveiId,setmoveid]=useState(null)
 const handleedit=(movieId)=>{
  setmoveid(movieId);
 }
 const handleDeleteMovie = (movieId) => {
    
  const isConfirmed = window.confirm("Are you sure you want to delete this movie?");
  
  
  if (isConfirmed) {
    
    fetch(`http://localhost:8080/deleteMovie/${movieId}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {
         
          setMovies(movies.filter((movie) => movie.movie_id !== movieId));
        }
      })
      .catch((error) => console.error("Error deleting movie:", error));
  }
};
 
  return (
    <div>
      <NavBar/>
      {/* <div className="navbar navbar-expand-sm bg-light mb-3">
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
      </div> */}

      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1 className="text-center">
              Welcome {theaterInfo ? theaterInfo.owner_name : ""}
            </h1>
            <h6>Theater Name: {theaterInfo ? theaterInfo.theater_name : ""}</h6>
            <h6>Total Seats: {theaterInfo ? theaterInfo.total_seats : ""}</h6>
            <h6>Location: {theaterInfo ? theaterInfo.theater_location : ""}</h6>
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
                {movies.map((movie) => (
                  <tr key={movie.movie_id}>
                    <td>{movie.title}</td>
                    
                    <td>
                    <li className="nav-item">
               <Link to={`/editMovie/${movie.movie_id}`}><Button variant="primary">Edit</Button></Link>
             </li>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteMovie(movie.movie_id)}
                      >
                        Delete
                      </Button>
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


