import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const AdminInfo = () => {

    const user = useSelector((state) => state.user.currentUser.id);
    const user1 = useSelector((state) => state.user.currentUser);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const navigate=useNavigate()

    const [hospitalInfo, setHospitalInfo] = useState([])

    useEffect(() => {

        fetch(`http://localhost:3002/hastaneler/${user}`)

            .then(response => response.json())
            .then(data => setHospitalInfo(data.HastaneDetay))
    }, [hospitalInfo])



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
            description:'',
            adress:'',
            lat:'',
            lng:''
           
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await fetch("http://localhost:3002/hastane/updatehastane ",
                    {
                        method: "PUT",
                        body: JSON.stringify({  id: user, ...values}),
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    }, values)

                if (res.status === 200) {
                    alert("Giriş işlemi başarılı.");

                    
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



    });





    return (

        <Card className='w-50'>
            <Form onSubmit={formik.handleSubmit}>
                {
                    hospitalInfo?.map((index) => {


                        return (
                            <>
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Name</Form.Label>
                                    <Form.Control name="username" placeholder={index.name}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.name && formik.touched.name && (<div className='mt-1 text-danger'>{formik.errors.name}</div>)}

                                </Form.Group>
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital E-mail</Form.Label>
                                    <Form.Control name="email" placeholder={index.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}

                                </Form.Group>
                                
                                
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Description</Form.Label>
                                    <Form.Control name="description" placeholder={index.description
                                    } onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.description && formik.touched.description && (<div className='mt-1 text-danger'>{formik.errors.description}</div>)}

                                </Form.Group>
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Password</Form.Label>
                                    <Form.Control name="password" placeholder={user1.password
                                    } onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />

                                    {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}

                                </Form.Group>



                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Address</Form.Label>
                                    <Form.Control name="adress" placeholder={index.adress} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.adress && formik.touched.adress && (<div className='mt-1 text-danger'>{formik.errors.adress}</div>)}

                                </Form.Group>
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Latitude</Form.Label>
                                    <Form.Control name="lat" placeholder={index.lat} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.lat && formik.touched.lat && (<div className='mt-1 text-danger'>{formik.errors.lat}</div>)}

                                </Form.Group>
                                <Form.Group className="mb-2" >
                                    <Form.Label className='fw-bold'>Hospital Langitude</Form.Label>
                                    <Form.Control name="lng" placeholder={index.lng} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.lng && formik.touched.lng && (<div className='mt-1 text-danger'>{formik.errors.lng}</div>)}

                                </Form.Group>
                                

                            </>
                        )
                    })
                }




                <Button className='mt-2 float-end w-50 fw-bold' type='submit' variant="primary">
                    Update
                </Button>
            </Form>

        </Card>



    )
}

export default AdminInfo;