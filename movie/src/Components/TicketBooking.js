import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Ticket.css';
import { Button } from 'react-bootstrap';

function GenerateTicket() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [showData, setShowData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const showId = params.get('show_id');
        const loginId = params.get('login_id');

        // Fetch user details
        const userResponse = await fetch(`http://localhost:8080/userDetails/${loginId}`);
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch show details
        const showResponse = await fetch(`http://localhost:8080/showDetails?show_id=${showId}&login_id=${loginId}`);
        const showData = await showResponse.json();
        setShowData(showData);

        // Calculate total amount
        const numberOfSeats = showData.seat_numbers.length;
        const amountPerSeat = 200; // Assuming each seat costs 200 rupees
        const totalAmount = numberOfSeats * amountPerSeat;
        setTotalAmount(totalAmount);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, [location.search]);

  if (!userData || !showData) {
    return <p>Loading...</p>;
  }

  return (
      <div className="row justify-content-center">
      <ul className="navbar navbar-expand-sm bg-secondary mb-3">
      <div className="container-fluid">
          <div className="navbar-collapse">                      
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/logout"><Button>Logout</Button></Link>
                
              </li>
            </ul>
          </div>
        </div>
</ul>
          <div className="ticket-container">
        <div className="col-md-6">
          <div className="ticket">
            <div className="ticket-header">
              <h2>Ticket</h2>
            </div>
            <div className="ticket-body">
              <div className="ticket-details">
                <p><strong>User:</strong> {userData.name}</p>
                <p><strong>Movie:</strong> {showData.movie_name}</p>
                <p><strong>Theater:</strong> {showData.theater_name}</p>
                <p><strong>Show Date:</strong> {showData.show_date}</p>
                <p><strong>Show Time:</strong> {showData.show_time}</p>
                {/* Uncomment below if you have seats_booked */}
                {/* <p><strong>No of Seats Booked:</strong> {showData.seats_booked}</p> */}
                <p><strong>Booked Seat Numbers:</strong> {showData.seat_numbers.join(', ')}</p>
                <p><strong>Total Amount:</strong> {totalAmount} rupees</p>
              </div>
            </div>
            <div className="ticket-footer">
              <h4 variant="secondary">Ticket Generated</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateTicket;