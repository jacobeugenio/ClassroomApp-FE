import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/teacher">Classroom App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/teacher">Home</NavLink>
            <NavLink to="/teacher/profile">Profile</NavLink>

            <NavLink to="/teacher/students">Students</NavLink>
            <NavLink to="/teacher/activities">Activities</NavLink>
            {/* <NavLink to="/teacher/grades">Grades</NavLink> */}
            <NavLink to="/teacher/logout">
              <Button variant="warning" size="sm">
                LOGOUT
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
