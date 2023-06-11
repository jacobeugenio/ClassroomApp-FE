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
  // const [profileImg, setProfileImg] = useState({ img: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    formData.img = base64;
    // setProfileImg(base64);
    // formData.img = base64;
  };
  const onSubmitForm = async (event) => {
    event.preventDefault();

    // formData.img = profileImg;
    await API_Service.post("/teachers/add-student", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <option value="Female">FeMale</option>
                  <option value="Male">Memale</option>
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
              <Form.Group controlId="img" className="mb-3">
                <Form.Label>Upload profile picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => handleFile(e)}
                  name="img"
                  accept=".jpeg, .jpg, .png"
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
