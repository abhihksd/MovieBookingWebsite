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


import SystemAdmin from "./Components/SystemAdmin";
import TheatreAdmin from "./Components/TheatreAdmin";
import User from "./Components/User";
import AddSlot from "./Components/Theatre_AddSlot";
import EditSlot from "./Components/Theatre_EditSlot";
import ViewSchedule from "./Components/Theatre_ViewSchedule";
import RemoveMovie from "./Components/Theatre_RemoveMovie";
import AddMovie from "./Components/Theatre_AddMoive";
import EditMovie from "./Components/Theatre_EditMovie";
import AddTheater from "./Components/System_AddTheatre";
import EditTheatre from "./Components/System_EditTheatre";
import RemoveTheatre from "./Components/System_RemoveTheatre";
import BookMoive from "./Components/User_BookMovie";
import { ErrorBoundary } from "react-error-boundary";


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
      <ErrorBoundary fallbackRender={()=>{
        return (
          <h2>Oops!! Something went wrong</h2>
        )
      }}

  >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/systemAdmin" element={<SystemAdmin/>} />
          <Route path="/theatreAdmin" element={<TheatreAdmin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/logout" element={<LogoutComp/>} />
          <Route path="/addSlot" element={<AddSlot/>} />
          <Route path="/editSlot" element={<EditSlot/>} />
          <Route path="/addMovie" element={<AddMovie/>} />
          <Route path="/viewSchedule" element={<ViewSchedule/>} />
          <Route path="/editMoive" element={<EditMovie/>} />
          <Route path="/removeMovie" element={<RemoveMovie/>} />
          <Route path="/addTheatre" element={<AddTheater/>} />
          <Route path="/removeTheatre" element={<RemoveTheatre/>} />
          <Route path="/editTheatre" element={<EditTheatre/>} />
          <Route path="/bookMovie" element={<BookMoive/>} />
          
          
          

        </Routes>
        </ErrorBoundary>
      </div>
    </div>
      
      
  );
}

export default App;
