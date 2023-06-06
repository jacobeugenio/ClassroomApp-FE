import React from "react";
import "./Hero.css";
import Image from "../../../../../img/ava2.png";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function HeroStudents() {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col lg={6} md={6} className='student__profile--container'>
						{/* Student Name and Profile */}
						<div className='student__profile'>
							<Row>
								<Col lg={6} md={6} sm={6}>
									<div className='profile__picture'>
										<img
											src={Image}
											alt='Profile'
											className='profile__picture--img'
										/>
										<h5>
											<strong>Mr.</strong> John Doe
										</h5>
									</div>
								</Col>
								<Col lg={6} md={6} sm={6}>
									<div className='profile__details'>
										<p>
											<strong>Username:</strong> John
										</p>
										<p>
											<strong>Contact:</strong> 1234
										</p>
										<p>
											<strong>Email:</strong> @gmail.com
										</p>
										<p>
											<strong>Password:</strong> Edit your password
										</p>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg={6} md={6} className='welcome__message--container'>
						{/* Welcome Message */}
						<div className='title__holder'>
							<h2>Welcome, John Doe!</h2>
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
