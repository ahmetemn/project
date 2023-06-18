import React, { useEffect, useState, useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import SwiderAnotherBranches from "./SwiderAnotherBranches/SwiderAnotherBranches";
import BranchesDetailSlider from "./BranchDetailSlider/BranchDetailSlider";
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BranchTabbar from './BranchTabbar/BranchTabbar';
import SubBranch from './SubBranch/SubBranch';
import "./BranchesDetail.css"
const BranchesDetail = () => {
  const [hastanelerBrans, sethastanelerBrans] = useState([])
  const [photoBrans, setphotoBrans] = useState([])
  const [detayBranchID, setdetayBranch] = useState()
  const [doktorlarBrans, setdoktorlarBrans] = useState([])
  const { name } = useParams()


  useEffect(() => {
      try {
          fetch(`http://localhost:3002/branslar/${name}`,
              {
                  method: "GET",
                  body: JSON.stringify(),
                  headers: {
                  
                      "Content-type": "application/json; charset=UTF-8"
                  },
              })
              .then(response => response.json())
       




              .then(data => {
                setdetayBranch(data.BransDetay[0].id)
                sethastanelerBrans(data.BransHastaneler)
                setphotoBrans(data.BransFoto.slice(0,8))
               
              })
          
      } catch (error) {
          console.log(error)
      }
  } , [])   


  console.log(detayBranchID)
  useEffect(() => {
    try {
        fetch(`http://localhost:3002/branslar/${name}`,
            {
                method: "GET",
                body: JSON.stringify(),
                headers: {
                
                    "Content-type": "application/json; charset=UTF-8"
                },
            })
            .then(response => response.json())
            .then(data => setdoktorlarBrans(data.BransDoktorlar))
        
    } catch (error) {
        console.log(error)
    }
} , [])  



  return (
    <div>
      <Carousel style={{ marginTop: "-6.9rem" }}>
        <Carousel.Item >
          <img
            className="doctorsliderfoto"
            src="https://i.hizliresim.com/c97szjf.png"
            alt="First slide"
          />
          <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >

            <Card   >
              <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Container>

        <Row>
      
           
          <Col sm={6} >

          <div  className='d-flex  mt-2 px-4 p-1'  >
              <h3  className="gradient-text" >{name.toUpperCase()}</h3>
          </div>
            <BranchTabbar doktorlarBrans={doktorlarBrans}  hastanelerBrans={hastanelerBrans}/>
            {/* */}
          </Col>
          <Col sm={6}>
            <BranchesDetailSlider  photoBrans={photoBrans}/>
          </Col>
        </Row>
             
      </Container>

      <SwiderAnotherBranches > </SwiderAnotherBranches>
      
    </div>
  )
}

export default BranchesDetail;