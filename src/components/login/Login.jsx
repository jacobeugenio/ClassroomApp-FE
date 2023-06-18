import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/usersApiSlice";
import { setCredentials } from "../../redux/authSlice";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserLogin((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login(userLogin);
      console.log(res);
      if (res.data.status) {
        if (res.data.type === "teacher") {
          dispatch(setCredentials({ ...res }));
          navigate("/teacher");
        } else {
          dispatch(setCredentials({ ...res }));
          navigate("/student");
        }
      } else {
        console.log(res.data.msg);
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <Container className="container__login">
      <Form onSubmit={handleLoginSubmit} className="form__login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 className="text-center">KodeVamp's Classroom</h3>
          <hr />
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input-container"
            value={userLogin.username}
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="Enter username"
            autoComplete="off"
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input-container"
            value={userLogin.password}
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <small>
          Doesnt have an account? Register
          <Link to="/register"> Here</Link>
        </small>
        <Button variant="success" type="submit" className="btn__login mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
