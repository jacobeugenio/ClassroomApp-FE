import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingPage = () => {
  const location = useLocation();
  return location.pathname === "/login" ||
    location.pathname === "/layout" ? null : (
    <>
      <Navbar bg="light" expand="md" className="py-0">
        <Container>
          <NavLink to="/" end>
            KodeVamp's Classroom
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/home" end>
                Home
              </NavLink>
              <NavLink to="/link">Link</NavLink>

              <NavLink to="/login">
                <Button variant="warning" size="sm">
                  LOGIN
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button variant="outline-warning" size="sm">
                  REGISTER
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <Container>
          <Row>
            <h2>Credentials</h2>
            <Col lg={6}>
              {/* <Link to='/teacher'>Go to teacher</Link> */}
              <p>Teacher</p>
              <span>Email: </span>
              <span>jane@gmail.com</span>
              <br />
              <span>password: </span>
              <span>jane123</span> <br />
            </Col>
            <Col lg={6}>
              <Link to="/student">Go to Students</Link>
              <br />
              <br />
              "email": "eugenioj@gmail.com", "password": "123jac"
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
