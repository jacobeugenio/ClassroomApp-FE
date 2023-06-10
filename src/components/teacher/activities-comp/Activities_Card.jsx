import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteExam from "./Delete_Exam";

const Activities_Card = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getExams = async () => {
      try {
        const response = await API_Service.get("/teachers/activities");
        // console.log(response.data);
        setExams(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getExams();
  }, []);
  console.log(exams.length);
  // useEffect(() => {
  //   window.location.reload(true);
  // }, [exams]);

  return (
    <>
      {/* <Container className="activities-container"> */}
      {/* <Button onClick={() => refresh()}>Refresh</Button> */}
      {exams &&
        exams.map((exam, index) => {
          return (
            <Card key={index} className="card_activity">
              <Link to={`/teacher/activities/` + exam._id}>
                <Card.Header>{exam.subject}</Card.Header>
                <Card.Body className="card-body">
                  <Card.Title>{exam.title}</Card.Title>
                </Card.Body>
              </Link>
              <Card.Footer className="text-muted" style={{ fontSize: 10 }}>
                {/* {exam.createdAt} */}
                <DeleteExam examID={exam._id} />
                <Button variant="outline-success" size="sm">
                  Publish
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      {/* </Container> */}
    </>
  );
};

export default Activities_Card;
