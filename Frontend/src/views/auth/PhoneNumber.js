import React, { useState } from 'react';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import AuthLogo from '../../layouts/logo/AuthLogo';
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';

const PhoneOtpForm = () => {
  const navigate = useNavigate();
  const [showOtpField, setShowOtpField] = useState(false);

  const initialValues = {
    phoneNumber: '',
    otp: '',
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Phone Number is required'),
    otp: Yup.string()
      .matches(/^[0-9]{6}$/, 'OTP must be a 6-digit number')
      .required('OTP is required'),
  });

  const handleSendOtp = () => {
    // Implement logic to send OTP and toggle visibility of OTP field
    setShowOtpField(true);
  };

  const handleVerifyOtp = () => {
    // Implement logic to verify OTP
    alert('OTP Verified!');
    navigate('/about');
  };

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <h1>
              <center>Verify Phone Number</center>
            </h1>
            <br />
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Phone Verification</h4>
                <small className="pb-4 d-block">
                  Already have an account? <Link to="/auth/loginformik">Login</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields) => {
                    // eslint-disable-next-line no-alert
                    alert(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
                    if (showOtpField) {
                      handleVerifyOtp();
                    } else {
                      handleSendOtp();
                    }
                  }}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Field
                          name="phoneNumber"
                          type="text"
                          className={`form-control${
                            errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      {showOtpField && (
                        <>
                          <FormGroup>
                            <Label htmlFor="otp">OTP</Label>
                            <Field
                              name="otp"
                              type="text"
                              className={`form-control${
                                errors.otp && touched.otp ? ' is-invalid' : ''
                              }`}
                            />
                            <ErrorMessage name="otp" component="div" className="invalid-feedback" />
                          </FormGroup>
                          <FormGroup>
                            <Button type="submit" color="info" onClick={handleVerifyOtp} className="me-2">
                              Verify
                            </Button>
                          </FormGroup>
                        </>
                      )}
                      {!showOtpField && (
                        <FormGroup>
                          <Button type="submit" color="info" onClick={handleSendOtp} className="me-2">
                            Send OTP
                          </Button>
                        </FormGroup>
                      )}
                      <FormGroup>
                        <Link to="/">
                          <Button type="submit" color="dark" className="me-2">
                            Back
                          </Button>
                        </Link>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneOtpForm;
