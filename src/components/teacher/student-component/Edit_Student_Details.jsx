import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import API_Service from "../../../api-service/API_Service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Edit_Student_Details = ({ student, getUsers }) => {
  const { userInfo } = useSelector((state) => state.auth);
  //For registration Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(student);

  const [formData, setFormData] = useState({
    fname: student.fname,
    lname: student.lname,
    username: student.username,
    email: student.email,
    contact: student.contact,
    age: student.age,
    // img: student.img,
    gender: student.gender,
    address: student.address,
    password: student.password,
    password2: student.password2,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await API_Service.put(
        "/teachers/update-student/" + student._id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      toast.success(response.data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      await getUsers();
      handleClose();
    } catch (error) {
      console.log(error);
    }
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
              <Form.Group controlId="img" className="mb-3">
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
              <FontAwesomeIcon icon={faPenToSquare} /> Update Student
              Information
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
