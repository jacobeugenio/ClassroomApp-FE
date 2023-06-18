import API_Service from "../../../api-service/API_Service";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "react-toastify";

const Delete_Student = ({ student, getUsers }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    const response = await API_Service.delete(
      "/teachers/delete-student/" + student._id
    );
    toast.success(response.data.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    getUsers();
    handleClose();
  };

  return (
    <>
      <Button
        variant="outline-primary"
        size="sm"
        className="mx-1 d-flex flex-row align-items-center p-1"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faTrashCan} />
        <span className="ms-1">Delete</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting Student!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure to delete this student?...{" "}
          <span className="h4">
            "{student.lname.charAt(0).toUpperCase() + student.lname.slice(1)},{" "}
            {student.fname.charAt(0).toUpperCase() + student.fname.slice(1)}"
          </span>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} /> Cancel
          </Button>

          <Button variant="success" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} className="me-1" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Delete_Student;
