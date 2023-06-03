import React, { useState } from "react";
import API_Service from "../../api-service/API_Service";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Register() {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		age: "",
		email: "",
		username: "",
		gender: "",
		contact: `09-`,
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		// console.log(value);
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		API_Service.post("students/register-student", formData).then((response) => {
			console.log(response);
		});

		console.log(formData);
		setFormData({
			fname: "",
			lname: "",
			age: "",
			email: "",
			username: "",
			gender: "",
			contact: "",
			password: "",
		});
	};

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

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formData.email}
						name='email'
						className='input-container'
						type='email'
						placeholder='Enter email'
						required
					/>
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

				<Button variant='primary' type='submit'>
					Register
				</Button>
			</Form>
		</Container>
	);
}

export default Register;
