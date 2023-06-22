import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import StudentDetails from "./student-component/StudentDetails";
import StudentRegmodal from "./student-component/StudentRegModal";

import Container from "react-bootstrap/Container";
import API_Service from "../../api-service/API_Service";
import { useSelector } from "react-redux";
import StudentsAttendance from "./student-component/Students_Attendance";

const Students = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [students, setStudents] = useState([]);

  const getUsers = async () => {
    try {
      const response = await API_Service.get("/teachers/get-students", {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
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
      <Container className="mt-4 pt-5">
        <h3>Students List</h3>
        <hr />
        <StudentRegmodal func={getUsers} />
      </Container>
      <Container className="mb-5">
        <StudentDetails students={students} getUsers={getUsers} />
      </Container>
      <Container className="mt-4">
        <h3>Students Attendance</h3>
        <hr />
      </Container>
      <Container className="activities-container mb-5">
        <StudentsAttendance />
      </Container>
    </>
  );
};

export default Students;
