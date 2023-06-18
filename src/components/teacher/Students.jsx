import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import StudentDetails from "./student-component/StudentDetails";
import StudentRegmodal from "./student-component/StudentRegModal";

import Container from "react-bootstrap/Container";
import API_Service from "../../api-service/API_Service";

const Students = () => {
  const [students, setStudents] = useState([]);
  const getUsers = async () => {
    try {
      const response = await API_Service.get("/teachers/get-students");
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Header />
      <Container className="my-4">
        <h3>Students List</h3>
        <hr />
        <StudentRegmodal func={getUsers} />
      </Container>
      <Container>
        <StudentDetails students={students} getUsers={getUsers} />
      </Container>
    </>
  );
};

export default Students;
