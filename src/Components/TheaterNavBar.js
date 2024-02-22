import { Link } from "react-router-dom";

export default function TheaterNavbar(){
    return (
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
    )
}