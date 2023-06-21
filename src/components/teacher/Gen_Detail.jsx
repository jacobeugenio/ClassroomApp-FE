import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Gen_Detail = (num) => {
  // console.log(num);
  return (
    <Row>
      <Col md={4}>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Card
            className="mb-3 mb-md-0"
            style={{
              border: "2px solid #d0f5be",
            }}
          >
            <Card.Body>
              <Card.Title>{num.teacher}</Card.Title>
              <Card.Text>Teacher / s</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col md={4}>
        <Link
          to="/teacher/students"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            className="mb-3 mb-md-0"
            style={{
              border: "2px solid #d0f5be",
            }}
          >
            <Card.Body>
              <Card.Title>{num.student}</Card.Title>
              <Card.Text>Students</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col md={4}>
        <Link
          to="/teacher/activities"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            style={{
              border: "2px solid #d0f5be",
            }}
          >
            <Card.Body>
              <Card.Title>{num.exam}</Card.Title>
              <Card.Text>Activities</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
};

export default Gen_Detail;
