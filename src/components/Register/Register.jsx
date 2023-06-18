import React, { useState } from "react";
// import API_Service from "../../api-service/API_Service";
// import { useNavigate } from "react-router-dom";
import "./Register.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../redux/usersApiSlice";
import { setCredentials } from "../../redux/authSlice";
import API_Service from "../../api-service/API_Service";

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
    img: "",
    password: "",
    password2: "",
    type: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (event.target.type === "radio") {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    formData.img = base64;
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await API_Service.post("/users/register", formData);
      console.log(response);
      if (response.data.type === "student") {
        navigate("/student");
      } else {
        navigate("/teacher");
      }
    } catch (error) {
      console.error(error);
    }

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
        img: "",
        gender: "",
        address: "",
        password: "",
        password2: "",
        type: "",
      });
    }
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <Container className="container__registration">
      <Form onSubmit={onSubmitForm} className="form__registration">
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.fname}
            name="fname"
            className="input__container--registration"
            type="text"
            placeholder="Enter first name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.lname}
            name="lname"
            className="input__container--registration"
            type="text"
            placeholder="Enter last name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.age}
            name="age"
            className="input__container--registration"
            type="number"
            placeholder="Enter you age"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.address}
            name="address"
            className="input__container--registration"
            type="text"
            placeholder="Enter address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={handleChange}
              value={formData.email}
              name="email"
              className="input__container--registration"
              type="email"
              placeholder="Enter email"
              aria-label="Enter email"
              aria-describedby="basic-addon2"
              required
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.username}
            name="username"
            className="input__container--registration"
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Control
            as="select"
            aria-label="Default select example"
            onChange={handleChange}
            value={formData.gender}
            name="gender"
            className="input__container--registration"
          >
            <option>Choose gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Control
            as="select"
            aria-label="Default select example"
            onChange={handleChange}
            value={formData.gender}
            name="gender"
            className="input__container--registration"
            required
          >
            <option>Choose gender</option>
            <option value="Male" required>
              Male
            </option>
            <option value="Female" required>
              Female
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formFile">
          <Form.Label>Upload profile picture</Form.Label>
          <Form.Control
            type="file"
            className="input__container--registration"
            onChange={(e) => handleFile(e)}
            name="img"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name="password"
            className="input__container--registration"
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.password2}
            name="password2"
            className="input__container--registration"
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <div className="mb-3">
          <Form.Group>
            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Student"
                  name="type"
                  value="student"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Teacher"
                  name="type"
                  value="teacher"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </div>

        <div className="mb-3">
          <Form.Group>
            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Student"
                  name="type"
                  value="student"
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Teacher"
                  name="type"
                  value="teacher"
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
          </Form.Group>
        </div>
      </Form>
      <div className="intro__message--registration">
        <h1>Welcome to our Classroom Management App!</h1>
        <p>
          At [App Name], we are dedicated to providing teachers and students
          with a user-friendly and efficient platform to enhance their classroom
          experience. Our app simplifies the essential aspects of classroom
          management, focusing on attendance, grades, and exams.
        </p>
        <p>
          With our streamlined design and intuitive interface, you can easily
          navigate through the app's main sections:
        </p>
        <ol>
          <li>
            Profile: Your profile is the heart of our app. Here, you can create
            and manage your personal information, including your name, contact
            details, and profile picture. It allows you to showcase your
            professional identity and establish a connection with your students.
          </li>
          <li>
            Attendance: Say goodbye to the hassle of paper attendance sheets.
            Our Attendance page offers a convenient digital solution for
            tracking attendance. With just a few taps, you can mark students as
            present, absent, or late. Keep an organized record of attendance,
            allowing you to easily identify patterns or address any concerns.
          </li>
          <li>
            Grades: Our Grades page empowers you to efficiently manage and track
            student progress. Create grade categories, input scores, and
            calculate overall grades effortlessly. Stay organized with a
            comprehensive overview of each student's performance, ensuring
            accurate and timely grade reporting.
          </li>
          <li>
            Exams: Prepare and manage exams with ease using our Exams page.
            Create exam schedules, input exam details, and share important
            information such as exam duration and materials needed. You can also
            record and track exam scores to provide valuable feedback to your
            students.
          </li>
        </ol>
        <p>
          Our Classroom Management App focuses on these essential components to
          simplify your day-to-day teaching tasks, save you time, and promote
          effective communication with your students. We understand that your
          primary goal is to create a supportive and engaging learning
          environment, and our app is designed to assist you in achieving that
          objective.
        </p>
        <p>
          Join us today and experience the convenience and efficiency of our
          Classroom Management App. Together, let's foster a positive and
          productive educational journey for both you and your students.
        </p>
        <p>
          [App Name] - Simplifying Classroom Management for Modern Educators.
        </p>
      </div>
    </Container>
  );
}

export default Register;
