import { Link } from "react-router-dom";
import NavBar from "./NavBar";
export default function BookMovie() {
  return (
    <div>
      <NavBar/>
      {/* <ul className="navbar navbar-expand-sm bg-light mb-3">
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
      </ul> */}
      <h1>Book movie</h1>
    </div>
  );
}
