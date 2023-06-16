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
import { useNavigate } from "react-router-dom";
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
			<Navbar bg='light' expand='lg' className='navbar'>
				<Container>
					<Navbar.Brand href='#home'>Classroom App</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/student'>Home</Nav.Link>
							<Nav.Link href='/student/attendance'>Attendance</Nav.Link>
							<Nav.Link href='/student/grades'>Grades</Nav.Link>
							<Nav.Link href='/student/exams'>Exams</Nav.Link>
							<Nav.Link to='/student/logout'>
								<Button variant='warning' size='sm' onClick={logoutHandler}>
									<FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default HeaderStudents;
