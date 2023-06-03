import React, { useEffect, useState } from "react";
import Header from "../../../layout/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import T_Image from "../../../img/ava2.png";
import API_Service from "../../../api-service/API_Service";
const Teach_Profile = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await API_Service.get("/teachers/get-teachers");
        setTeacher(response.data.teacher[0]);
        // console.log(response.data.fname);
      } catch (error) {
        console.error(error);
      }
    };

    getTeacher();
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col sm={4} className=" text-center">
            <Card.Img
              variant="top"
              style={{ width: 120, height: 120 }}
              src={T_Image}
            />
            <h4 className="mt-3">
              Ms. {teacher.fname} {teacher.lname}
            </h4>
          </Col>
          <Col sm={8}>
            <Row>
              <Col className="h3">First Name:</Col>
              <Col xs={8} className="h3">
                {teacher.fname}
              </Col>
            </Row>
            <Row>
              <Col className="h3">Last Name:</Col>
              <Col xs={8} className="h3">
                {teacher.lname}
              </Col>
            </Row>
            <Row>
              <Col className="h3">Username:</Col>
              <Col xs={8} className="h3">
                {teacher.username}
              </Col>
            </Row>
            <Row>
              <Col className="h3">Contact:</Col>
              <Col xs={8} className="h3">
                {teacher.contact}
              </Col>
            </Row>
            <Row>
              <Col className="h3">Age:</Col>
              <Col xs={8} className="h3">
                {teacher.age}
              </Col>
            </Row>
            <Row>
              <Col className="h3">Gender:</Col>
              <Col xs={8} className="h3">
                {teacher.gender}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teach_Profile;
