import React from 'react';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios library
import AuthLogo from '../../layouts/logo/AuthLogo';
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
import { useNavigate } from 'react-router-dom';

const LoginFormik = () => {
  const navigateTo = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email: values.email,
        password: values.password,
      });

      console.log(response.status);
      console.log(response);

      if (response.status === 200) {
        // Redirect to another page on successful login
        sessionStorage.setItem('email', values.email);
        sessionStorage.setItem('password',values.password);
        navigateTo('/about'); // Replace with the actual route you want to redirect to
      }

      // Perform any additional actions after a successful login, such as redirecting to another page
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            {/* <AuthLogo /> */}
            <h1><center>QryptMail</center></h1>
            <br></br>
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Login</h4>
                <small className="pb-4 d-block">
                  Do not have an account? <Link to="/auth/registerformik">Sign Up</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleLogin}
                  render={({ errors, touched, isSubmitting }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control${
                            errors.email && touched.email ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control${
                            errors.password && touched.password ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check d-flex" inline>
                        <Label check>
                          <Input type="checkbox" />
                          Remember me
                        </Label>
                        <Link
                          className="ms-auto text-decoration-none link-info fw-normal"
                          to="/auth/forgotPwd"
                        >
                          <small>Forgot Pwd?</small>
                        </Link>
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="info" className="me-2" disabled={isSubmitting}>
                          Login
                        </Button>
                      </FormGroup>
                      <FormGroup>
                        <Link to="/">
                          <Button type="button" color="dark" className="me-2">
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

export default LoginFormik;
