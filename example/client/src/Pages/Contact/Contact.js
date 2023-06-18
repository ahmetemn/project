import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Carousel style={{ marginTop: "-6.9rem" }}>
        <Carousel.Item interval={1000} >
          <img
            style={{ height: "30%", width: "auto" }}
            className="sliderfoto"
            src="https://i.hizliresim.com/hwktpj8.png"
            alt="First slide"
          />
          <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >
            <Card>
              <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-3">
        <Row>
          <Col  >
            <div class="container" id="contactmaps">
              <iframe title="Maps" class="responsive-iframee" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2435.1362071787566!2d4.9278111!3d52.3860811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60901d324d5e3%3A0x7f5e5ccbb6f9efac!2sJohan%20van%20Hasseltweg%2036%2C%201022%20WV%20Amsterdam%2C%20Hollanda!5e0!3m2!1str!2str!4v1668952177344!5m2!1str!2str"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className=' mb-3'>
        <Row className='p-3'>
          <Card className="mt-2" style={{ border: "none" }}>
            <Card.Body>
              <Row>
                <Col >
                  <ListGroup className=''>
                    <ListGroup.Item className='text-center' style={{ border: "none", fontWeight: "600", float: "left", }}  > <h4><i class="fa-solid fa-circle-info" style={{ color: "red" }}></i>  INFORMATION</h4></ListGroup.Item>
                    <Container className='mt-3'>
                      <Row className="g-1 text-center">
                        <Col sm className="p-2"> <Button style={{ borderRadius: "30px", fontWeight: "600", minWidth: "75px" }} variant="outline-info"> <i class="fa-solid fa-phone px-1"></i>Call Istanbul </Button></Col>
                        <Col sm className="p-2"> <Button style={{ borderRadius: "30px", fontWeight: "600", minWidth: "75px" }} variant="outline-info"> <i class="fa-solid fa-phone px-1"></i>Call United Kıngdom </Button></Col>
                        <Col sm className="p-2"><Button style={{ borderRadius: "30px", fontWeight: "600", }} variant="outline-info"> <i class="fa-solid fa-envelope px-1"></i> Mail Address</Button></Col>
                      </Row>
                    </Container>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </>

  );
}

export default Contact;
