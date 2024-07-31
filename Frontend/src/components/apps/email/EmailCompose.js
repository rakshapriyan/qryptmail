import React, { useState } from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const EmailCompose = () => {
  const [composeModal, setComposeModal] = useState(false);
  const [formData, setFormData] = useState({
    email : sessionStorage.getItem('email'),
    password: sessionStorage.getItem('password'),
    receiver: '',
    subject: '',
    body: '',
    security: '',
  });
  const navigate = useNavigate();

  const toggle = () => {
    setComposeModal(!composeModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/sendmail', formData);
      console.log(response.status);
      console.log(response);

      if (response.status === 200) {
        navigate('/apps/email'); // Replace with the actual route you want to redirect to
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button color="danger" onClick={toggle} block>
        Compose
      </Button>
      <Modal isOpen={composeModal} size="lg">
        <ModalHeader toggle={toggle}>Compose New Message</ModalHeader>
        <ModalBody>
          <Form onSubmit={sendEmail}>
            <div className="form-body">
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="to">To</Label>
                    <Input
                      type="text"
                      id="to"
                      name="receiver"
                      value={formData.receiver}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="cc">CC</Label>
                    <Input
                      type="text"
                      id="cc"
                      name="cc"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="msg">Email Message</Label>
                    <Input
                      type="textarea"
                      name="body"
                      id="msg"
                      value={formData.body}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Attachment</Label>
                <Input type="file" className="form-control-file" id="projectinput8" />
              </FormGroup>
              <FormGroup>
                <Label for="dropdown">Security</Label>
                <Input
                  type="select"
                  name="security"
                  id="dropdown"
                  value={formData.security}
                  onChange={handleChange}
                >
                  <option value="">Select Security Level</option>
                  <option value="level1">Level 1</option>
                  <option value="level2">Level 2</option>

                </Input>
              </FormGroup>
            </div>
            <ModalFooter>
              <Button color="primary" type="submit">
                Send
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EmailCompose;
