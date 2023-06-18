import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API_Service from "../../../api-service/API_Service";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

const Create_Exam_Pt1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "",
    title: "",
    desc: "",
    examLength: "",
    questions: [{}],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const { subject, title, desc, examLength } = formData;
  const onSubmitForm = async (event) => {
    event.preventDefault();

    const response = await API_Service.post(
      "/teachers/create-exam-first-part",
      formData
    );

    if (response.data._id) {
      navigate("/teacher/activities/part2/" + response.data._id);
    }
  };

  // const errorHandler = (name) => {
  //   return name === errors.name && <div className="error">{errors.message}</div>;
  // };    return setErrors({ name: response.data.errorName, message: response.data.message });
  return (
    <>
      <Container className="mt-3">
        <Button variant="success" size="sm" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} /> <span>Create Exam</span>
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="card_style" closeButton>
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
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faShareFromSquare} className="me-1" />
              Continue
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
