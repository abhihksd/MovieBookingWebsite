import { Link } from "react-router-dom";
import FetchData from "./FetchData";
export default function User() {
  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>

            <li className="nav-item">
              <Link to="/bookMovie">Book movie</Link>
            </li>

            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <h1> Welcome User</h1>
      <FetchData/>
    </div>
  );
}
