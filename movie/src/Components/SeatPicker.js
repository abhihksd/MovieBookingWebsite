// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "../CSS/Seats.css";

// function SeatPicker() {
//   const { show_id } = useParams();
//   const [selectedSeats, setSelectedSeats] = useState([0]);
//   const [registeredSeats, setRegisteredSeats] = useState([]);
//   const [billAmount, setBillAmount] = useState(0);
//   const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success
//   const [seatCost, setSeatCost] = useState(200);
//   useEffect(() => {
//     // Fetch list of registered seats for the given show_id
//     fetchRegisteredSeats(show_id);
//   }, [show_id]);

//   const fetchRegisteredSeats = async (showId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/getRegisteredSeats/${showId}`);
//       const data = await response.json();
//       setRegisteredSeats(data);
//     } catch (error) {
//       console.error('Error fetching registered seats:', error);
//     }
//   };
//   const handleSeatSelection = () => {
//     const totalBillAmount = selectedSeats.length * seatCost;
//     setBillAmount(totalBillAmount);
//   };
//   const toggleSeat = (seatNumber) => {
//     const index = selectedSeats.indexOf(seatNumber);
//     if (index === -1) {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//     } else {
//       setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
//     }
//     handleSeatSelection();
//   };

//   const isSeatRegistered = (seatNumber) => {
//     return registeredSeats.includes(seatNumber);
//   };

//   const isSeatSelected = (seatNumber) => {
//     return selectedSeats.includes(seatNumber);
//   };

//   const renderSeat = (seatNumber) => {
//     const isRegistered = isSeatRegistered(seatNumber);
//     const isSelected = isSeatSelected(seatNumber);
//     const isClickable = !isRegistered;

//     return (
//       <div
//         key={seatNumber}
//         className={`seat ${isSelected ? 'selected' : ''} ${isRegistered ? 'registered' : ''} ${isClickable ? 'clickable' : ''}`}
//         onClick={() => isClickable && toggleSeat(seatNumber)}
//       >
//         {seatNumber}
//       </div>
//     );
//   };

//   const handleSeatRegistration = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
      
//       const loginId = user?.login_id;

//       const response = await fetch('http://localhost:8080/registerSeats', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           show_id: show_id,
//           login_id: loginId,
//           seats: selectedSeats,
//         }),
//       });

//       if (response.ok) {
//         // Clear selected seats on successful registration
//         setSelectedSeats([]);
//         // Fetch updated list of registered seats
//         fetchRegisteredSeats(show_id);
//         const seatCost = 200; 
//        console.log("this is the amount:",selectedSeats.length); 
//         const newBillAmount =  selectedSeats.length * seatCost;  
//         setBillAmount(newBillAmount);
//         handleSeatSelection();
//         // Set registration success to true
//         setRegistrationSuccess(true);
//       } else {
//         console.error('Failed to register seats');
//       }
//     } catch (error) {
//       console.error('Error registering seats:', error);
//     }
//   };

//   return (
//     <div className="seat-picker">
//       <h2>Seat Picker</h2>
//       <div className="seat-container">
//         {[...Array(64)].map((_, index) => renderSeat(index + 1))}
//       </div>
//       <div className="selected-seats">
//         <h3>Selected Seats</h3>
//         {selectedSeats.length === 0 ? (
//           <p>No seats selected</p>
//         ) : (
//           <ul>
//             {selectedSeats.map(seat => (
//               <li key={seat}> Seat {seat}</li>
//             ))}
//           </ul>
//         )}
//         {selectedSeats.length > 0 && (
//           <div>
//             <p>Total Bill: {billAmount} rupees</p>

//             {registrationSuccess ? (
//               <button onClick={() => window.location.href='/generateTicket'}>Pay and Generate Ticket</button>
//             ) : (
//               <button onClick={handleSeatRegistration}>Pay and Generate Ticket</button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SeatPicker;


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../CSS/Seats.css";

function SeatPicker() {
  const { show_id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [registeredSeats, setRegisteredSeats] = useState([]);
  const [billAmount, setBillAmount] = useState(0);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [seatCost] = useState(200);

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

  const calculateBillAmount = () => {
    const totalBillAmount = selectedSeats.length * seatCost;
    setBillAmount(totalBillAmount);
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
        onClick={() => isClickable && handleSeatClick(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  const handleSeatClick = (seatNumber) => {
    toggleSeat(seatNumber);
    calculateBillAmount();
  };

  const handleSeatRegistration = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const loginId = user?.login_id;

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
        
        setSelectedSeats([]);
        
        fetchRegisteredSeats(show_id);
        
        setBillAmount(0);
        
        setRegistrationSuccess(true);
      } else {
        console.error('Failed to register seats');
      }
    } catch (error) {
      console.error('Error registering seats:', error);
    }
  };

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-secondary mb-3">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    <div className="seat-picker">
      <h2>Seat Picker</h2>
      <div className="seat-container">
        {[...Array(32)].map((_, index) => renderSeat(index + 1))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        {selectedSeats.length === 0 ? (
          <p>No seats selected</p>
        ) : (
          <ul>
            {selectedSeats.map(seat => (
              <li key={seat}> Seat {seat}</li>
            ))}
          </ul>
        )}
        {selectedSeats.length > 0 && (
          <div>
            <p>Total Bill: {billAmount} rupees</p>
            {registrationSuccess ? (
              <button onClick={() => window.location.href='/generateTicket'}>Pay and Generate Ticket</button>
            ) : (
              <button onClick={handleSeatRegistration}>Pay and Generate Ticket</button>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default SeatPicker;
