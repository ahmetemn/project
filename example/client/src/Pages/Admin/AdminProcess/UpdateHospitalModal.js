import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import UpdateHospitalValidation from './UpdateHospitalValidation';
const UpdateHospitalModal = ({ tıklanaId }) => {


  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
  const user = useSelector((state) => state.user.currentUser.id)
  const [hospitalInfo, setHospitalInfo] = useState([])

  useEffect(() => {

    fetch(`http://localhost:3002/hastaneler/${tıklanaId}`)

      .then(response => response.json())
      .then(data => setHospitalInfo(data.HastaneDetay))
  }, [hospitalInfo])
  const formik = useFormik({
    initialValues: {

      email:  '',
      username:  '',
      password: '',
      lat: '',
      lng:  '',
      description: '',
      adress: '',
      image:'',
    },
    onSubmit: async (values) => {

     
     
        console.log(values)
      try {
        const res = await fetch("http://localhost:3002/admin/updatehastane ",
          {
            method: "PUT",
            body: JSON.stringify(  {id:tıklanaId,...values} ),
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/json; charset=UTF-8"
            },
          }, values)

        if (res.status === 200) {
          alert("Updated Successful");

        }
        if (res.status === 401) {
          alert("Updated Unsuccessful .");
        }
      } catch (error) {
        console.log(error)
      }
    },
    validationSchema:UpdateHospitalValidation
  });
  return (
    <>


      <Modal.Header closeButton>
        <Modal.Title>Update Patient</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {
          hospitalInfo?.map((index) => {

            return (
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital E-mail</Form.Label>
                  <Form.Control size="sm" placeholder={index.email} name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />
                  {formik.errors.email && formik.touched.email && (<div className=' text-danger'>{formik.errors.email}</div>)}
                </Form.Group>
                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital username</Form.Label>
                  <Form.Control size='sm' placeholder={index.username} name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.username && formik.touched.name && (<div className=' text-danger'>{formik.errors.name}</div>)}

                </Form.Group>

                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital Password</Form.Label>
                  <Form.Control  size="sm" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                  {formik.errors.password && formik.touched.password && (<div className=' text-danger'>{formik.errors.password}</div>)}

                </Form.Group>
                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital Latitude</Form.Label>
                  <Form.Control  size="sm" placeholder={index.lat} name="lat" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.lat && formik.touched.lat && (<div className='text-danger'>{formik.errors.lat}</div>)}

                </Form.Group>
                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital Langitude</Form.Label>
                  <Form.Control size='sm' placeholder={index.lng} name="lng" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.lng && formik.touched.lng && (<div className=' text-danger'>{formik.errors.lng}</div>)}

                </Form.Group>

                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital Description</Form.Label>
                  <Form.Control size="sm" placeholder={index.description} name="description" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.description && formik.touched.description && (<div className='text-danger'>{formik.errors.description}</div>)}
                </Form.Group>

                <Form.Group className="" >
                  <Form.Label className='fw-bold'>Hospital Adress</Form.Label>
                  <Form.Control size="sm" placeholder={index.adress} name="adress" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.adress && formik.touched.adress && (<div className=' text-danger'>{formik.errors.adress}</div>)}
                </Form.Group>
              

                <Button className='mt-1 w-50 float-end fw-bold' type='submit' variant="primary">
                  Update
                </Button>
              </Form>
            )
          }
          )
        }
      </Modal.Body>
    </>
  )
}

export default UpdateHospitalModal;