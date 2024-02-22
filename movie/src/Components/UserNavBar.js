// UserNavbar.jsx
import movie_logo from "../img/logo.jpeg";
import React from 'react';
import { Link } from 'react-router-dom';
import TheaterDropDown from './TheaterDropDown';

const UserNavbar = () => (
  <nav>
     <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            {/* <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li> */}
             <li className="nav-item">
                <Link to={"/user"}>
                <img className="App-logo" src={movie_logo} alt="Logo" />
                </Link>
              </li>
            <li className="nav-item">{<TheaterDropDown/>} </li>
{/* 
            <li className="nav-item">
              <Link to="/bookMovie">Book movie</Link>
            </li> */}

            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>

  </nav>
);

export default UserNavbar;
