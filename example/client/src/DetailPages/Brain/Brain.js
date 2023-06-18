import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from "../../Components/Footer/Footer"
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Brain = () => {
    return (
        <div>
          

<Container className='mb-5 mt-2'>

  <Row>
    <Col sm={6}>
    <Image src="https://www.hicarego.com/Content/assets/images/advert/a18aad56-b-kol-germe-768x401.jpeg" className='p-1 img-fluid'></Image>

    </Col>
    <Col  sm={6}>

      <ListGroup>
        <ListGroup.Item style={{border:"none"  , backgroundColor:"whitesmoke"}}> <h4>Arm Lift</h4> <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            <span style={{ color: "orange" }} class="fa fa-star checked"></span>
                                            </ListGroup.Item>
        <hr></hr>
        <ListGroup>
      <ListGroup.Item style={{border:"none"}}>
        
           <span style={{fontWeight:"600" ,color:"deepskyblue"}}>0 €</span> 
                                          
      </ListGroup.Item>
      <ListGroup.Item style={{border:"none"}}> <span style={{fontWeight:"600" ,color:"deepskyblue"}} >Health Facility: </span> Özel Yüzyil Hastanesi Pendik</ListGroup.Item>
      <ListGroup.Item><span style={{fontWeight:"600" ,color:"deepskyblue"}} >SUT Code: </span> S100100</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        
      </ListGroup>
      </Col>
  </Row>
</Container>

            
        </div>
    );
}

export default Brain;
