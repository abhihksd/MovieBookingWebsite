import { Link } from "react-router-dom";
export default function RemoveTheatre() {
  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>
           <li className="nav-item">
              <Link to="/showTheater">Show Theaters</Link>
           </li>
            <li className="nav-item">
              <Link to="/removeTheatre">Remove Theater</Link>
            </li>
            <li className="nav-item">
              <Link to="/editTheatre">Edit Theater details</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <h1>Remove Theater</h1>
    </div>
  );
}
