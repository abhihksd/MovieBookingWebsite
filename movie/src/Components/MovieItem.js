import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import m1 from "../img/M1.jpg";


const NewsItem = (props) => {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={m1} />
      <Card.Body>
        <Card.Title>Fighter</Card.Title>
        <Card.Text>
          Shamsher Pathania fulfills his lifelong dream and becomes a member of
          the Indian air force. 
        </Card.Text>
        <Button variant="primary">Book now</Button>
      </Card.Body>
      
    </Card>

    
  );
};

export default NewsItem;
