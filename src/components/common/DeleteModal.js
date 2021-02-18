import { Button, Modal } from "react-bootstrap"
import { customerServices } from "../../services/customerServices";

const DeleteModal = ({ show, customer, handleClose, setUpdate }) => {
    const handleDelete = () => {
        customerServices.deleteCustomer(customer.customerId)
            .then(res => {
                setUpdate(new Date())
                handleClose()
            })
            .catch(err => err)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want do delete {customer && customer.firstName}?</Modal.Body>
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
}

export default DeleteModal;