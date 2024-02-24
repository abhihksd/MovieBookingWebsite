import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewSchedule() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []); // Fetch bookings when the component mounts

  const fetchBookings = async () => {
    try {
      const response = await fetch("https://localhost:7136/api/BookingInfo/GetInfo");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to count the number of bookings for each unique showId
  const countBookingsForUniqueShowIds = () => {
    // Get unique showId values
    const uniqueShowIds = [...new Set(bookings.map(booking => booking.showId))];
    
    // Calculate the number of bookings for each unique showId
    const bookingCounts = uniqueShowIds.map(showId => ({
      showId: showId,
      numberOfBookings: bookings.filter(booking => booking.showId === showId).length
    }));

    return bookingCounts;
  };

  // Get the counts for unique showIds
  const uniqueShowIdBookings = countBookingsForUniqueShowIds();

  return (
    <div>
      
      <ul className="navbar navbar-expand-sm bg-secondary mb-3">
      <div className="container-fluid">
          <div className="navbar-collapse">                      
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
                
              </li>
            </ul>
            </div>
            </div>
            </ul>
      <h1 style={{ textAlign: "center" }}>View scheduled Bookings</h1>
      <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th>Show ID</th>
      <th>Number of Bookings</th>
    </tr>
  </thead>
  <tbody>
    {uniqueShowIdBookings.map((bookingCount) => (
      <tr key={bookingCount.showId}>
        <td>{bookingCount.showId}</td>
        <td>{bookingCount.numberOfBookings}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}
