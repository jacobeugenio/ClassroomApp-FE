import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import API_Service from "../../../api-service/API_Service";
import { useSelector } from "react-redux";
import moment from "moment";

const Students_Attendance = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [attendance, setAttendance] = useState([]);
  const getAttendance = async () => {
    try {
      const response = await API_Service.get(
        "/teachers/get-students-attendance",
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      setAttendance(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAttendance();
  }, []);

  const attendanceData = attendance.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          {student.fname.charAt(0).toUpperCase() + student.fname.slice(1)}
        </td>
        <td>
          {student.lname.charAt(0).toUpperCase() + student.lname.slice(1)}
        </td>

        <td>{moment(student.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
        <td>{student.comment}</td>
      </tr>
    );
  });
  return (
    <>
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>{attendanceData}</tbody>
      </Table>
    </>
  );
};

export default Students_Attendance;
