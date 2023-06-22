import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import API_Service from "../../../api-service/API_Service";
import { Link } from "react-router-dom";
import DeleteActivity from "./Delete_Activity";
import { useSelector } from "react-redux";
import PublishActivity from "./Publish_Activity";
import moment from "moment/moment";

const Activities_Card = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [exams, setExams] = useState([]);

  const getExams = async () => {
    try {
      const response = await API_Service.get("/teachers/activities", {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
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
                  Exam no. {exams.length - index}
                  <h4 className="float-end">{exam.examLength}</h4>
                </Card.Header>
                <Card.Body className="card-body">
                  <Card.Title style={{ fontSize: 14, fontWeight: "bold" }}>
                    {exam.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: 12 }}>
                    {moment(exam.createdAt).format("MMMM Do YYYY")}
                  </Card.Text>
                </Card.Body>
              </Link>
              <Card.Footer
                className="text-muted d-flex card_style"
                style={{ fontSize: 10 }}
              >
                <DeleteActivity exam={exam} func={getExams} />

                <PublishActivity exam={exam} />
              </Card.Footer>
            </Card>
          );
        })}
    </>
  );
};

export default Activities_Card;
