// // import { Link } from "react-router-dom";
// // export default function ViewSchedule() {
// //   return (
// //     <div>
// //       <ul className="navbar navbar-expand-sm bg-light mb-3">
// //         <div className="topnav">
// //           <div className="topnav-right">
// //             <li className="nav-item search-field">
// //               <input className="search" type="text" placeholder="Search" />
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/logout">Logout</Link>
// //             </li>
// //           </div>
// //         </div>
// //       </ul>
// //       <h1>View schedule</h1>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function ViewSchedule() {
//   const [bookings, setBookings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchBookings();
//   }, []); // Fetch bookings when the component mounts

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch("https://localhost:7136/api/BookingInfo/GetInfo");
//       if (!response.ok) {
//         throw new Error("Failed to fetch bookings");
//       }
//       const data = await response.json();
//       setBookings(data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     // 
//   };

//   return (
//     <div>
//       <ul className="navbar navbar-expand-sm bg-light mb-3">
//         <div className="topnav">
//           <div className="topnav-right">
//             <li className="nav-item search-field">
//               <input
//                 className="search"
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//             </li>
//             <li className="nav-item">
//               <Link to="/logout">Logout</Link>
//             </li>
//           </div>
//         </div>
//       </ul>
//       <h1 style={{ textAlign: "center" }}>View scheduled Bookings</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>Customer ID</th>
//             <th>Show ID</th>
//             {/* <th>Booking Date</th> */}
//             {/* <th>Total Amount</th> */}
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* [{"bookingId":1,"customerId":7,"showId":8,"bookingDate":"2024-02-20","totalAmount":200.00,"status":"1","customer":null,"show":null,"tickets":[]}]
//                 {booking.customerId} */}
//           {bookings.map((booking) => (
//             <tr key={booking.booking_id}>
//               <td>{booking.bookingId}</td>
//               <td>{booking.userId}</td>
//               <td>{booking.showId}</td>
//               {/* <td>{booking.bookingDate}</td> */}
//               {/* <td>{booking.totalAmount}</td> */}
//               <td>{booking.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

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
      {/* <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            
            <li className="nav-item ">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul> */}
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
      {/* <table className="table ">
        <thead>
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
      </table> */}
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
