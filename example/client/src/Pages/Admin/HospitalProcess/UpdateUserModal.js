import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UpdateUserModal = ({tıklanaUser}) => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);



    const formik = useFormik({
        initialValues: {

           
            username:'',
            email: '',
            password:'' , 
            id:tıklanaUser
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await fetch( "http://localhost:3002/hastane/updateuser ",
                    {
                        method: "PUT",
                        body: JSON.stringify(values),
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

      

    });

    // const onChange = ({ fileList: newFileList }) => {
    //     formik.setFieldValue('fileList', newFileList);
    // };
    // const props = {
    //     name: 'file',
    //     multiple: true,
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully.`);
    //         } else if (status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };


    return (
        <>


            <Modal.Header closeButton>
                <Modal.Title>Update Patient</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={formik.handleSubmit}>

                   
                    <Form.Group className="" >
                        <Form.Label>Patient Username</Form.Label>
                        <Form.Control name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                    </Form.Group>
                    <Form.Group className="" >
                        <Form.Label>Patient E-mail</Form.Label>
                        <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />

                        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                    </Form.Group>

                    <Form.Group className="" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                    </Form.Group>
       

                    {/* <Form.Group className='mt-2 ' style={{ height: "110px" }}>
                        <Dragger  {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>

                        </Dragger>

                    </Form.Group> */}

                    <Button  className='mt-2' type='submit' variant="primary">
                     Update User
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
        </>
    )
}

export default UpdateUserModal;