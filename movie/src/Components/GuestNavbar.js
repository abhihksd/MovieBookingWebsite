import { Link } from "react-router-dom";
import movie_logo from "../img/logo.jpeg";
export default function GuestNavbar(){
    return (
        <ul className="navbar navbar-expand-sm bg-light mb-3">
            <div className="topnav">
              <li className="nav-item">
                <img className="App-logo" src={movie_logo} alt="Logo" />
              </li>
              <div className="topnav-right">
                <li className="nav-item search-field">
                  <input className="search" type="text" placeholder="Search" />
                </li>

                <li className="nav-item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Login</Link>
                </li>
              </div>
            </div>
          </ul>
    )
}