import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import API_Service from "../../api-service/API_Service";
import T_Image from "../../img/ava2.png";
import { Link } from "react-router-dom";
import ActivitiesCard from "./activities-comp/Activities_Card";
import StudentProfile from "./profile-comp/Student_Profile";
import GenDetail from "./Gen_Detail";
const Home = () => {
  const [teacher, setTeacher] = useState([]);
  const [students, setStudents] = useState([]);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await API_Service.get("/teachers/get-teachers");
        setTeacher(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTeacher();
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await API_Service.get("/teachers/get-students");
        setStudents(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getStudents();
  }, []);

  useEffect(() => {
    const getExams = async () => {
      try {
        const response = await API_Service.get("/teachers/activities");
        console.log(response.data);
        setExams(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getExams();
  }, []);

  useEffect(() => {
    // console.log(teacher);
  }, [teacher]);

  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row>
          <Col sm={4} className="text-center">
            {" "}
            <Card.Img
              variant="top"
              src={T_Image}
              style={{ height: 120, width: 120 }}
            />
            <br />
            <h5>Ms. Jane Doe</h5>
            <Link to="/teacher/profile">
              <Button variant="outline-info" size="sm" className="mb-4">
                View Profile
              </Button>{" "}
            </Link>
          </Col>
          <Col sm={8}>
            {" "}
            <Container>
              <GenDetail
                teacher={teacher.length}
                student={students.length}
                exam={exams.length}
              />

              <hr />
              <Row style={{ marginTop: -20 }}>
                <div className="mt-0">
                  <Button variant="success" size="sm" className="mt-4">
                    <Link to="/teacher/students">See all students</Link>
                  </Button>
                </div>

                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => {
                      if (index < 3) {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                            <td>{student.username}</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="activities-container">
        <ActivitiesCard />
      </Container>

      <StudentProfile />
    </>
  );
};

export default Home;
