import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddTheater from "./System_AddTheatre";

export default function TheatreAdmin() {
  const [theaterInfo, setTheaterInfo] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.login_id) {
      const loginid = user.login_id;
      fetch("http://localhost:8080/getTheater?id=" + loginid)
        .then(resp => resp.json())
        .then(obj => {
          localStorage.setItem("theater", JSON.stringify(obj));
          setTheaterInfo(obj);
        })
        .catch(error => console.error("Error fetching theater:", error));
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
    </div>
  );
}
