import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import DeleteActivity from "./Delete_Activity";

const Activities_Card = () => {
  const [exams, setExams] = useState([]);
  const getExams = async () => {
    try {
      const response = await API_Service.get("/teachers/activities");
      console.log(response.data);
      setExams(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getExams();
  }, []);

  return (
    <>
      {exams &&
        exams.map((exam, index) => {
          return (
            <Card key={index} className="card_activity">
              <Link
                to={`/teacher/activities/` + exam._id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Header className="card_style">
                  {exam.subject}
                  <h4 className="float-end">{exam.examLength}</h4>
                </Card.Header>
                <Card.Body className="card-body">
                  <Card.Title>{exam.title}</Card.Title>
                </Card.Body>
              </Link>
              <Card.Footer
                className="text-muted d-flex card_style"
                style={{ fontSize: 10 }}
              >
                <DeleteActivity exam={exam} func={getExams} />

                <Button
                  variant="outline-success"
                  size="sm"
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faShareFromSquare} className="me-1" />
                  Publish
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
    </>
  );
};

export default Activities_Card;
