import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import "./DoctorTabBar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import DoctorReviewValidations from './DoctorReviewValidation';
import DoctorPagination from '../../HospitalDetail/DoctorPagination';
export default function DoctorTabBar({ doctordetail  , allDoctorPhoto}) {


    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser)

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const { id } = useParams()
    const [doctorYorumlar, setDoctorYorumlar] = useState([])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const allphotos = allDoctorPhoto.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (page) => setCurrentPage(page);
    useEffect(() => {

        fetch(`http://localhost:3002/doktorlar/${id}`)
            .then(response => response.json())
            .then(data => setDoctorYorumlar(data.yorumlar))
    }, [doctorYorumlar])




    const formik = useFormik({
        initialValues: {


            yorum: '',
            docktor_id: id

        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await fetch("http://localhost:3002/patient/doktorayorumyap",
                    {
                        method: "POST",
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

        validationSchema: DoctorReviewValidations

    });


    return (
        <>




            <Tab.Container className="" id="left-tabs-example" defaultActiveKey="first" >

                <Nav variant="pills" defaultActiveKey="first" className="navtabbarhospital d-flex  mt-2 p-2  " style={{ backgroundColor: "white", borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>
                    <Nav.Item style={{}}>
                        <Nav.Link style={{ fontSize: "15px", fontWeight: "600", borderRadius: "10px" }} className="navtabbarhospital" eventKey="first">DESCRIPTION</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="second">REVIEWS</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="three">ALL PHOTOS</Nav.Link>
                    </Nav.Item>




                </Nav>


                <Tab.Content className='d-flex'>
                    <Tab.Pane eventKey="first">

                        <Card className='mt-2 p-1 border-0' >
                            {
                                doctordetail.map((index) => {
                                    return (
                                        <span>{index.content}</span>
                                    )
                                })
                            }
                        </Card>


                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className='p-2 container-fluid'>


                        {
                            doctorYorumlar.map((index) => {
                                return (
                                    <Card className='mt-2 mb-3  '>
                                        <Card.Header>{index.username}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {index.yorum}
                                            </Card.Text>

                                            <span>{index.yorumzamanı.substring(0, 10)}</span>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }

                        <Card className="p-2 border-secondary mb-3">
                            <Form onSubmit={formik.handleSubmit}>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Yorum</Form.Label>
                                    <Form.Control name="yorum" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                                    {formik.errors.yorum && formik.touched.yorum && (<div className='mt-1 text-danger'>{formik.errors.yorum}</div>)}
                                </Form.Group>


                                {
                                    user ? <Button style={{ float: "right", fontWeight: "600" }} className='d-grid' variant="primary" type="submit">
                                        Comment
                                    </Button>
                                        :
                                        <Link to="/auth/login">


                                            <Button style={{ float: "right", fontWeight: "600" }} className='d-grid' variant="primary" type="submit">
                                                Comment
                                            </Button>
                                        </Link>

                                }


                            </Form>
                        </Card>

                    </Tab.Pane>

                    <Tab.Pane eventKey="three" className='p-2 container-fluid'>

                        <Row>
                            {
                                allphotos?.map((data) => {

                                    return (
                                        <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center mb-2 d-flex' >
                                            <Card style={{ border: "none", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: "100px", height: "150px" }} className=" cardDoctor">

                                                <Card.Img
                                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                    src={data.image_url}
                                                    alt="Avatar"
                                                    className="image"
                                                />
                                            </Card>

                                        </Col>

                                    )
                                })
                            }

                        </Row>

                        <div className='d-flex justify-content-center mt-1'>
                            <DoctorPagination style={{ backgroundColor: "red" }} postPerPage={postPerPage} totalPost={allDoctorPhoto.length} paginate={paginate} />
                        </div>
                    </Tab.Pane>



                </Tab.Content>
            </Tab.Container>


            { /*    
 */}

        </>



    );
}
