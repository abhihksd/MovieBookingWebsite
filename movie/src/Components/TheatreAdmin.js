import { Link } from "react-router-dom";
import { useEffect } from "react";
import AddTheater from "./System_AddTheatre";// Import AddTheater component

export default function TheatreAdmin() {
  

  useEffect(()=>{
      const loginid = JSON.parse(localStorage.getItem("user")).login_id;
      fetch("http://localhost:8080/getTheater?id="+loginid)
      .then(resp => resp.json())
      .then(obj => localStorage.setItem("theater",JSON.stringify(obj)))
  },[])

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>

            <li className="nav-item">
              <Link to={{ pathname: "/addTheater"}}>Add Theatre</Link> {/* Pass location state as prop */}
            </li>

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
    </div>
  );
}
