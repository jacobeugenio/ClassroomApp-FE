import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

import { useNavigate } from "react-router-dom";
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
        console.log("Invalid Credentials");
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <Container className="container__login">
      <Form onSubmit={handleLoginSubmit} className="form__login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>Login</h1>
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input-container"
            value={userLogin.username}
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Button type="submit" className="btn__login">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
