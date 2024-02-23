import movie_logo from "./img/logo.jpeg";
import "./App.css";
import Register from './Components/RegistrationForm'
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
import AddMovie from "./Components/Theatre_AddMovie";
import EditMovie from "./Components/Theatre_EditMovie";
import AddTheater from "./Components/System_AddTheatre";
import EditTheatre from "./Components/System_EditTheatre";
import RemoveTheatre from "./Components/System_RemoveTheatre";
import BookMovie from "./Components/User_BookMovie";
import MovieDetails from "./Components/MovieDetailsAfterClick";
import ShowTheater from "./Components/System_ShowTheater";
import SeatPicker from "./Components/SeatPicker";
import BookTicket from "./Components/BookTicket";
import FetchData from './Components/FetchData';
import MovieItem from './Components/MovieItem';
import { ErrorBoundary } from "react-error-boundary";
function App() {
  //initialState of logged
  const mystate = useSelector((state) => state.logged);
  return (
    <ErrorBoundary fallbackRender={() => {
      return (
        <div>

         <h2> Oops!! Something went wrong</h2>
         <h2 ><a href="/login">Click here</a>  please try again</h2>
         
        </div>
      )
    }}>
    <div>
      <header
        // className="App-header"
        style={{ minHeight: mystate.loggedIn ? "0vh" : "auto" }}
      > 
        <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
          <ul className="navbar navbar-expand-sm bg-light mb-3">
            <div className="topnav">
              <li className="nav-item">
                <Link to={"/"}>
                <img className="App-logo" src={movie_logo} alt="Logo" />
                </Link>
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
          <Route path="/editMovie/:movie_id" element={<EditMovie />} />
          <Route path="/removeMovie" element={<RemoveMovie />} />
          <Route path="/addTheater" element={<AddTheater />} />
          <Route path="/removeTheatre" element={<RemoveTheatre />} />
          <Route path="/editTheatre" element={<EditTheatre />} />
          <Route path="/bookMovie" element={<BookMovie />} />
          {/* <Route path="/MovieDetails" element={<MovieDetails />}/> */}
          {/* <Route path="/movie/:movie_id"  component={MovieDetails} /> */}
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/book-ticket/:movie_id" element={<BookTicket />} />
         
          <Route path="/seatselect/:show_id" element={<SeatPicker/>}/>
                 
          
        </Routes>
      </div>
    </div>
    </ErrorBoundary>
  );
}

export default App;
