import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

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

  const handleDelete = async (id) => {
    const response = await API_Service.delete("/teachers/activities/" + id);
    console.log(response);
    getExams();
  };

  return (
    <>
      {/* <Container className="activities-container"> */}
      {/* <Button onClick={() => refresh()}>Refresh</Button> */}
      {exams &&
        exams.map((exam, index) => {
          return (
            <Card key={index} className="card_activity">
              <Link to={`/teacher/activities/` + exam._id}>
                <Card.Header>
                  {exam.subject}{" "}
                  <h6 className="float-end">{exam.examLength}</h6>
                </Card.Header>
                <Card.Body className="card-body">
                  <Card.Title>{exam.title}</Card.Title>
                </Card.Body>
              </Link>
              <Card.Footer
                className="text-muted d-flex"
                style={{ fontSize: 10 }}
              >
                <Button
                  variant="success"
                  size="sm"
                  className="d-flex align-items-center me-1"
                  onClick={() => handleDelete(exam._id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                  <span className="ms-1">Delete</span>
                </Button>
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
