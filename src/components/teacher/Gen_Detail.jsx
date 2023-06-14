import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gen_Detail = (num) => {
  console.log(num);
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>{num.teacher}</Card.Title>
            <Card.Text>Teachers</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        {" "}
        <Card>
          <Card.Body>
            <Card.Title>{num.student}</Card.Title>
            <Card.Text>Students</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>{num.exam}</Card.Title>
            <Card.Text>Activities</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // <CardGroup className="gap-3">
    //   <Card>
    //     <Card.Body style={{ width: 300 }}>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>Present</Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <Card>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>Present</Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <Card>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>Present</Card.Text>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>
  );
};

export default Gen_Detail;
