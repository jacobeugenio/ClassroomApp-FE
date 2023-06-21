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

const Edit_Teacher_Profile = ({ user, getTeacher }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const data = user.data.registeredData;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    fname: data.fname,
    lname: data.lname,
    username: data.username,
    email: data.email,
    contact: data.contact,
    age: data.age,
    gender: data.gender,
    address: data.address,
    password: data.password,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await API_Service.put(
        "/teachers/update-teacher/" + data._id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      if (response.data.status) {
        toast.success(response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        handleClose();
        getTeacher();
      } else {
        toast.error(response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error(error.response.data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Button
        variant="success"
        style={{ width: 150 }}
        size="sm"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#98eecc" }} closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mx-2" onSubmit={onSubmitForm}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={formData.fname}
                  onChange={handleChange}
                  name="fname"
                  type="text"
                  placeholder="Enter first name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={formData.lname}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address </Form.Label>
              <Form.Control
                value={formData.address}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="House no, Sitio, Barangay, Municipality"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  value={formData.age}
                  onChange={handleChange}
                  name="age"
                  type="text"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.gender}
                  onChange={handleChange}
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
                  value={formData.contact}
                  onChange={handleChange}
                  name="contact"
                  type="text"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <hr className="mt-4" />
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faUserPlus} /> Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edit_Teacher_Profile;
