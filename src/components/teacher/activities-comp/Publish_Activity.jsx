import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import API_Service from "../../../api-service/API_Service";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Publish_Activity = ({ exam }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isPublish, setIsPublish] = useState(false);

  const publishExam = async () => {
    setIsPublish(true);
    try {
      const res = await API_Service.patch(
        "/teachers/activities/" + exam._id,
        isPublish,
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      if (res.data.status) {
        toast.success(res.data.msg);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {exam.isPublish ? (
        <>
          {" "}
          <Button
            disabled={true}
            onClick={publishExam}
            variant="success"
            size="sm"
            className="d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faShareFromSquare} className="me-1" />
            Publish
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Button
            onClick={publishExam}
            variant="success"
            size="sm"
            className="d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faShareFromSquare} className="me-1" />
            Publish
          </Button>
        </>
      )}
    </>
  );
};

export default Publish_Activity;
