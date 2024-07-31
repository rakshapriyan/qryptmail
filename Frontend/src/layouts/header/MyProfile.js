import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/images/users/user4.jpg';

const Profile = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/about');
  };

  return (
    <Row className="justify-content-center">
      <Col xs="12" md="12" lg="4">
        <br />
        {/* <br /> */}
        <br />
        {/* <br />
        <br /> */}
        <Card>
          <CardBody className="p-4">
            <div className="text-center mt-4">
            <h2 className="text-center mb-4">My Profile</h2>
              <img src={img1} className="rounded-circle" width="150" alt="" />
              <CardTitle tag="h4" className="mt-2 mb-0">
                Aasif J
              </CardTitle>
            </div>
          </CardBody>
          <CardBody className="border-top p-4">
            <div>
              <CardSubtitle className="text-muted fs-5">Email address</CardSubtitle>
              <CardTitle tag="h5">aasif013010@gmail.com</CardTitle>

              <CardSubtitle className="text-muted fs-5 mt-3">Phone</CardSubtitle>
              <CardTitle tag="h5">9176881077</CardTitle>

              <CardSubtitle className="text-muted fs-5 mt-3">Address</CardSubtitle>
              <CardTitle tag="h5">idk where i live</CardTitle>
            </div>
          </CardBody>
          <CardBody className="p-4">
            <Button color="primary" onClick={handleBackButtonClick}>
              Back
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
