import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import Loginvalidations from "./Validation";
import { useNavigate } from 'react-router-dom';
const Signin = ()=> {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    onSubmit: async (values) => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + "/auth/register",

          {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-type": "application/json" },
          }, values)

           console.log(res)


          if(res.status===200)
           {
             alert("User successfully created.")
              navigate("/auth/login")
           }

        if (res.status === 201) {
          alert("Previously received email")
        }


      } catch (error) {
        console.log(error)

      }
    },

    validationSchema: Loginvalidations

  });
  return (


    <Container style={{ display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center" }} >

      <Card style={{ width: '28rem', border: "none", backgroundColor: "white" }}>
        <Card.Title className=' d-flex p-2'  >

          <h1 style={{ color: "#fd9249" }}>hi</h1>
          <h1 style={{ color: "#33b6fe" }}>care</h1>
          <h1 style={{ color: "#0648ad" }}>go</h1>

        </Card.Title>
        <Card.Body>
          <form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>UserName </Form.Label>
              <Form.Control name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" placeholder='Enter UserName' />
              {formik.errors.username && formik.touched.username && (<div className='mt-1 text-danger'>{formik.errors.username}</div>)}
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>E-mail </Form.Label>
              <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" placeholder='Enter E-mail' />
              {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Password </Form.Label>
              <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" placeholder='Enter Password' />
              {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Password </Form.Label>
              <Form.Control name="passwordConfirm" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" placeholder='Enter Again Password' />
              {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (<div className='mt-1 text-danger'>{formik.errors.passwordConfirm}</div>)}
            </Form.Group>


            <div className="d-grid gap-2">
              <Button variant="primary" type='submit' style={{ fontWeight: "600" }} >
                SignUp
              </Button>

            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>

  );
}


export default Signin;