import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import EditStudentDetails from "./Edit_Student_Details";
import API_Service from "../../../api-service/API_Service";

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

  const handleDelete = async (id) => {
    const response = await API_Service.delete("/teachers/delete-student/" + id);
    console.log(response);
    getUser();
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
        <td>{student.fname}</td>
        <td>{student.lname}</td>
        <td>{student.username}</td>
        <td>{student.contact}</td>
        <td>{student.email}</td>

        <td>{student.gender}</td>
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

          <EditStudentDetails props={student} />

          <Button
            variant="outline-primary"
            size="sm"
            className="mx-1 d-flex flex-row align-items-center p-1"
            onClick={() => handleDelete(student._id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
            <span className="ms-1">Delete</span>
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive className="mt-2 p-0" size="sm">
      <thead className="">
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
