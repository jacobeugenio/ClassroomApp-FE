import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import API_Service from "../../../api-service/API_Service";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Delete_Exam = (exam) => {
  //   console.log(exam.examID);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    const res = await API_Service.delete("/teachers/activities/" + exam.examID);
    console.log(res.data);
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
        {/* <FontAwesomeIcon icon={faTrashCan} /> */}
        <span className="ms-1">Delete</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            Are you sure to delete this exam?...
            <span className="h5">""</span>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Delete_Exam;
