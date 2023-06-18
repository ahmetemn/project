import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import AddBranchValidation from "./AddBranchValidation"

const AddBranchModal = ({ detail }) => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser.id)
    const [selectedBranchesId,setSelectBranchesId] = useState(0)
    const formik = useFormik({
        initialValues: {

            name: '',
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await fetch("http://localhost:3002/hastane/createbranches",
                    {
                        method: "POST",
                        body: JSON.stringify({ userId: user, branches_id:selectedBranchesId, ...values }),
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    }, values)

                if (res.status === 200) {
                    alert("Giriş işlemi başarılı.");

                }
                if (res.status === 401) {
                    alert("Yorum Yapılamadı .");
                }


            } catch (error) {
                console.log(error)
            }
        },
        validationSchema: AddBranchValidation
    });

    console.log(selectedBranchesId)
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add Doctor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>

                <Form.Select
                        className='w-100'
                        aria-label='Please Select City...'
                        onChange={(e) => {
                            setSelectBranchesId(e.target.value);
                        }}
                    >
                        <option>Please Select Branch...</option>
                        {
                            detail
                            .filter(item => item.parent_id === 0)
                                .map((index) => (
                                    <option id={index.id} value={index.id}>
                                        {index.name}
                                    </option>
                                ))
                        }
                    </Form.Select>
                    <Form.Group className="" >
                        <Form.Label>Branch Name</Form.Label>
                        <Form.Control  value={formik.values.name}  name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />
                        {formik.errors.name && formik.touched.name && (<div className='mt-1 text-danger'>{formik.errors.name}</div>)}
                    </Form.Group>
                    <Button className='mt-2' type='submit' variant="primary">
                        Add New  SubBranch
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
        </>
    )
}

export default AddBranchModal;