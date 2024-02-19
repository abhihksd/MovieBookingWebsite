// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import m1 from "../img/M1.jpg";
// import React from "react";

// export default function Welcome() {
//   return (
//     <div className="App">
//       <h1>Welcome to MovieDekho</h1>

//       <Card style={{ width: "14rem" }}>
//         <Card.Img variant="top" src={m1} />
//         <Card.Body>
//           <Card.Title>Fighter</Card.Title>
//           <Card.Text>
//             Shamsher Pathania fulfills his lifelong dream and becomes a member
//             of the Indian air force.
//           </Card.Text>
//           <Button variant="primary">Book now</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

//new code from shubham yache's branch(on 16/02/2024 8 : 51 pm)


import React from "react";
import FetchData from "./FetchData";

export default function Welcome() {
  return (
    <div className="App">
      <h1>Welcome to MovieDekho</h1>
      <FetchData/>
    
    </div>
  );
}
