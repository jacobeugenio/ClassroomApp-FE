import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";
import { Link } from "react-router-dom";

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
  return (
    <>
      {/* <Container className="activities-container"> */}
      {exams &&
        exams.map((exam) => {
          return (
            <Card key={exam.id} className="card_activity">
              <Link to={`/teacher/activities/` + exam.id}>
                <Card.Header>{exam.subject}</Card.Header>
                <Card.Body>
                  <Card.Title>{exam.title}</Card.Title>
                  <Card.Text>{exam.desc}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      {/* </Container> */}
    </>
  );
};

export default Activities_Card;
