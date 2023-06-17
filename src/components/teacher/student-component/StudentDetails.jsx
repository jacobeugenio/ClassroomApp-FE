import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import EditStudentDetails from "./Edit_Student_Details";
import API_Service from "../../../api-service/API_Service";
import DeleteStudent from "./Delete_Student";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  const getUser = async () => {
    try {
      const response = await API_Service.get("/teachers/get-students");
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(data);
  const studentData = students.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img
            src={student.img}
            alt="profile"
            width={30}
            height={30}
            style={{ borderRadius: 50 }}
          />
        </td>
        <td>
          {student.fname.charAt(0).toUpperCase() + student.fname.slice(1)}
        </td>
        <td>
          {student.lname.charAt(0).toUpperCase() + student.lname.slice(1)}
        </td>
        <td>{student.username}</td>
        <td>{student.contact}</td>
        <td>{student.email}</td>

        <td>
          {student.gender.charAt(0).toUpperCase() + student.gender.slice(1)}
        </td>
        <td>{student.age}</td>
        <td className="d-flex flex-row">
          <Button
            variant="outline-success"
            size="sm"
            className="mx-1 d-flex flex-row align-items-center p-1"
          >
            <FontAwesomeIcon icon={faEye} />
            <span>View</span>
          </Button>

          <EditStudentDetails props={student} func={getUser} />
          <DeleteStudent props={student} func={getUser} />
        </td>
      </tr>
    );
  });

  return (
    <Table responsive className="p-0" size="sm">
      <thead
        className="p-3"
        style={{
          backgroundColor: "#98eecc",
          border: "black",
        }}
      >
        <tr>
          <th>#</th>
          <th>Profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{studentData}</tbody>
    </Table>
  );
};

export default StudentDetails;
