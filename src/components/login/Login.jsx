import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./login.css";

import API_Service from "../../api-service/API_Service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setUserLogin((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API_Service.post("/users/login", userLogin);
      console.log(typeof response.data.id);
      if (!response.data.status) {
        console.log("User not found");
      } else {
        response.data.type === "student"
          ? navigate("/students")
          : navigate("/teacher");
        dispatch(login({ userID: response.data.id }));
      }
    } catch (error) {
      console.error(error);
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
