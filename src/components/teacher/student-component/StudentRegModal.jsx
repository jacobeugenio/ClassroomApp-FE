import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import API_Service from "../../../api-service/API_Service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const StudentRegModal = () => {
  //For registration Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    contact: "",
    age: "",
    img: "",
    gender: "",
    address: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    API_Service.post("/teachers/add-student", {
      fname: formData.fname,
      lname: formData.lname,
      username: formData.username,
      email: formData.email,
      contact: formData.contact,
      img: formData.img,
      age: formData.age,
      gender: formData.gender,
      address: formData.address,
      password: formData.password,
      password2: formData.password2,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // const addStudent = async () => {
    //   try {
    //     const response =   await API_Service.post("/teachers/add-student", {
    //         fname: formData.fname,
    //         lname: formData.lname,
    //         username: formData.username,
    //          email: formData.email,
    //          contact: formData.contact,
    //          age: formData.age,
    //          gender: formData.gender,
    //        address: formData.address,
    //          password: formData.password,
    //          password2: formData.password2,
    //        })
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // addStudent();

    // console.log(formData);
    // setFormData({
    //   fname: "",
    //   lname: "",
    //   age: "",
    //   email: "",
    //   address: "",
    //   username: "",
    //   gender: "",
    //   contact: "",
    //   password: "",
    //   password2: "",
    // });
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} /> New Student
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mx-2" onSubmit={onSubmitForm}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.fname}
                  name="fname"
                  type="text"
                  placeholder="Enter first name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.lname}
                  name="lname"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.username}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address </Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.address}
                name="address"
                type="text"
                placeholder="House no, Sitio, Barangay, Municipality"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.age}
                  name="age"
                  type="text"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleChange}
                  value={formData.gender}
                  name="gender"
                >
                  <option>Choose...</option>
                  <option value="female">Male</option>
                  <option value="male">Female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.contact}
                  name="contact"
                  type="text"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload profile picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleChange}
                  value={formData.img}
                  name="img"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.password2}
                  name="password2"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <hr className="mt-4" />
            <Button variant="primary" type="submit">
              Add Sudent
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default StudentRegModal;
