import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import EditTeacherProfile from "./profile-comp/Edit_Teacher_Profile";
import API_Service from "../../api-service/API_Service";

const Teacher_Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const id = userInfo.data.registeredData._id;
  const [teacher, setTeacher] = useState({});

  const getTeacher = async () => {
    const response = await API_Service.get("/teachers/get-teacher/" + id, {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    });
    setTeacher(response.data);
  };
  // console.log(teacher);
  useEffect(() => {
    getTeacher();
  }, []);

  return (
    <>
      <Header />
      <Container className="teach-profile-wrapper my-5 pt-5">
        <Card
          style={{ maxWidth: 600, margin: "0 auto", height: "fit-content" }}
        >
          <Card.Body>
            <Container>
              <Row>
                <Col sm={5}>
                  <Card.Img
                    variant=""
                    src={teacher.img}
                    style={{
                      border: "1px solid green",
                      width: 150,
                      height: 180,
                    }}
                  />
                  <Card.Text className="h4 my-3 ms-3">
                    {teacher.gender === "Male" ? (
                      <>
                        <span>Mr. </span>
                      </>
                    ) : (
                      <>
                        <span>Ms. </span>
                      </>
                    )}{" "}
                    {teacher.fname} {teacher.lname}
                  </Card.Text>
                </Col>
                <Col sm={7} className="mt-md-3 m-0">
                  <Card.Text>
                    <span>ID: </span>
                    <span>{teacher._id}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Address: </span>
                    <span>{teacher.address}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Email: </span>
                    <span>{teacher.email}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Contact: </span>
                    <span>{teacher.contact}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Gender: </span>
                    <span>{teacher.gender}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Age: </span>
                    <span>{teacher.age}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Date Joined: </span>
                    <span>{teacher.createdAt}</span>
                  </Card.Text>

                  <EditTeacherProfile user={userInfo} getTeacher={getTeacher} />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Teacher_Profile;
