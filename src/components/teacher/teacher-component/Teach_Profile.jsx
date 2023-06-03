import React from "react";
// import Button from "react-bootstrap/Button";
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
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae
        suscipit voluptas quae laborum error, aperiam, nisi ipsam voluptates,
        incidunt quod. Saepe consequatur vero corrupti! Sequi eius quidem cumque
        fugiat qui odit voluptatem. Modi, molestiae ipsum. Nemo reprehenderit at
        quis, architecto dolore excepturi, fugiat repellendus sapiente nisi,
        deleniti a. Architecto, eveniet? Qui, deleniti ratione? Natus dolore
        officia maxime aspernatur quis.
      </Container>
    </>
  );
};

export default Teach_Profile;
