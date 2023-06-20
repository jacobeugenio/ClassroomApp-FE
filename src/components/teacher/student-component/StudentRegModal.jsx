import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import API_Service from "../../../api-service/API_Service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const StudentRegModal = (getStudents) => {
  const { userInfo } = useSelector((state) => state.auth);
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
    type: "student",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    formData.img = base64;
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await API_Service.post("/users/register", formData, {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      if (response.data.status) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        handleClose();
        getStudents.func();
        setFormData("");
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Button variant="success" size="sm" onClick={handleShow}>
        <FontAwesomeIcon icon={faUserPlus} /> New Student
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#98eecc" }} closeButton>
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
                  <option value="Male">Male</option>
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
                  placeholder="Confirm Password"
                />
              </Form.Group>
            </Row>

            <hr className="mt-4" />
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faUserPlus} /> Add Sudent
            </Button>
          </Form>
        </Modal.Body>
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
