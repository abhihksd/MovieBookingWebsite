import { Link} from "react-router-dom";
export default function TheatreAdmin(){
    return(
        <div>

          <ul className="navbar navbar-expand-sm bg-light mb-3">
            <div className="topnav">
              
              <div className="topnav-right">
              <li className="nav-item search-field">
                <input className="search" type="text" placeholder="Search" />
              </li>

                <li className="nav-item">
                  <Link to="/addSlot">Add slot</Link>
                </li>
                <li className="nav-item">
                  <Link to="/addMovie">Add movie</Link>
                </li>
                <li className="nav-item">
                  <Link to="/viewSchedule">View schedule</Link>
                </li>
                <li className="nav-item">
                  <Link to="/editMoive">Edit movie details</Link>
                </li>
                <li className="nav-item">
                  <Link to="/removeMovie">Remove movie</Link>
                </li>
                <li className="nav-item">
                  <Link to="/editSlot">Edit slot</Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout">Logout</Link>
                </li>
              </div>
            </div>
          </ul>
          <h1> Welcome Theatre Admin</h1>
        </div>
    )
    }