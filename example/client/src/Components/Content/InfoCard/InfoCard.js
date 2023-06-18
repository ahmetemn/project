import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./InfoCard.css"
const InfoCard = () => {
    return (
        <>

            
            <Card className='border-0 wave'  style={{marginTop:"-1rem"}} >

                <Card.Body>
                    <div className='container  '>
                        <span className='px-5  fw-bold' style={{ fontSize: "28px", color: "#3ba57b" }}>Why Turkey... </span>

                    </div>

                    <Container className=' d-flex justify-content-center w-100 '>

                        <Row>
                            <Col className='d-flex justify-content-between mb-2 ' sm={4} xs={6}  >
                                <Col sm={6} >
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://www.melares.com/uploads/tourism-in-turkey37020104.jpg" />

                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>

                                    <span className='fw-bold' style={{ color: "gray", fontSize: "15px" }}> Rich and Diverse Touristic Activities.</span>

                                </Col>


                            </Col>
                            <Col className='d-flex justify-content-between mb-2 ' sm={4}  xs={6}>
                                <Col sm={6}>
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://www.karel.com.tr/sites/default/files/pictures/musteri-hizmeti-satis-a.jpg" />

                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>

                                    <span className='fw-bold' style={{ color: "gray", fontSize: "15px" }}> No Language Barrier.</span>

                                </Col>


                            </Col>
                            <Col className='d-flex justify-content-between mb-2' sm={4}  xs={6}>
                                <Col sm={6}>
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmF4MxtD1K8fQSFg9-4Dz-vUvhcvkYILi7PZ8tcE8XUEMHktwzQ-wrnSsB2ro-Cgj6bVo&usqp=CAU" />

                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>

                                    <span className='fw-bold ' style={{ color: "gray", fontSize: "15px" }}>Quality Service.</span>

                                </Col>


                            </Col>
                            <Col className='d-flex justify-content-between' sm={4} xs={6} >
                                <Col sm={6}>
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://www.yeniasya.com.tr/Sites/YeniAsya/Upload/images/Content/2016/03/27/bbbbbbbb.jpg" />
                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>
                                    <span className='fw-bold ' style={{ color: "gray", fontSize: "15px" }}> Geographical Location</span>
                                </Col>
                            </Col>
                            <Col className='d-flex justify-content-between' sm={4}  xs={6}>
                                <Col sm={6}>
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://media.premiumtimesng.com/wp-content/files/2020/12/Medical-Devices-1024x684-1.jpeg" />
                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>
                                    <span className='fw-bold ' style={{ color: "gray", fontSize: "15px" }}> Modern Medical Technology</span>
                                </Col>
                            </Col>
                            <Col className='d-flex justify-content-between' sm={4}  xs={6}>
                                <Col sm={6}>
                                    <Card className='border-0' style={{ borderRadius: "100px" }}>
                                        <Card.Img variant="top" style={{ minHeight: "9rem ", maxWidth: "13rem", borderRadius: "50px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 5px 2px" }} src="https://thumbs.dreamstime.com/b/young-team-group-doctors-37813851.jpg" />
                                    </Card>
                                </Col>
                                <Col sm={6} className='d-flex justify-content-center  mt-5 text-center '>
                                    <span className='fw-bold ' style={{ color: "gray", fontSize: "15px" }}>  Health Professionals</span>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>

    )
}

export default InfoCard