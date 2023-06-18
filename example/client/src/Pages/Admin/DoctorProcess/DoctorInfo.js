import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'antd';
import { useSelector ,   } from 'react-redux';
import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';
import DoctorInfoValidation from "./DoctorInfoValidation"

const DoctorInfo = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user.currentUser.id);
    const user1 = useSelector((state) => state.user.currentUser);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const [doctorInfo, setDoctorInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3002/doktorlar/${user}`)
            .then(response => response.json())
            .then(data => setDoctorInfo(data.doktorDetay))
    }, [doctorInfo])



    const formik = useFormik({
        initialValues: {
          email:'',
          password:'',
          username:'',
          tag:'',
          content:'',
       
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await fetch("http://localhost:3002/docktor/updateinfo ",
                    {
                        method: "PUT",
                        body: JSON.stringify({  userId: user, ...values}),
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    }, values)

                if (res.status === 200) {
                    alert("Update Successfull ");
                   
                        // Oturumu kapatma işlemini gerçekleştir
                
                        fetch("http://localhost:3002/auth/logout", {
                            method: "POST"
                        })
                
                        navigate("/auth/login")
                        localStorage.removeItem('persist:root');
                        // Daha fazla oturum işlemlerini yapmak isterseniz, burada diğer işlemleri de yapabilirsiniz.
                        window.location.reload()
                   
                }
                if (res.status === 401) {
                    alert("Yorum Yapılamadı .");
                }
            } catch (error) {
                console.log(error)
            }
        },

        validationSchema:DoctorInfoValidation
    });

 
 
    return (

        <Card className='w-50'>
            <Form onSubmit={formik.handleSubmit}>
                {
                    doctorInfo?.map((index) => {
                        return (
                            <>
                            <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Doctor E-mail</Form.Label>
                                    <Form.Control name="email" placeholder={index.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Doctor  Password</Form.Label>
                                    <Form.Control name="password" placeholder={user1.password
                                    } onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                                    {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}

                                </Form.Group>

                            
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Doctor Name</Form.Label>
                                    <Form.Control name="username" placeholder={index.username}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.username && formik.touched.username && (<div className='mt-1 text-danger'>{formik.errors.username}</div>)}

                                </Form.Group>
                               
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Doctor  Tag</Form.Label>
                                    <Form.Control name="tag" placeholder={index.tag
                                    } onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.tag && formik.touched.tag && (<div className='mt-1 text-danger'>{formik.errors.tag}</div>)}

                                </Form.Group>
                                
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Doctor  Content</Form.Label>
                                    <Form.Control name="content" placeholder={index.content
                                    } onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.content && formik.touched.content && (<div className='mt-1 text-danger'>{formik.errors.content}</div>)}

                                </Form.Group>
                              
                              


                              
                            </>
                        )
                    })
                }
             
                <Button  className='mt-2 float-end w-50 fw-bold' type='submit' variant="primary">
                    Update
                </Button>
              
            </Form>

        </Card>



    )
}

export default DoctorInfo;