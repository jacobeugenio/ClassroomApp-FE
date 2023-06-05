import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Container from "react-bootstrap/Container";
import API_Service from "../../api-service/API_Service";
import Activities_Card from "./activities-comp/Activities_Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Activities = () => {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Button variant="danger" size="sm">
          <FontAwesomeIcon icon={faPlus} /> <span>Create Exam</span>
        </Button>
      </Container>
      <Container className="d-flex flex-wrap gap-2 mt-3">
        <Activities_Card />
      </Container>
    </>
  );
};

export default Activities;
