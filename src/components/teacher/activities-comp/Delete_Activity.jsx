import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import API_Service from "../../../api-service/API_Service";
import { useSelector } from "react-redux";

const Delete_Activity = (props) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    const response = await API_Service.delete(
      "teachers/activities/" + props.exam._id,
      {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      }
    );
    console.log(response.data.msg);
    props.func();
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
          <Modal.Title>Deleting Student!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure to delete this activity?...
          <span className="h4">
            "
            {props.exam.subject.charAt(0).toUpperCase() +
              props.exam.subject.slice(1)}
            ,
            {props.exam.title.charAt(0).toUpperCase() +
              props.exam.title.slice(1)}
            "
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

export default Delete_Activity;
