import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import API_Service from "../../../api-service/API_Service";

const Student_Scores = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [exams, setExams] = useState([]);

  const getExams = async () => {
    try {
      const response = await API_Service.get(
        "/teachers/get-students-answered-exams",
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      console.log(response.data);
      setExams(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getExams();
  }, []);

  return (
    <Table responsive className="p-0 mb-4 mt-2" size="sm">
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
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
};

export default Student_Scores;
