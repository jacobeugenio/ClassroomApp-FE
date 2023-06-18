import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import API_Service from "../../../api-service/API_Service";
import Button from "react-bootstrap/Button";

const Activity_Details = () => {
  const [exam, setExam] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getExam = async () => {
      try {
        const response = await API_Service.get(`/teachers/activities/${id}`);
        console.log(response);
        // console.log(response.data[0]);
        setExam(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getExam();
  }, [id]);
  // console.log(typeof exam.id);
  return (
    <Container className="my-3">
      <div className="questionaire">
        <Link to="/teacher/activities">
          <Button variant="outline-success" size="sm">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </Button>
        </Link>
        <h3 className="text-center ms-5">Activity Details</h3>
        <div className="d-flex">
          <h6>Subject: </h6> <span className="ms-4">{exam.subject}</span>
        </div>
        <div className="d-flex">
          <h6>Title: </h6>
          <span className="ms-4">{exam.title}</span>
        </div>
        <div className="d-flex">
          <h6>Description: </h6>
          <span className="ms-4">{exam.desc}</span>
        </div>
        <div className="d-flex">
          <h6>Activity No: </h6> <span className="ms-4">{exam._id}</span>
        </div>
        <div className="d-flex">
          <h6>Activity Length: </h6>
          <span className="ms-4">{exam.examLength}</span>
        </div>

        <h6>Questions</h6>
        {exam.questions &&
          exam.questions.map((question, index) => {
            return (
              <Container key={index}>
                <div className="mt-3 view-questionaire">
                  <h6>
                    Q{index + 1}: {question.question}
                  </h6>
                  <div className="">
                    <span className="mx-3">A. {question.choice_a}</span>
                    <span className="mx-3">B. {question.choice_b}</span>
                    <span className="mx-3">C. {question.choice_c}</span>
                    <span className="mx-3">D. {question.choice_d}</span>
                  </div>
                </div>
              </Container>
            );
          })}
      </div>
    </Container>
  );
};

export default Activity_Details;
