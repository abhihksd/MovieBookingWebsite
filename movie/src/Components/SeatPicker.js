import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "../css/seat.css"
function SeatPicker({ match }) {
  const { show_id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [registeredSeats, setRegisteredSeats] = useState([]);

  useEffect(() => {
    // Fetch list of registered seats for the given show_id
    fetchRegisteredSeats(show_id);
  }, [show_id]);

  const fetchRegisteredSeats = async (showId) => {
    try {
      const response = await fetch(`http://localhost:8080/getRegisteredSeats/${showId}`);
      const data = await response.json();
      setRegisteredSeats(data);
    } catch (error) {
      console.error('Error fetching registered seats:', error);
    }
  };

  const toggleSeat = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);
    if (index === -1) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    }
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
      // Get login_id from localStorage
      const user=JSON.parse(localStorage.getItem("user"))
      const loginId=user.login_id;
      console.log("LoginId: "+loginId)
    

      // Make request to register selected seats
      const response = await fetch('http://localhost:8080/registerSeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          show_id:show_id,
          login_id: loginId,
          seats: selectedSeats,
         
        }),
      }); console.log( loginId)

      if (response.ok) {
        // Clear selected seats on successful registration
        setSelectedSeats([]);
        // Fetch updated list of registered seats
        fetchRegisteredSeats(show_id);
      } else {
        console.error('Failed to register seats');
      }
    } catch (error) {
      console.error('Error registering seats:', error);
    }
  };

  return (
    
    <div className="seat-picker">
      <h2>Seat Picker</h2>
      <div className="seat-container">
        {[...Array(20)].map((_, index) => renderSeat(index + 1))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        {selectedSeats.length === 0 ? (
          <p>No seats selected</p>
        ) : (
          <ul>
            {selectedSeats.map(seat => (
              <li key={seat}>Seat {seat}</li>
            ))}
          </ul>
        )}
        {selectedSeats.length > 0 && (
          <button onClick={handleSeatRegistration}>Register Selected Seats</button>
        )}
      </div>
    </div>
  );
}

export default SeatPicker;
