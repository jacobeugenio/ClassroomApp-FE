import React, { useState } from "react";
import HeaderStudents from "../../layout/Header/Header-Students";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import API_Service from "../../../../api-service/API_Service";

function AttendanceStudents() {
	const [attendanceForm, setAttendanceForm] = useState({
		attendance: "",
		fname: "",
		lname: "",
		email: "",
		comment: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (event.target.type === "radio") {
			// If it's a radio button, update the attendance value
			setAttendanceForm((prevAttendanceForm) => ({
				...prevAttendanceForm,
				attendance: value,
			}));
		} else {
			// For other input fields, update the respective form field
			setAttendanceForm((prevAttendanceForm) => ({
				...prevAttendanceForm,
				[name]: value,
			}));
		}
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();

		API_Service.post("students/attendance-students", attendanceForm)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		console.log(attendanceForm);
		setAttendanceForm({
			attendance: "",
			fname: "",
			lname: "",
			email: "",
			comment: "",
		});
	};

	return (
		<>
			<header>
				<HeaderStudents />
			</header>
			<main>
				<Container>
					<Form onSubmit={handleSubmitForm}>
						<h1>Attendance Form</h1>
						<p>Can you Attend?</p>

						<div className='mb-3'>
							<Form.Group>
								<Form.Check
									type='radio'
									label="Yes, I'll be there!"
									name='attendance'
									value='present'
									checked={attendanceForm.attendance === "present"}
									onChange={handleChange}
								/>
								<Form.Check
									type='radio'
									label="Can't make it"
									name='attendance'
									value='absent'
									checked={attendanceForm.attendance === "absent"}
									onChange={handleChange}
								/>
							</Form.Group>
						</div>

						<Row>
							<Form.Label htmlFor='inputPassword5'>Name:</Form.Label>
							<Col lg={6}>
								<Form.Control
									type='text'
									name='fname'
									value={attendanceForm.fname}
									onChange={handleChange}
									placeholder='First'
									className='mt-1 mb-3'
									required
								/>
							</Col>
							<Col lg={6}>
								<Form.Control
									type='text'
									name='lname'
									value={attendanceForm.lname}
									onChange={handleChange}
									placeholder='Last'
									className='mt-1 mb-3'
									required
								/>
							</Col>

							<Form.Label htmlFor='inputPassword5'>Email</Form.Label>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<InputGroup className='mb-3'>
									<Form.Control
										type='email'
										name='email'
										value={attendanceForm.email}
										onChange={handleChange}
										placeholder="Student's Email"
										aria-label="Students's Email"
										aria-describedby='basic-addon2'
										required
									/>
									<InputGroup.Text id='basic-addon2'>
										@example.com
									</InputGroup.Text>
								</InputGroup>
							</Form.Group>
							<Form.Control
								as='textarea'
								name='comment'
								value={attendanceForm.comment}
								onChange={handleChange}
								placeholder='Leave a comment here'
								style={{ height: "100px" }}
								required
							/>
							<Button variant='primary' className='mt-4' type='submit'>
								Send
							</Button>
						</Row>
					</Form>
				</Container>
			</main>
		</>
	);
}

export default AttendanceStudents;
