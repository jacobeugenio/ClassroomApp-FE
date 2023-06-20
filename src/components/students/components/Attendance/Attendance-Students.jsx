import React, { useState } from "react";
import { useSelector } from "react-redux";
import API_Service from "../../../../api-service/API_Service";
import HeaderStudents from "../../layout/Header/Header-Students";
import "./Attendance.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AttendanceStudents() {
	const { userInfo } = useSelector((state) => state.auth);
	// console.log(userInfo.data.registeredData.fname);

	const { fname, lname, email } = userInfo.data.registeredData;
	console.log(fname);
	console.log(lname);
	console.log(email);

	const [attendanceForm, setAttendanceForm] = useState({
		attendance: "",
		fname: fname,
		lname: lname,
		email: email,
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
			comment: "",
		});
	};

	return (
		<div className='body__attendance'>
			<header>
				<HeaderStudents />
			</header>
			<main>
				<Container className='attendance__container'>
					<Form
						onSubmit={handleSubmitForm}
						className='student__attendance--form'
					>
						<div className='title__holder--attendance'>Attendance Form</div>
						<h3>Can you Attend?</h3>

						<div className='mb-3'>
							<Form.Group>
								<strong>
									<Form.Check
										type='radio'
										label="Yes, I'll be there!"
										name='attendance'
										value='present'
										checked={attendanceForm.attendance === "present"}
										onChange={handleChange}
										required
									/>
									<Form.Check
										type='radio'
										label="Can't make it"
										name='attendance'
										value='absent'
										checked={attendanceForm.attendance === "absent"}
										onChange={handleChange}
										required
									/>
								</strong>
							</Form.Group>
						</div>

						<Form.Control
							as='textarea'
							name='comment'
							value={attendanceForm.comment}
							onChange={handleChange}
							placeholder='Leave a comment here'
							style={{ height: "100px" }}
							required
						/>
						<Button variant='primary' className='my-3' size='lg' type='submit'>
							Send
						</Button>
					</Form>
				</Container>
			</main>
		</div>
	);
}

export default AttendanceStudents;
