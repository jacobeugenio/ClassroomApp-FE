import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";

const Activities_Card = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getExams = async () => {
      try {
        const response = await API_Service.get("/teachers/get-exams");
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
        exams.map((exam, index) => {
          return (
            <Card key={index}>
              <Card.Header>{exam.subject}</Card.Header>
              <Card.Body>
                <Card.Title>{exam.title}</Card.Title>
                <Card.Text>{exam.desc}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      {/* </Container> */}
    </>
  );
};

export default Activities_Card;
