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
import { useNavigate, useParams } from "react-router-dom";

const Create_Exam_Pt1 = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    subject: "",
    title: "",
    desc: "",
    examLength: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const navigate = useNavigate();
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    API_Service.post("/teachers/create-exam-first-part", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/teacher/create_exam_pt_two");
  };
  return (
    <>
      <Container className="mt-3">
        <Button variant="danger" size="sm" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} /> <span>Create Exam</span>
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exam Details</Modal.Title>
        </Modal.Header>
        <Form className="mx-2" onSubmit={onSubmitForm}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.subject}
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.title}
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
                  value={formData.desc}
                  name="desc"
                  type="text"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="exam_length">
                <Form.Label>Exam Length</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={formData.examLength}
                  name="examLength"
                  type="text"
                />
              </Form.Group>
            </Row>

            <hr className="mt-4" />
            <Button variant="primary" type="submit">
              Add Sudent
            </Button>
          </Modal.Body>
        </Form>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Continue
            </Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Create_Exam_Pt1;
