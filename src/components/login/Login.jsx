import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

const Login = () => {
	return (
		<Container className='my-5'>
			<Form className=''>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						className='input-container'
						type='email'
						placeholder='Enter username'
					/>
					{/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						className='input-container'
						type='password'
						placeholder='Password'
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
