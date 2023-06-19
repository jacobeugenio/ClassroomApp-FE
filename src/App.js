import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">KodeVamp's Classroom App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Users</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
             <Button variant="outline-success">Log In</Button>
            <Button variant="outline-success">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/img2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/img3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>sm=8
        <Image src="./img/about.jpg" 
        fluid 
        rounded
        className=""
        />;
        </Col>
        <Col sm={5}>
          <h1 classes="font-weight-light">About the App</h1>
          <p class="mt-4">
          KodeVamp's Classroom App is a web-based learning management system, or LMS. It is used by learning institutions, educators, and students to access and manage online course learning materials and communicate about skill development and learning achievement. </p>

          <p>KodeVamp's Classroom App includes a variety of customizable course creation and management tools, course and user analytics and statistics, and internal communication tools. </p>

          <p>Institutions may provide users with a KodeVamp account, or individual users can try the free version by signing up for their own account.
          </p>
          <Button variant="outline-warning">Learn More</Button>
          </Col>
      </Row>
      <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            Users
            </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/school1.jpg" />
      <Card.Body>
        <Card.Title>Schools</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/homeschool.jpg" />
      <Card.Body>
        <Card.Title>Homeschool</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/technicalcourse.jpg" />
      <Card.Body>
        <Card.Title>Technical Course</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </main>
    <footer class="py-5 my-5 bg-dark">
      <Container className= "px-4">
        <p class="text-center text-white">
          Copyright & copy; Your website 2023
          </p>
        </Container> 

    </footer>
  </div>
  );
}
export default App;