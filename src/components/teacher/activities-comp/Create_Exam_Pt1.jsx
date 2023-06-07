import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API_Service from "../../../api-service/API_Service";

const Create_Exam_Pt1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    API_Service.post("/teachers/add-student", {});
  };
  return (
    <>
      <Container className="mt-3">
        <Button variant="danger" size="sm" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} /> <span>Create Exam</span>
        </Button>
      </Container>
      <Form className="mx-2" onSubmit={onSubmitForm}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Exam Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.fname}
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.lname}
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="desc">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.email}
                  name="desc"
                  type="text"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="exam_length">
                <Form.Label>Exam Length</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.username}
                  name="username"
                  type="number"
                />
              </Form.Group>
            </Row>

            <hr className="mt-4" />
            {/* <Button variant="primary" type="submit">
              Add Sudent
            </Button> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default Create_Exam_Pt1;
