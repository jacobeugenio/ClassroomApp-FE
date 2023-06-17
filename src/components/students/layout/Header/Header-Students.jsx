import React from "react";
import "./Header-Students.css";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useLogoutMutation } from "../../../../redux/usersApiSlice";
import { logout } from "../../../../redux/authSlice";

function HeaderStudents() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Classroom App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/student" end>
                Home
              </NavLink>
              <NavLink to="/student/attendance">Attendance</NavLink>
              <NavLink to="/student/grades">Grades</NavLink>
              <NavLink to="/student/exams">Exams</NavLink>
              <NavLink to="/">
                <Button variant="warning" size="sm" onClick={logoutHandler}>
                  <FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderStudents;
