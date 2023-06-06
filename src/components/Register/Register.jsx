import React, { useState } from "react";
import API_Service from "../../api-service/API_Service";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Register() {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		username: "",
		contact: "",
		email: "",
		age: "",
		gender: "",
		address: "",
		password: "",
		password2: "",
		type: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		// console.log(value);
		console.log(name);

		if (event.target.type === "radio") {
			setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
		} else {
			setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
		}
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		API_Service.post("students/reg-student", formData)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log("error:", error);
			});

		if (formData.password !== formData.password2) {
			alert("Passwords do not match");
		} else {
			console.log(formData);
			setFormData({
				fname: "",
				lname: "",
				username: "",
				contact: "",
				email: "",
				age: "",
				gender: "",
				address: "",
				password: "",
				password2: "",
				type: "",
			});
		}
	};

	// const handleErrorFunction = (name) => {
	// 	name === error.name && (
	// 		<div className='error__messages'>{error.message}</div>
	// 	);
	// };

	return (
		<Container className='my-5'>
			<Form onSubmit={onSubmitForm}>
				<Form.Group className='mb-3' controlId='formBasicFirstName'>
					<Form.Label>First Name:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.fname}
						name='fname'
						className='input-container'
						type='text'
						placeholder='Enter first name'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicLastName'>
					<Form.Label>Last Name:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.lname}
						name='lname'
						className='input-container'
						type='text'
						placeholder='Enter last name'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicAge'>
					<Form.Label>Age:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.age}
						name='age'
						className='input-container'
						type='number'
						placeholder='Enter you age'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicAddress'>
					<Form.Label>Address:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.address}
						name='address'
						className='input-container'
						type='text'
						placeholder='Enter address'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<InputGroup>
						<Form.Control
							onChange={handleChange}
							value={formData.email}
							name='email'
							className='input-container'
							type='email'
							placeholder='Enter email'
							aria-label='Enter email'
							aria-describedby='basic-addon2'
							required
						/>
						<InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
					</InputGroup>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicUsername'>
					<Form.Label>Username:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.username}
						name='username'
						className='input-container'
						type='text'
						placeholder='Enter username'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicGender'>
					<Form.Control
						as='select'
						aria-label='Default select example'
						onChange={handleChange}
						value={formData.gender}
						name='gender'
					>
						<option>Choose gender</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicContact'>
					<Form.Label>Contact:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.contact}
						name='contact'
						className='input-container'
						type='tel'
						placeholder='Enter contact number'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.password}
						name='password'
						className='input-container'
						type='password'
						placeholder='Enter password'
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword2'>
					<Form.Label>Confirm Password:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.password2}
						name='password2'
						className='input-container'
						type='password'
						placeholder='Enter password'
						required
					/>
				</Form.Group>

				<div className='mb-3'>
					<Form.Group>
						<Row>
							<Col>
								<Form.Check
									type='radio'
									label='Student'
									name='type'
									value='student'
									checked={formData.type === "student"}
									onChange={handleChange}
								/>
							</Col>
							<Col>
								<Form.Check
									type='radio'
									label='Teacher'
									name='type'
									value='teacher'
									checked={formData.attendance === "teacher"}
									onChange={handleChange}
								/>
							</Col>
						</Row>
					</Form.Group>
				</div>

				<Button variant='primary' type='submit' className='mt-4'>
					Register
				</Button>
			</Form>
		</Container>
	);
}

export default Register;
