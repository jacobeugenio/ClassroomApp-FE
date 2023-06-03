import React, { useEffect, useState } from "react";

import Header from "../../layout/Header";
import StudentDetails from "./student-component/StudentDetails";
import StudentRegmodal from "./student-component/StudentRegModal";

import API_Service from "../../api-service/API_Service";

import Container from "react-bootstrap/Container";

const Students = () => {
  const [data, setData] = useState([]);

  const handleRefresh = () => {
    API_Service.get("students/get-students").then((response) =>
      setData(response.data)
    );
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await API_Service.get("/teachers/get-students");
        setData(response.data.students);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <Header />
      <Container className="my-4">
        <h3>Students List</h3>
        <hr />
        <StudentRegmodal />
      </Container>
      <Container>
        <button onClick={handleRefresh}>Refresh</button>
        <StudentDetails data={data} />
      </Container>
    </>
  );
};

export default Students;
