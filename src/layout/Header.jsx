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
      <Navbar className="teacher-nav" expand="md">
        <Container>
          <Navbar.Brand href="/teacher">Classroom App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/teacher" className="d-flex align-items-center" end>
                {" "}
                <FontAwesomeIcon
                  className="me-1"
                  style={{ height: 11 }}
                  icon={faHouse}
                  // activeClassName="active"
                />
                Home
              </NavLink>

              <NavLink
                to="/teacher/profile"
                className="d-flex align-items-center"
              >
                {" "}
                <FontAwesomeIcon
                  className="me-1"
                  style={{ height: 11 }}
                  icon={faUser}
                  // activeClassName="active"
                />
                Profile
              </NavLink>

              <NavLink
                to="/teacher/students"
                className="d-flex align-items-center"
              >
                {" "}
                <FontAwesomeIcon
                  style={{ height: 11 }}
                  className="me-1"
                  icon={faUsers}
                />
                Students
              </NavLink>

              <NavLink
                to="/teacher/activities"
                className="d-flex align-items-center"
              >
                {" "}
                <FontAwesomeIcon
                  className="me-1"
                  style={{ height: 11 }}
                  icon={faList}
                />
                Activities
              </NavLink>
              {/* <NavLink to="/teacher/grades">Grades</NavLink> */}
              <NavLink to="/teacher/logout">
                <Button
                  variant="success"
                  size="sm"
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    style={{ height: 11 }}
                    className="me-1"
                  />{" "}
                  LOGOUT
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
