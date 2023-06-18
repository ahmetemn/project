import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddDoctorValidation from './AddDoctorValidation';


const AddHospitaleDoctor = () => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser.id)
    const formik = useFormik({
        initialValues: {

            email: '',
            username: '',
            password: '',
            tag: '',
            content: '',
            image:''

        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await fetch("http://localhost:3002/hastane/createdocktor", {
                    method: "POST",
                    body: JSON.stringify({ userId: user, ...values }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                });

                if (res.status === 200) {
                    alert("Doctor Added Successful");
                    resetForm();

                } else if (res.status === 401) {
                    alert("Doctor Added Unsuccessful");
                   

                }
            } catch (error) {
                console.log(error);
            }
        },

        validationSchema: AddDoctorValidation
    });
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add Doctor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Doctor E-mail</Form.Label>
                        <Form.Control name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email" />

                        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Doctor Username</Form.Label>
                        <Form.Control value={formik.values.username} name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.username && formik.touched.username && (<div className='mt-1 text-danger'>{formik.errors.username}</div>)}

                    </Form.Group>

                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Doctor Password</Form.Label>
                        <Form.Control  value={formik.values.password} name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                        {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}

                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Doctor Tag</Form.Label>
                        <Form.Control  value={formik.values.tag} name="tag" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.tag && formik.touched.tag && (<div className='mt-1 text-danger'>{formik.errors.tag}</div>)}

                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Doctor Content</Form.Label>
                        <Form.Control  value={formik.values.content} name="content" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.content && formik.touched.content && (<div className='mt-1 text-danger'>{formik.errors.content}</div>)}

                    </Form.Group>
               
                <Form.Group>
                <Button className='mt-2 float-end fw-bold' type='submit' variant="primary">
                        Add New Doctor
                    </Button>
                </Form.Group>
                  
                </Form>
            </Modal.Body>
        </>
    )
}

export default AddHospitaleDoctor;