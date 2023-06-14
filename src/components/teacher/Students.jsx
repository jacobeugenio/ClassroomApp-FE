import Header from "../../layout/Header";
import StudentDetails from "./student-component/StudentDetails";
import StudentRegmodal from "./student-component/StudentRegModal";

import Container from "react-bootstrap/Container";
const Students = () => {
  return (
    <>
      <Header />
      <Container className="my-4">
        <h3>Students List</h3>
        <hr />
        <StudentRegmodal />
      </Container>
      <Container>
        <StudentDetails />
      </Container>
    </>
  );
};

export default Students;
