import React, { useState } from 'react';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import AuthLogo from "../../layouts/logo/AuthLogo";
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
import axios from 'axios';

const RegisterFormik = () => {
  const initialValues = {
    UserName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        UserName: values.UserName,
        email: values.email,
        password: values.password,
      });

      console.log(response.status);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    UserName: Yup.string().required('User Name is required'),

    email: Yup.string().email('Invalid email address').required('Email is required'),

    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
          <h1><center>QryptMail</center></h1>
          <br></br>
            {/* <AuthLogo /> */}
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Register</h4>
                <small className="pb-4 d-block">
                  Already have an account? <Link className='link-info fw-normal' to="/auth/loginformik">Login</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="UserName">User Name</Label>
                        <Field
                          name="UserName"
                          type="text"
                          className={`form-control${errors.UserName && touched.UserName ? ' is-invalid' : ''}`}
                        />
                        <ErrorMessage name="UserName" component="div" className="invalid-feedback" />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control${errors.password && touched.password ? ' is-invalid' : ''}`}
                        />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className={`form-control${errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''}`}
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                      </FormGroup>

                      <FormGroup>
                        <Link to="/auth/phone">
                        <Button type="submit" color="info" className="me-2">
                          Register
                        </Button>
                        </Link>
                        <Button type="reset" color="secondary">
                          Reset
                        </Button>
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

export default RegisterFormik;


