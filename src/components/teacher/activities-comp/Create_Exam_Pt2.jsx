import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import API_Service from "../../../api-service/API_Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Create_Exam_Pt2 = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [disAbled, setDisAbled] = useState(false);
  const [error, setError] = useState({
    question: "",
  });
  const [examData, setExamData] = useState({});
  const [questions, setQuestions] = useState([
    {
      question: "",
      choice_a: "",
      choice_b: "",
      choice_c: "",
      choice_d: "",
      answer: "",
    },
  ]);

  const handleChange = (e, index) => {
    console.log(index, e.target.name, e.target.value);
    const data = [...questions];
    data[index][e.target.name] = e.target.value;
    setQuestions(data);
    // setDisAbled(false);
  };
  const navigate = useNavigate();
  const onSubmitForm = async (event) => {
    event.preventDefault();
    console.log(questions);
    const response = await API_Service.patch(
      "/teachers/create-exam-second-part/" + id,
      questions,
      examData
    );
    console.log(response);
    navigate("/teacher/activities");
  };

  const addFields = (e) => {
    console.log(questions);
    setCount((prevCount) => prevCount + 1);
    const obj = {
      question: "",
      choice_a: "",
      choice_b: "",
      choice_c: "",
      choice_d: "",
      answer: "",
    };
    setQuestions([...questions, obj]);
  };

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
      <Container className="my-4 create-exam px-5">
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
          Length: <span>{examData.examLength}</span>
        </p>
        <Form onSubmit={onSubmitForm}>
          {questions.map((question, index) => {
            return (
              <div key={index}>
                <Form.Group className="mb-3" controlId="question">
                  <Form.Label className="mt-3">
                    Question {index + 1} <hr style={{ marginTop: 0 }} />
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="question"
                    placeholder="question"
                    value={questions.question}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {error.question}
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="choice_a">
                    <Form.Label>A</Form.Label>
                    <Form.Control
                      type="text"
                      name="choice_a"
                      placeholder="choice_a"
                      value={questions.choice_a}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="choice_b">
                    <Form.Label>B</Form.Label>
                    <Form.Control
                      type="text"
                      name="choice_b"
                      placeholder="choice_b"
                      value={questions.choice_b}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="choice_c">
                    <Form.Label>C</Form.Label>
                    <Form.Control
                      type="text"
                      name="choice_c"
                      placeholder="choice_c"
                      value={questions.choice_c}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="choice_d">
                    <Form.Label>D</Form.Label>
                    <Form.Control
                      type="text"
                      name="choice_d"
                      placeholder="choice_d"
                      value={questions.choice_d}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="answer">
                  <Form.Label>Set Answer</Form.Label>
                  <Form.Control
                    type="text"
                    as="select"
                    value={questions.answer}
                    onChange={(e) => handleChange(e, index)}
                    name="answer"
                  >
                    <option disabled>Select answer key...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Form.Control>
                </Form.Group>
              </div>
            );
          })}
        </Form>

        {count === examData.examLength ? (
          <>
            <p className="mt-3 text-center">
              /* You have reached the exam alloted length!...*/
            </p>

            <Button
              className="mb-5"
              variant="success"
              size="md"
              style={{ width: "50%", textTransform: "uppercase" }}
              onClick={onSubmitForm}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Submit
            </Button>
          </>
        ) : (
          <>
            <Button
              disabled={disAbled}
              className="mt-3 mb-5"
              variant="success"
              size="sm"
              onClick={addFields}
            >
              <FontAwesomeIcon icon={faArrowDown} /> Continue to Question #
              {count + 1}
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Create_Exam_Pt2;
