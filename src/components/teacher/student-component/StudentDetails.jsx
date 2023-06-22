import Table from "react-bootstrap/Table";
import EditStudentDetails from "./Edit_Student_Details";
import DeleteStudent from "./Delete_Student";
import StudentFullDetails from "../profile-comp/Student_Full_Details";

const StudentDetails = ({ students, getUsers }) => {
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
        <td>{student.email}</td>
        <td className="d-flex flex-row">
          <StudentFullDetails student={student} />
          <EditStudentDetails student={student} getUsers={getUsers} />
          <DeleteStudent student={student} getUsers={getUsers} />
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
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{studentData}</tbody>
    </Table>
  );
};

export default StudentDetails;
