import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import API_Service from "../../../api-service/API_Service";
import Button from "react-bootstrap/Button";

const Activity_Details = () => {
  const [exam, setExam] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getExam = async () => {
      try {
        const response = await API_Service.get(`/teacher/activities/` + id);
        // console.log(response.data.exam);
        setExam(response.data.exam);
      } catch (error) {
        console.error(error);
      }
    };

    getExam();
  }, []);
  //   console.log(typeof exam.id);
  return (
    <Container className="mt-3">
      <div className="questionaire">
        <Link to="/teachers/activities">
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
          <h6>Activity No: </h6> <span className="ms-4">{exam.id}</span>
        </div>
        <div className="d-flex">
          <h6>Activity Length: </h6>
          <span className="ms-4">{exam.examLength}</span>
        </div>

        <h6>Questions</h6>
        {exam.questions &&
          exam.questions.map((question) => {
            return (
              <Container>
                <div key={question.id} className="mt-3 view-questionaire">
                  <h6>
                    Q{question.id}: {question.question}
                  </h6>
                  <div className="">
                    <span className="mx-3">A. {question.a}</span>
                    <span className="mx-3">B. {question.b}</span>
                    <span className="mx-3">C. {question.c}</span>
                    <span className="mx-3">D. {question.d}</span>
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
