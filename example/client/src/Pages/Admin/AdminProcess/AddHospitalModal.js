import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const AddHospitalModal = () => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            adress:'',
             password: '',
             description: '',
            lat: '',
            lng: '',
        },
        onSubmit: async (values) => {
            try {
                const res = await fetch("http://localhost:3002/admin/createhastane",
                    {
                        method: "POST",
                        body: JSON.stringify( values ),
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    }, values)

                if (res.status === 200) {
                    alert("Hospital Added Successful");

                }
                if (res.status === 401) {
                    alert("Hospital Added Unsuccessful");
                }
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add Hospital</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                     <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital E-mail</Form.Label>
                        <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />

                        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital username</Form.Label>
                        <Form.Control name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.username && formik.touched.name && (<div className='mt-1 text-danger'>{formik.errors.name}</div>)}

                    </Form.Group>

                  <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital Password</Form.Label>
                        <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                        {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}

                    </Form.Group> 
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital Latitude</Form.Label>
                        <Form.Control name="lat" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.lat && formik.touched.lat && (<div className='mt-1 text-danger'>{formik.errors.lat}</div>)}

                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital Langitude</Form.Label>
                        <Form.Control name="lng" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.lng && formik.touched.lng && (<div className='mt-1 text-danger'>{formik.errors.lng}</div>)}

                    </Form.Group>

                     <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital Description</Form.Label>
                        <Form.Control name="description" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.content && formik.touched.content && (<div className='mt-1 text-danger'>{formik.errors.content}</div>)}
                    </Form.Group> 

                    <Form.Group className="mb-1" >
                        <Form.Label className='fw-bold'>Hospital Adress</Form.Label>
                        <Form.Control name="adress" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.adress && formik.touched.adress && (<div className='mt-1 text-danger'>{formik.errors.adress}</div>)}
                    </Form.Group>





                     {/* <Form.Group className='mt-2 ' style={{ height: "110px" }}>
                        <Dragger  {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>

                        </Dragger>

                    </Form.Group> */}

                    <Button className='mt-2 float-end fw-bold' type='submit' variant="primary">
                        Add New Hospital
                    </Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default AddHospitalModal;