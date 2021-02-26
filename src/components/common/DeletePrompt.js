import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const DeletePrompt = ({
  show,
  item,
  id,
  entity,
  handleClose,
  setUpdate,
  setShowAlert,
}) => {
  const url = "http://cbb.northeurope.cloudapp.azure.com:85";

  const handleDelete = () => {
    axios
      .delete(`${url}/${entity}/${id}`)
      .then(() => {
        setUpdate(new Date());
        handleClose();
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      })
      .catch((err) => err);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want do delete {item}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePrompt;
