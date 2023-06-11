import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import API_Service from "../../../api-service/API_Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Create_Exam_Pt2 = () => {
  const { id } = useParams();
  const [examData, setExamData] = useState({});

  useEffect(() => {
    const getExam = async () => {
      try {
        const response = await API_Service.get(
          `/teachers/activities/part2/${id}`
        );
        setExamData(response.data[0]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getExam();
  }, [id]);
  return (
    <>
      <Container className="mt-4 create-exam">
        <h2>Create Exam</h2>
        <hr />
        <p className="h6">
          Subject: <span>{examData.subject}</span>
        </p>
        <p className="h6">
          Title: <span>{examData.title}</span>
        </p>
        <p className="h6">
          Description: <span>{examData.desc}</span>
        </p>
        <p className="h6">
          Exam ID: <span>{examData._id}</span>
        </p>
        <p className="h6">
          Length <span>{examData.examLength}</span>
        </p>

        <Form>
          <h4>Questions</h4>
          {Array.from({ length: examData.examLength }).map((_, index) => (
            <div key={index}>
              <Form.Group
                className="mb-3"
                controlId={examData.questions + index + 1}
              >
                <Form.Label className="mt-3">
                  Question {index + 1} <hr style={{ marginTop: 0 }} />
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter question"
                  style={{ marginTop: -7 }}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="subject{index}">
                  <Form.Label>A</Form.Label>
                  <Form.Control type="text" placeholder="Enter choice A" />
                </Form.Group>

                <Form.Group as={Col} controlId="title">
                  <Form.Label>B</Form.Label>
                  <Form.Control type="text" placeholder="Enter choice B" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="subject{index}">
                  <Form.Label>C</Form.Label>
                  <Form.Control type="text" placeholder="Enter choice C" />
                </Form.Group>

                <Form.Group as={Col} controlId="title{index}">
                  <Form.Label>D</Form.Label>
                  <Form.Control type="text" placeholder="Enter choice D" />
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="answer{index}">
                <Form.Label>Answer Key</Form.Label>
                <Form.Control
                  as="select"
                  // onChange={handleChange}
                  // value={formData.gender}
                  name="answer"
                  // placeholder="{formData.gender}"
                >
                  {/* <option>{formData.gender}</option> */}
                  <option disabled>Select Answer key...</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </Form.Control>
              </Form.Group>
            </div>
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      {/* <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </>
  );
};

export default Create_Exam_Pt2;
