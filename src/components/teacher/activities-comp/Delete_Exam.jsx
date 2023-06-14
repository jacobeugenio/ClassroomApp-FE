import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import API_Service from "../../../api-service/API_Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";

const Delete_Exam = (exam) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await API_Service.delete("/teachers/activities/" + exam.exam._id);
    console.log(exam._id);
    handleClose();
  };

  return (
    <>
      <Button
        variant="success"
        size="sm"
        className="d-flex align-items-center me-1"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faTrashCan} />
        <span className="ms-1">Delete</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            Are you sure to delete this exam:
            <span className="h5"> "{exam.exam.subject}"</span>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="me-1" />
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} /> Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Delete_Exam;
