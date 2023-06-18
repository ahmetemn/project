import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Loginvalidations from './LoginValidation';
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux';
import { userRequest } from "./requestMethods";

 const Login = ()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: async (values) => {
      dispatch(loginStart())
      try {
        const res = await userRequest.post("/auth/login", values)
        if (res.status === 200) {
          dispatch(loginSuccess(res.data))
          
          navigate("/")
        }

      } catch (error) {
        alert("wrong password or email")
        dispatch(loginFailure())
      }
    },
    validationSchema: Loginvalidations

  });




  return (


    <Container style={{ display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center" }} >

      <Card style={{ width: '28rem', border: "none", backgroundColor: "white" }}>
        <Card.Title className=' d-flex p-2'  >
          <div className='px-1 d-flex' >
            <h1 style={{ color: " #33b6fe" }}>Healer</h1>
            <h1 style={{ color: "#fd9249" }}>Go</h1>
            <h1 style={{ color: "#0648ad" }}>Turkey</h1>
          </div>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Email </Form.Label>
              <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />

              {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "600" }}>Password</Form.Label>
              <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />
              {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Row>
                <Col>
                  <Form.Check type="checkbox" label="Check me out" />
                </Col>


                <Col>
                  <Link to="/auth/signin"> <span style={{ float: "right", fontWeight: "600", cursor: "pointer", color: "purple" }}>Signup?</span></Link>
                </Col>
              </Row>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type='submit'  style={{ fontWeight: "600" }} >
                Login
              </Button>

            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>

  );
};


export default Login;