import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import API_Service from "../../../api-service/API_Service";

const Edit_Student_Details = (student) => {
  //For registration Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(student);

  const [formData, setFormData] = useState({
    fname: student.props.fname,
    lname: student.props.lname,
    username: student.props.username,
    email: student.props.email,
    contact: student.props.contact,
    age: student.props.age,
    // img: student.props.fname,
    gender: student.props.gender,
    address: student.props.address,
    password: student.props.password,
    password2: student.props.password2,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    API_Service.put("/teachers/update-student/" + student.props.id, {
      id: student.props.id,
      fname: formData.fname,
      lname: formData.lname,
      username: formData.username,
      email: formData.email,
      contact: formData.contact,
      // img: formData.img,
      age: formData.age,
      gender: formData.gender,
      address: formData.address,
      password: formData.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button
        variant="outline-danger"
        size="sm"
        className="mx-1 d-flex flex-row align-items-center p-1"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <span>Edit</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Details</Modal.Title>
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
                  placeholder=""
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
                  placeholder="{formData.gender}"
                >
                  {/* <option>{formData.gender}</option> */}
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
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
            {/* <Row className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload profile picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleChange}
                  value={formData.img}
                  name="img"
                />
              </Form.Group>
            </Row> */}
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
            </Row>

            <hr className="mt-4" />
            <Button variant="primary" type="submit">
              Update Student Information
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

export default Edit_Student_Details;
