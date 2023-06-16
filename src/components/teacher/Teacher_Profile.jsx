import React from "react";
import Header from "../../layout/Header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const Teacher_Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Container className="teach-profile-wrapper mt-5">
        <Card style={{ maxWidth: 600, margin: "0 auto", height: 250 }}>
          <Card.Body>
            <Container>
              <Row>
                <Col sm={5}>
                  <Card.Img
                    variant=""
                    src={userInfo.data.teachersData.img}
                    style={{
                      border: "1px solid green",
                      width: 150,
                      height: 180,
                    }}
                  />
                  <Card.Text className="h5 mt-3 ms-3">
                    Ms. {userInfo.data.teachersData.fname}{" "}
                    {userInfo.data.teachersData.lname}
                  </Card.Text>
                </Col>
                <Col sm={7}>
                  <Card.Text>
                    <span>ID: </span>
                    <span>{userInfo.data.teachersData._id}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Address: </span>
                    <span>{userInfo.data.teachersData.address}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Email: </span>
                    <span>{userInfo.data.teachersData.email}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Contact: </span>
                    <span>{userInfo.data.teachersData.contact}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Gender: </span>
                    <span>{userInfo.data.teachersData.gender}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Age: </span>
                    <span>{userInfo.data.teachersData.age}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Date Joined: </span>
                    <span>{userInfo.data.teachersData.createdAt}</span>
                  </Card.Text>
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
