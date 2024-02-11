import logo from "./logo.svg";
import bike from "./img/logo.jpeg";
import "./App.css";

import Register from "./Components/RegistrationForm";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import { useSelector } from "react-redux";
import LogoutComp from "./LogoutComp";
import UpdatePass from "./Components/UpdatePass";
import OrderHis from "./Components/OrderHistory";
import Welcome from "./Components/Welcome";
import NewsItem from "./Components/MovieItem";

import SystemAdmin from "./Components/SystemAdmin";
import TheatreAdmin from "./Components/TheatreAdmin";
import User from "./Components/User";

function App() {
  //initialState of logged
  const mystate = useSelector((state) => state.logged);
  return (
    <div>
      <header
        // className="App-header"
        style={{ minHeight: mystate.loggedIn ? "0vh" : "auto" }}
      >
        <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
          <ul className="navbar navbar-expand-sm bg-light mb-3">
            <div className="topnav">
              <li className="nav-item">
                <img className="App-logo" src={bike} alt="Logo" />
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
        </div>
        
        
      </header>
      <div>
      
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/systemAdmin" element={<SystemAdmin/>} />
          <Route path="/theatreAdmin" element={<TheatreAdmin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/logout" element={<LogoutComp/>} />
          

        </Routes>
        
      </div>
    </div>
      
      
  );
}

export default App;
