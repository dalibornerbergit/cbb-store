import { Button, Modal } from "react-bootstrap"
import { useHistory } from "react-router-dom";

const Prompt = ({ title, text, show, url, handleClose }) => {
    const history = useHistory()

    const redirectToList = () => {
        history.push(url)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
                <Button variant="primary" onClick={redirectToList}>
                    Go to list
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Prompt;