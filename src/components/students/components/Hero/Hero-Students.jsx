import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useLocation } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import API_Service from "../../../../api-service/API_Service";

function HeroStudents() {
	const [studentData, setStudentData] = useState([]);

	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.email) {
			const email = location.state.email;

			const getStudent = async (email) => {
				try {
					const response = await API_Service.get(`students/student/${email}`);
					setStudentData(response.data[0]);
					localStorage.setItem("studentData", JSON.stringify(response.data[0]));
				} catch (error) {
					console.log(error);
				}
			};

			getStudent(email);
		}
	}, [location.state]);

	// const email = location.state && location.state.email;

	// useEffect(() => {
	// 	const getStudentData = async () => {
	// 		try {
	// 			const response = await API_Service.get(`students/student/${email}`);
	// 			setStudentData(response.data[0]);
	// 			localStorage.setItem("studentData", JSON.stringify(response.data[0]));
	// 		} catch (error) {
	// 			console.log(error);
	// 		}

	// 		const storedStudentData = localStorage.getItem("studentData");
	// 		setStudentData(JSON.parse(storedStudentData));
	// 	};
	// 	getStudentData();
	// }, []);

	console.log(studentData);

	return (
		<div>
			<Container className='container__hero'>
				<Row>
					<Col lg={6} md={6} className='student__profile--container'>
						{/* Student Name and Profile */}
						<div className='student__profile'>
							<Row>
								<Col lg={6} md={6} sm={6}>
									<div className='profile__picture'>
										<img
											src={studentData.img}
											alt='Profile'
											className='profile__picture--img'
										/>
										<h5>
											{studentData.fname} <br /> {studentData.lname}
										</h5>
										{/* <div>{location.state.id}</div> */}
									</div>
								</Col>
								<Col lg={6} md={6} sm={6}>
									<div className='profile__details'>
										<p>
											<strong>Username:</strong> {studentData.username}
										</p>
										<p>
											<strong>Contact:</strong> {studentData.contact}
										</p>
										<p>
											<strong>Email:</strong> {studentData.email}
										</p>
										<p>
											<strong>Address:</strong> {studentData.address}
										</p>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg={6} md={6} className='welcome__message--container'>
						{/* Welcome Message */}
						<div className='title__holder'>
							<h2>
								Welcome, {studentData.fname} {studentData.lname}
							</h2>
						</div>
						<div className='welcome__message'>
							<p>
								We are excited to have you here in the Classroom Management App.
								This platform is designed to help you stay organized, track your
								progress, and excel in your studies. Make the most of your
								educational journey with us!
							</p>
						</div>
					</Col>

					<Col lg={12} className='important__announcements--container'>
						{/* Important Announcements */}
						<div className='title__holder'>
							<h2>Important Announcements</h2>
						</div>
						<div className='important__announcements'>
							<ul>
								<li>
									Upcoming event: Field Trip on June 10th - Please submit your
									permission slip to the school office by June 5th.
								</li>
								<li>
									Reminder: Science project due on June 15th - Ensure you have
									completed all the required experiments and submitted your
									project on time.
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={12} className='motivational__quotes--container'>
						{/* Motivational Quotes */}
						<div className='title__holder'>
							<h2>Motivational Quotes</h2>
						</div>
						<div className='motivational__quotes'>
							<p>
								"Success is not final, failure is not fatal: It is the courage
								to continue that counts."
							</p>
							<p>
								<strong>- Winston Churchill</strong>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default HeroStudents;
