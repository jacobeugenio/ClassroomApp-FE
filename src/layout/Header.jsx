import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/teacher">Classroom App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/teacher">Home</Nav.Link>
            <Nav.Link href="/teacher/profile">Profile</Nav.Link>
     
            <Nav.Link href="/teacher/students">Students</Nav.Link>
            <Nav.Link href="/teacher/assignments">Assignments</Nav.Link>
            <Nav.Link href="/teacher/grades">Grades</Nav.Link>
            <Nav.Link href="/teacher/logout"> 
              <Button variant="warning" size='sm'>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header