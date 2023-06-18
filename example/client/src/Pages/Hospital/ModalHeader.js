import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
export default function ModalHeader() {
    return (

        <>
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
            

                    Ankara Hospital 
                
                   
                    
                </Modal.Title>
               

            </Modal.Header>
            <Modal.Body>
                <Container>

                    <Row>
                        <Col><Image src="https://i2.milimaj.com/i/milliyet/75/0x410/5df020015542841b183a5519.gif" style={{ maxWidth: "160px" }}></Image> </Col>

                        <Col>
                            <ListGroup>
                                <ListGroup.Item style={{ fontWeight: "600", border: "none" }}>Adana Hastanesi </ListGroup.Item>
                                <ListGroup.Item style={{ border: "none" }}>
                                    <Row>
                                        <Col>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                        </Col>



                                    </Row>

                                    <Row>

                                        <Col>Adana Hastanesi</Col>
                                    </Row>
                                    <Row>

                                        <Col><Button className="btn btn-primary btn-sm mt-2">View More</Button></Col>
                                    </Row>

                                </ListGroup.Item>

                            </ListGroup>
                        </Col>


                    </Row>
                    <hr />
                    <Row>
                        <Col><Image src="https://i2.milimaj.com/i/milliyet/75/0x410/5df020015542841b183a5519.gif" style={{ maxWidth: "170px" }}></Image> </Col>

                        <Col>
                            <ListGroup>
                                <ListGroup.Item style={{ fontWeight: "600", border: "none" }}>Adana Hastanesi</ListGroup.Item>
                                <ListGroup.Item style={{ border: "none" }}>
                                    <Row>
                                        <Col>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                        </Col>



                                    </Row>

                                    <Row>

                                        <Col>Adana Hastanesi</Col>
                                    </Row>


                                </ListGroup.Item>

                            </ListGroup>
                        </Col>


                    </Row>
                    <hr></hr>
                    <Row>
                        <Col><Image src="https://i2.milimaj.com/i/milliyet/75/0x410/5df020015542841b183a5519.gif" style={{ maxWidth: "170px" }}></Image> </Col>

                        <Col>
                            <ListGroup>
                                <ListGroup.Item style={{ fontWeight: "600", border: "none" }}>Adana Hastanesi</ListGroup.Item>
                                <ListGroup.Item style={{ border: "none" }}>
                                    <Row>
                                        <Col>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                        </Col>



                                    </Row>

                                    <Row>

                                        <Col>Adana Hastanesi</Col>
                                    </Row>


                                </ListGroup.Item>

                            </ListGroup>
                        </Col>


                    </Row>
                </Container>
            </Modal.Body>
            <hr ></hr>
        </>
    )
}
