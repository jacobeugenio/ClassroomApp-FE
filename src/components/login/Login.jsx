import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/usersApiSlice";
import { setCredentials } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
	const [userLogin, setUserLogin] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login] = useLoginMutation();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserLogin((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await login(userLogin);

			if (res.data.status) {
				dispatch(setCredentials({ ...res }));
				if (res.data.type === "teacher") {
					navigate("/teacher");
				} else {
					navigate("/student");
				}
			} else {
				toast.error(res.data.msg, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		} catch (err) {
			toast.error(err?.data?.message || err.error, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};

	return (
		<Container className='container__login'>
			<Form onSubmit={handleLoginSubmit} className='form__login'>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<h3 className='text-center'>KodeVamp's Classroom</h3>
					<hr />
					<Form.Label>Email</Form.Label>
					<Form.Control
						className='input-container'
						value={userLogin.email}
						onChange={(e) => handleChange(e)}
						type='email'
						name='email'
						placeholder='Enter email'
						autoComplete='off'
						required
					/>
					{/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						className='input-container'
						value={userLogin.password}
						onChange={(e) => handleChange(e)}
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
				</Form.Group>
				<small>
					Doesnt have an account? Register
					<Link to='/register'> Here</Link>
				</small>
				<Button variant='success' type='submit' className='btn__login mt-3'>
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
