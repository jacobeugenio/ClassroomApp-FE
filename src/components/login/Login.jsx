import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

import API_Service from "../../api-service/API_Service";

const Login = () => {
	const [userLogin, setUserLogin] = useState({
		username: "",
		password: "",
	});

	const handleLoginSubmit = (event) => {
		event.preventDefault();

		const { username, password } = event.target.elements;
		setUserLogin({
			username: username.value,
			password: password.value,
		});

		API_Service.post("/students/login", userLogin)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container className='container__login'>
			<Form onSubmit={handleLoginSubmit} className='form__login'>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<h1>Login</h1>
					<Form.Label>Username</Form.Label>
					<Form.Control
						className='input-container'
						type='text'
						name='username'
						placeholder='Enter username'
						required
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						className='input-container'
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
				</Form.Group>
				<Button type='submit' className='btn__login'>
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
