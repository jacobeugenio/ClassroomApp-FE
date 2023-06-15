import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API_Service from "../../api-service/API_Service";
import { useSelector } from "react-redux";

const Teacher_Profile = () => {
  const [loggedInTeacher, setLoggedInTeacher] = useState([]);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const getLoggedInTeacher = async () => {
      try {
        const response = await API_Service.get(
          "/teachers/get-teacher/" + user.userID
        );
        setLoggedInTeacher(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getLoggedInTeacher();
  }, [user.userID]);
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
                    src={loggedInTeacher.img}
                    style={{
                      border: "1px solid green",
                      width: 150,
                      height: 150,
                    }}
                  />
                  <Card.Text>
                    Ms. {loggedInTeacher.fname} {loggedInTeacher.lname}
                  </Card.Text>
                </Col>
                <Col sm={7}>
                  <Card.Text>
                    <span>ID: </span>
                    <span>{loggedInTeacher._id}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Address: </span>
                    <span>{loggedInTeacher.address}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Email: </span>
                    <span>{loggedInTeacher.email}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Contact: </span>
                    <span>{loggedInTeacher.contact}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Gender: </span>
                    <span>{loggedInTeacher.gender}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Age: </span>
                    <span>{loggedInTeacher.age}</span>
                  </Card.Text>
                  <Card.Text>
                    <span>Date Joined: </span>
                    <span>{loggedInTeacher.createdAt}</span>
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
// "_id": "64880625486b990885152a15",
// "email": "sfaedw@gmail.com",
// "password": "123",
// "lname": "cenabre",
// "fname": "Richard",
// "contact": "12345678909",
// "gender": "Female",
// "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACbCAMAAAAQnCT1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0M2OUZDMkZEMzU2MTFFMUFERDBCMkJDRjgxMEVFNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0M2OUZDMzBEMzU2MTFFMUFERDBCMkJDRjgxMEVFNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ODZGMEMxNEQzM0UxMUUxQUREMEIyQkNGODEwRUU3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzY5RkMyRUQzNTYxMUUxQUREMEIyQkNGODEwRUU3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrAX7JcAAACHUExURY2NjNLmnPn8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",
// "age": "21",
// "createdAt": "2023-06-13T06:01:09.668Z",
// "__v": 0
