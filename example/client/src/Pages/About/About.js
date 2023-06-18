import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from "../../Components/Footer/Footer"
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
const About = () => {
  return (
    <>



    <Carousel style={{ marginTop: "-6.9rem" }}>



<Carousel.Item interval={1000} >



  <img

style={{height:"30%", width:"auto"}}
    className="sliderfoto"
    src="https://i.hizliresim.com/e6kecqj.png"
    alt="First slide"
  />
  <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >

    <Card   >
      <Image  className="logosliderimg" variant="top" src="https://i.hizliresim.com/7jlcugu.png" />

    </Card>

  </Carousel.Caption>


  



</Carousel.Item>


</Carousel>

    <Container className='mb-5 mt-2'>

      <Row>
        <Col sm={6}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
              style={{minHeight:"428px"}}
                className="d-block w-100"
                src="https://www.hicarego.com/Content/assets/images/home/about.png"
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
              style={{minHeight:"428px"}}
                className="d-block w-100"
                src="https://www.hicarego.com/Content/assets/images/home/about.png"
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


        </Col>
        <Col  sm={6}>

          <ListGroup>
          <Image  style={{maxWidth:"180px"}} src='https://www.hicarego.com/Content/home/image/catalog/logo.png'></Image>
            <hr></hr>
            <ListGroup.Item style={{border:"none"}}> <h5>For Customers</h5> It is a Health Platform where citizens of the Netherlands and other countries who want to receive health services from Turkey can shop by getting information about health services. On Hicarego health platform You can find your legal rights, treatment options and authorized health institutions regarding health tourism.</ListGroup.Item>
            <ListGroup.Item style={{border:"none"}}> <h5>For Health Facilities </h5> Take your place in international health tourism. It's very easy to do this now. You can edit your own page on the health platform. You can write prices by uploading your units, services, doctors and treatments.The rules that you must follow while using the health platform are regulated by the Ministry of Health. Health tourism should be carried out in accordance with the information and promotion conditions in article 12.  
             <Button className="btn-sm" target='_blank' href="https://shgmturizmdb.saglik.gov.tr/Eklenti/28811/0/saglik-turizmi-yonetmelikpdf.pdf" variant="outline-primary">View Pdf</Button>
             .You can contact us to activate your health facility.</ListGroup.Item>
           
            
          </ListGroup>
          </Col>
      </Row>
    </Container>
  
    </>
  );
}

export default About;
