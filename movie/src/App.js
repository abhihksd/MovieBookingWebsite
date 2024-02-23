import logo from "./logo.svg";
import bike from "./img/logo.jpeg";
import "./App.css";

import Register from './components/RegistrationForm'
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import LogoutComp from "./LogoutComp";
import UpdatePass from "./components/UpdatePass";
import Welcome from "./components/Welcome";

import SystemAdmin from "./components/SystemAdmin";
import TheatreAdmin from "./components/TheatreAdmin";
import User from "./components/User";
import AddSlot from "./components/Theatre_AddSlot";
import EditSlot from "./components/Theatre_EditSlot";
import ViewSchedule from "./components/Theatre_ViewSchedule";
import RemoveMovie from "./components/Theatre_RemoveMovie";
import AddMovie from "./components/Theatre_AddMovie";
import EditMovie from "./components/Theatre_EditMovie";
import AddTheater from "./components/System_AddTheatre";
import EditTheatre from "./components/System_EditTheatre";
import RemoveTheatre from "./components/System_RemoveTheatre";
import BookMoive from "./components/User_BookMovie";
import MovieDetails from "./components/MovieDetailsAfterClick"
import FetchData from "./components/FetchData";
import BookTicket from "./components/BookTicket";
import SeatPicker from "./components/SeatPicker";
import GenerateTicket from "./components/TicketBooking";

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
          <Route path="/systemAdmin" element={<SystemAdmin />} />
          <Route path="/theatreAdmin" element={<TheatreAdmin />} />
          <Route path="/user" element={<User />} />
          <Route path="/logout" element={<LogoutComp />} />
          <Route path="/addSlot" element={<AddSlot />} />
          <Route path="/editSlot" element={<EditSlot />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/viewSchedule" element={<ViewSchedule />} />
          <Route path="/editMoive" element={<EditMovie />} />
          <Route path="/removeMovie" element={<RemoveMovie />} />
          <Route path="/addTheater" element={<AddTheater />} />
          <Route path="/removeTheatre" element={<RemoveTheatre />} />
          <Route path="/editTheatre" element={<EditTheatre />} />
          <Route path="/bookMovie" element={<BookMoive />} />
          {/* <Route path="/MovieDetails" element={<MovieDetails />}/> */}
          {/* <Route path="/movie/:movie_id"  component={MovieDetails} /> */}
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/book-ticket/:movie_id" element={<BookTicket />} />
         
          <Route path="/seatselect/:show_id" element={<SeatPicker/>}/>
          <Route path="/generateTicket" element={<GenerateTicket/>}/>
                 
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
