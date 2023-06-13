import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faHouse,
  faUser,
  faUsers,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/teacher">Classroom App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/teacher">
                {" "}
                <FontAwesomeIcon className="me-1" icon={faHouse} />
                Home
              </NavLink>

              <NavLink to="/teacher/profile">
                {" "}
                <FontAwesomeIcon className="me-1" icon={faUser} />
                Profile
              </NavLink>

              <NavLink to="/teacher/students">
                {" "}
                <FontAwesomeIcon className="me-1" icon={faUsers} />
                Students
              </NavLink>

              <NavLink to="/teacher/activities">
                {" "}
                <FontAwesomeIcon className="me-1" icon={faList} />
                Activities
              </NavLink>
              {/* <NavLink to="/teacher/grades">Grades</NavLink> */}
              <NavLink to="/teacher/logout">
                <Button variant="warning" size="sm">
                  <FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
