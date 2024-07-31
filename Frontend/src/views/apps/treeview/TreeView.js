import React, { useState } from 'react';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Treeview = () => {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const toggleAboutModal = () => setAboutModalOpen(!isAboutModalOpen);

  const inputStyles = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease-in-out',
  };

  const focusStyles = {
    outline: 'none',
    borderColor: '#179ed3',
    boxShadow: '0 0 5px rgba(23, 158, 211, 0.5)',
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Welcome to Qrypt-AI</h3>
          <Input
            className="treeview-input"
            type="text"
            placeholder="Type your message here"
            style={inputStyles}
            onFocus={(e) => (e.target.style = { ...inputStyles, ...focusStyles })}
            onBlur={(e) => (e.target.style = inputStyles)}
          />
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button color="primary">Submit</Button>{' '}
            <Button color="info" onClick={toggleAboutModal}>
              About
            </Button>
          </div>
        </Col>
      </Row>
      <Modal isOpen={isAboutModalOpen} toggle={toggleAboutModal}>
        <ModalHeader toggle={toggleAboutModal}>About Qrypt-AI</ModalHeader>
        <ModalBody>
          <p>
            Qrypt-AI is an advanced artificial intelligence tool designed to assist users in crafting professional and
            polished messages. Whether you need to write a formal email or refine your communication, Qrypt-AI is here
            to make your messages stand out.
          </p>
          {/* Add more details about Qrypt-AI here */}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleAboutModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Treeview;
