import React, { useState } from 'react';
import '../CSS/Seats.css'
function SeatPicker() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);
    if (index === -1) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    }
  };

  const renderSeat = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);
    return (
      <div
        key={seatNumber}
        className={`seat btn ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`}
        onClick={() => toggleSeat(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  return (
    <div className="seat-picker">
      <h2 className="mb-4">Seat Picker</h2>
      <div className="seat-container mb-4">
        {[...Array(64)].map((_, index) => renderSeat(index + 1))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        {selectedSeats.length === 0 ? (
          <p>No seats selected</p>
        ) : (
          <ul className="list-unstyled">
            {selectedSeats.map(seat => (
              <li key={seat}>Seat {seat}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SeatPicker;
