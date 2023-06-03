import React from "react";
import "./Header-Students.css";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderStudents() {
	return (
		<div>
			<Navbar bg='light' expand='lg' className='navbar'>
				<Container>
					<Navbar.Brand href='#home'>Classroom App</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#attendance'>Attendance</Nav.Link>
							<Nav.Link href='#grades'>Grades</Nav.Link>
							<Nav.Link href='#exams'>Exams</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default HeaderStudents;
