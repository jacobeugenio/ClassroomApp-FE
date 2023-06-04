import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
// import Teach_Profile from "./teacher-component/Teach_Profile";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import API_Service from "../../api-service/API_Service";
import T_Image from "../../img/ava2.png";
import { Link } from "react-router-dom";
const Home = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await API_Service.get("/teachers/get-teachers");
        setTeacher(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTeacher();
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
            {/* <Teach_Profile data={teacher} /> */}
            {/* {teacher.length > 0 && <Teach_Profile data={teacher} />} */}
            <Card.Img
              variant="top"
              src={T_Image}
              style={{ height: 120, width: 120 }}
            />
            {/* <h4>Hello Teacher {teacher}</h4> */}
            <br />
            <Link to="/teacher/profile">
              <Button variant="outline-info" size="sm">
                View Profile
              </Button>{" "}
            </Link>
          </Col>
          <Col sm={8}>
            {" "}
            <Container>
              <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Body>
                        <Card.Title>25</Card.Title>
                        <Card.Text>Present</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <hr />
              <Row>
                <div>
                  <Button variant="success" size="sm" className="mt-4">
                    See all students
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
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="activities-container">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title> Card Title </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container className="s_profile_container my-4">
        {Array.from({ length: 20 }).map((_, idx) => (
          <Card>
            <Card.Img
              variant="top"
              src={T_Image}
              style={{ height: 50, width: 50 }}
            />
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
