import React, { useEffect, useState } from "react";
import "./Hero.css";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import API_Service from "../../../../api-service/API_Service";

function HeroStudents() {
	const { userInfo } = useSelector((state) => state.auth);

	const dataStudent = userInfo.data.registeredData;

	return (
		<div>
			<Container className='container__hero'>
				<Row>
					<Col lg={6} md={6} className='student__profile--container'>
						{/* Student Name and Profile */}

						<div className='profile__picture'>
							<img
								src={dataStudent.img}
								alt='Profile'
								className='profile__picture--img'
							/>
							<h5>
								{dataStudent.fname} {dataStudent.lname}
							</h5>
						</div>
						<div className='profile__details'>
							<p>
								<strong>Username:</strong> {dataStudent.username}
							</p>
							<p>
								<strong>Contact:</strong> {dataStudent.contact}
							</p>
							<p>
								<strong>Email:</strong> {dataStudent.email}
							</p>
							<p>
								<strong>Address:</strong> {dataStudent.address}
							</p>
						</div>
					</Col>
					<Col lg={6} md={6} className='welcome__message--container'>
						{/* Welcome Message */}
						<div className='title__holder'>
							<h2>
								Welcome, {dataStudent.fname} {dataStudent.lname}
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

					{/* <Col lg={12} className='important__announcements--container'> */}
					{/* Important Announcements */}
					{/* <div className='title__holder'>
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
						</div> */}
					{/* </Col> */}
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
