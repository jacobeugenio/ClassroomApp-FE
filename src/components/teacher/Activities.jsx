import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Container from "react-bootstrap/Container";
import API_Service from "../../api-service/API_Service";
import Activities_Card from "./activities-comp/Activities_Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Activities = () => {
  const [exam, setExam] = useState([]);
  useEffect(() => {
    const getExam = async () => {
      try {
        const response = await API_Service.get("/teachers/get-exams");
        // console.log(response.data);
        setExam(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getExam();
  }, []);
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Button variant="danger" size="sm">
          <FontAwesomeIcon icon={faPlus} /> <span>Create Exam</span>
        </Button>
      </Container>
      <Container className="d-flex flex-wrap gap-1 mt-3">
        <Activities_Card />
      </Container>
    </>
  );
};

export default Activities;
