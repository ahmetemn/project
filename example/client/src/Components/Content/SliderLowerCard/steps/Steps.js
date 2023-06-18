import React from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Steps.css"
const Steps = () => {

    return (
        <>
            <Container>
                <Row style={{display:"flex"  , justifyContent:"center"}}>
                            <div className='container d-flex px-5 justify-content-center'>

                          
                    <Col sm={2} xs={6}>

                        <div className="sonar-wrapper mt-2  ">

                            <div className="sonar-emitter">
                                <span className='d-flex justify-content-center p-2  fw-bold' style={{ color: "white", fontSize: "25px" }}><i class="fa-solid fa-list-ol fa-beat"></i></span>
                                <div className="sonar-wave">
                                </div>


                            </div>
                        </div>
                        <div className='d-flex' style={{ flexDirection: "column" }}>
                            <span className='fw-bold p-2 d-flex justify-content-center' >Plan Your Treatment</span>
                        </div>

                    </Col>
                    <hr   style={{width:"5%"   , color:"blue", marginTop:"60px" }} className='cizgi '></hr>
                    <Col sm={2} xs={6}>
                        <div className="sonar-wrapper mt-2">
                            <div className="sonar-emitter">
                                <span className='d-flex justify-content-center p-2  fw-bold   ' style={{ color: "white", fontSize: "25px" }}><i class="fa-solid fa-hand-pointer  fa-beat"></i></span>
                                <div className="sonar-wave">
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{ flexDirection: "column" }}>
                            <span className='fw-bold p-2 d-flex justify-content-center' >Choose Your Treatment</span>
                        </div>
                    </Col>
                    <hr style={{ width: "5%", color:"orange", marginTop: "60px" }} className='cizgi '></hr>    
                     <Col sm={2} xs={6}>
                        <div className="sonar-wrapper mt-2 ">
                            <div className="sonar-emitter">
                                <span className='d-flex justify-content-center p-2  fw-bold   ' style={{ color: "white", fontSize: "25px" }}><i class="fa-solid fa-clipboard-list fa-beat"></i></span>
                                <div className="sonar-wave">
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{ flexDirection: "column" }}>
                            <span className='fw-bold p-2 d-flex justify-content-center' > Send   Message</span>
                        </div>
                    </Col>
                    <hr style={{ width: "5%", height: "6px", color: "red", marginTop: "60px" }} className='cizgi'></hr>
                    <Col sm={2} xs={6}>
                        <div className="sonar-wrapper mt-2 ">
                            <div className="sonar-emitter">
                                <span className='d-flex justify-content-center p-2  fw-bold   ' style={{ color: "white", fontSize: "25px" }}><i class="fa-solid fa-plane fa-beat"></i></span>
                                <div className="sonar-wave">
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{ flexDirection: "column" }}>
                            <span className='fw-bold p-2 d-flex justify-content-center' >Go</span>
                        </div>

                    </Col>
                    </div>
                </Row>
            </Container>
        </>

    )
}

export default Steps