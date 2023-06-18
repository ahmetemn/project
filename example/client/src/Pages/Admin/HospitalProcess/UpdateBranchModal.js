import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UpdateBrancValidation from "./UpdateBrancValidation"
const UpdateBranchModal = ({ tıklanaId, detail }) => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);

    const user = useSelector((state) => state.user.currentUser.id)

    const formik = useFormik({
        initialValues: {


            name: '',
            image: '',
            tıklanılan_id: tıklanaId,
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values)
            try {
                const res = await fetch("http://localhost:3002/hastane/updatebranches ",
                    {
                        method: "PUT",
                        body: JSON.stringify({ userId: user, ...values }),
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    }, values)

                if (res.status === 200) {
                    alert("Giriş işlemi başarılı.");
                    resetForm()
                }
                if (res.status === 401) {
                    alert("Yorum Yapılamadı .");
                }


            } catch (error) {
                console.log(error)
            }
        },

        validationSchema: UpdateBrancValidation

    });
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Update Branch Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={formik.handleSubmit}>
                

                            <Form.Group className="mb-2" >
                                <Form.Label>Branch Name</Form.Label>
                                <Form.Control  value={formik.values.name} name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                {formik.errors.name && formik.touched.name && (<div className='mt-1 text-danger'>{formik.errors.name}</div>)}

                            </Form.Group>
              
   

                    <Button className='mt-2 fw-bold float-end' type='submit' variant="primary">
                        Add New Branch
                    </Button>


                </Form>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
        </>
    )
}

export default UpdateBranchModal;