import React from "react";
import { useLocation, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
          <Navbar.Brand href="#home">KodeVamp's Classroom</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">
                <Button variant="warning" size="sm">
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link href="/register">
                <Button variant="outline-warning" size="sm">
                  Register
                </Button>
              </Nav.Link>
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
              <span>Username: </span>
              <span>jane_D</span>
              <br />
              <span>password: </span>
              <span>jane123</span> <br />
              <span>Username: </span>
              <span>kimbo_sanz</span>
              <br />
              <span>password: </span>
              <span>123kim</span>
            </Col>
            <Col lg={6}>
              <Link to="/student">Go to Students</Link>
              <br />
              <span>Username: </span>
              <span>IchadB</span>
              <br />
              <span>password: </span>
              <span>ichad1234</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
