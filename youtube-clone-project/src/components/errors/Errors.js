// Import necessary modules and components
import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Import custom CSS.
import "./Errors.css";

// Define function component ErrorMessage
function ErrorMessage() {
  // Declare state variable show and initialize it to true
  const [show, setShow] = useState(true);

  // Define function handleClose to update show state variable
  const handleClose = () => setShow(false);

  // Render Modal component using Bootstrap and JSX.
  return (
    <div className='error'>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <h1>Error 404</h1>
                        <h2>Page not found</h2>
                        <p>The page you are looking for does not exist.</p>
                        <p>Please try again.</p>
                        <p>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                                </Button>
                        </p>
                    </p>
                </Modal.Body>
        </Modal>
    </div>

  );
}

// Export ErrorMessage component
export default ErrorMessage;
