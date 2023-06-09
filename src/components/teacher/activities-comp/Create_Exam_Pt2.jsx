import React from "react";
import Container from "react-bootstrap/Container";

const Create_Exam_Pt2 = ({ subject, title, desc, examLength }) => {
  console.log(subject);
  return (
    <>
      <Container>
        <div className="h4">creating exam</div>
      </Container>
    </>
  );
};

export default Create_Exam_Pt2;
