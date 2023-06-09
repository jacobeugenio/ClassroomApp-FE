import React from "react";
import Header from "../../layout/Header";
import Container from "react-bootstrap/Container";
import ActivitiesCard from "./activities-comp/Activities_Card";
import CreateExamPt1 from "./activities-comp/Create_Exam_Pt1";

const Activities = () => {
  return (
    <>
      <Header />
      <CreateExamPt1 />

      <Container className="d-flex flex-wrap gap-3 mt-3">
        <ActivitiesCard />
      </Container>
    </>
  );
};

export default Activities;
