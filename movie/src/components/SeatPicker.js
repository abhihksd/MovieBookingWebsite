import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../CSS/Seats.css";
import TheaterDropDown from './TheaterDropDown';
import movie_logo from "../img/logo.jpeg";
import MovieSearch from './MovieSearchbar';
function SeatPicker() {
  const { show_id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [registeredSeats, setRegisteredSeats] = useState([]);
  const [billAmount, setBillAmount] = useState(0);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 
  const [redirectToTicket, setRedirectToTicket] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch list of registered seats for the given show_id
    fetchRegisteredSeats(show_id);
  }, [show_id]);

  const fetchRegisteredSeats = async (showId) => {
    try {
      const response = await fetch( `http://localhost:8080/getRegisteredSeats/${showId}`);
      const data = await response.json();
      setRegisteredSeats(data);
    } catch (error) {
      console.error('Error fetching registered seats:', error);
    }
  };

  const toggleSeat = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);
    let updatedSelectedSeats = [...selectedSeats];

    if (index === -1) {
      updatedSelectedSeats.push(seatNumber);
      setBillAmount(billAmount + 200); // Increment bill amount by 200 when seat is selected
    } else {
      updatedSelectedSeats.splice(index, 1);
      setBillAmount(billAmount - 200); // Decrement bill amount by 200 when seat is deselected
    }

    setSelectedSeats(updatedSelectedSeats);
  };

  const isSeatRegistered = (seatNumber) => {
    return registeredSeats.includes(seatNumber);
  };

  const isSeatSelected = (seatNumber) => {
    return selectedSeats.includes(seatNumber);
  };

  const renderSeat = (seatNumber) => {
    const isRegistered = isSeatRegistered(seatNumber);
    const isSelected = isSeatSelected(seatNumber);
    const isClickable = !isRegistered;

    return (
      <div
        key={seatNumber}
        className={`seat ${isSelected ? 'selected' : ''} ${isRegistered ? 'registered' : ''} ${isClickable ? 'clickable' : ''}`}
        onClick={() => isClickable && toggleSeat(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  const handleSeatRegistration = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const loginId = user.login_id;

      const response = await fetch('http://localhost:8080/registerSeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          show_id: show_id,
          login_id: loginId,
          seats: selectedSeats,
        }),
      });

      if (response.ok) {
        // Clear selected seats on successful registration
        setSelectedSeats([]);
        // Fetch updated list of registered seats
        fetchRegisteredSeats(show_id);
        // Set registration success to true
        setRegistrationSuccess(true);
        // Redirect to generateTicket page
        setRedirectToTicket(true);

        navigate(`/generateTicket?show_id=${show_id}&login_id=${loginId}`);
      } else {
        console.error('Failed to register seats');
      }
    } catch (error) {
      console.error('Error registering seats:', error);
    }
  };

  // Redirect to ticket generation page if registration is successful
  if (redirectToTicket) {
    navigate('/generateTicket');
  }
const theater=JSON.parse(localStorage.getItem("theater"));
const noseats=theater.total_seats
  return (
    <div>
       <nav>
           <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
             <li className="nav-item">
                <Link to={"/user"}>
                <img className="App-logo" src={movie_logo} alt="Logo" />
                </Link>
              </li>
              <li className="nav-item search-field">
              <MovieSearch />
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
    <div className="seat-picker">
      
      <h2>Seat Picker</h2>
      <div className="seat-container">
        {[...Array(64)].map((_, index) => renderSeat(index + 1))}
      </div>
      <div className="movie-screen">
    <p>movie screen is this way</p></div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        {selectedSeats.length === 0 ? (
          <p>No seats selected</p>
        ) : (
          <ul>
            {selectedSeats.map(seat => (
              <li key={seat}> Seat {seat},</li>
            ))}
          </ul>
        )}
        {selectedSeats.length > 0 && (
          <div>
            <p>Total Bill: {billAmount} rupees</p>
            <button onClick={handleSeatRegistration}>Pay and Generate Ticket</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default SeatPicker;