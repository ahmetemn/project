
import React, { useState, createContext } from 'react';
import Doctors from '../../Pages/Doctors/Doctors';
// Import Swiper React components
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// Import Swiper styles
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom"
import "./Sliderstyless.css"
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../Header/HeaderMessagetabbar/HeaderTabbar.css";
// import required modules
export default function App() {

  const [postHastanelerSlider, setpostHastanelerSlider] = useState([]);
  const [postDoktorlarSlider, setpostDoktorlarSlider] = useState([]);
  const [filterText1111, setfilterText1111] = useState("");

  useEffect(() => {

    fetch("http://localhost:3002/hastaneler")
      .then(response => response.json())
      .then(data => setpostHastanelerSlider(data.data))

  }, [])
  useEffect(() => {

    fetch("http://localhost:3002/doktorlar")
      .then(response => response.json())
      .then(data => setpostDoktorlarSlider(data.data))
  }, [])

  const filteredDoktor = postDoktorlarSlider.filter((item) => {
    if (item !== null && item !== undefined) {
      return Object.keys(item).some((key) => {
        const itemValue = item[key];
        if (itemValue !== null && itemValue !== undefined) {
          return itemValue
            .toString()
            .toLowerCase()
            .includes(filterText1111.toLowerCase());
        }
        return false;
      });
    }
    return false;
  });


  const filteredHastane = postHastanelerSlider.filter((item) => {
    if (item !== null && item !== undefined) {
      return Object.keys(item).some((key) => {
        const itemValue = item[key];
        if (itemValue !== null && itemValue !== undefined) {
          return itemValue
            .toString()
            .toLowerCase()
            .includes(filterText1111.toLowerCase());
        }
        return false;
      });
    }
    return false;
  });


  const getCardClassName = () => {
    if (filterText1111.trim() !== "") {
      return 'inputarama mb-2 active';
    } else if (filterText1111 === "") {
      return 'inputarama mb-2 empty';
    } else {
      return 'inputarama mb-2';
    }
  };

  const getCarousel = () => {
    if (filterText1111.trim() !== "") {
      return 'carousel mb-2 active';
    }
  };


  const placeholderText = 'Search Doctor And Hospital...';

  function animatePlaceholder() {
    const input = document.getElementById('searchInput');
    let index = 0;
    let placeholder = '';

    function type() {
      placeholder += placeholderText[index];
      input.placeholder = placeholder;
      index++;

      if (index < placeholderText.length) {
        setTimeout(type, 100);
      }
    }
    type();
  }

  useEffect(() => {
    animatePlaceholder();
  }, []);


  console.log(filteredDoktor)
  return (
    <>
      <>
        <Carousel style={{ marginTop: "-6.9rem" }}>
          <Carousel.Item interval={4000} >
            <img
              className="sliderfoto"
              src="https://i.hizliresim.com/6bmiik2.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >

            </Carousel.Caption>
            <Carousel.Caption className="sliderüstüyazı  d-flex "  >
              <div className='d-flex' style={{ flexDirection: "column" }}>
                <span className='yazi1 fw-bold' >
                  Health For you
                </span>
              </div>
            </Carousel.Caption>
            <Carousel.Caption className="sliderüstüyazı2  d-flex "  >
              <div className='d-flex' style={{ flexDirection: "column" }}>
                <span className='yazi2 fw-bold' >
                  Inavation for you and your family...
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item interval={4000} >
            <img
              className="sliderfoto"
              src="https://i.hizliresim.com/k0cvwcg.jpg"
              alt="First slide"
            />

            <Carousel.Caption className="sliderüstüyazı  d-flex "  >
              <div className='d-flex' style={{ flexDirection: "column" }}>
                <span className='yazi1 ' style={{ color: "#fbc093" }}>
                  Medical For you
                </span>
              </div>
            </Carousel.Caption>
            <Carousel.Caption className="sliderüstüyazı2  d-flex "  >
              <div className='d-flex' style={{ flexDirection: "column" }}>
                <span className='yazi2 fw-bold'
                  style={{ color: "#dae7e6" }} >
                  Inavation for you and your family...
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >
          <Card className=''>
            <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />
          </Card>
        </Carousel.Caption>
        <Carousel.Caption className={getCarousel()} >
          <InputGroup className="inputgrup">

            <div className='w-100'>
              <div className='d-flex'>
                <Form.Control
                  size="lg"
                  id="searchInput"
                  className=''
                  placeholder=""
                  style={{ borderRadius: "20px  0px 0px 20px  " }}
                  onChange={(e) => setfilterText1111(e.target.value)}

                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

                <InputGroup.Text style={{ backgroundColor: "#0d6efd", borderRadius: "0px 20px 20px 0px", border: "none" }} >
                  <Link to="doctors" style={{ textDecoration: "none" }}>

                    <i class="fa-solid fa-magnifying-glass fa-beat fa-xl " style={{ color: "white" }}></i>
                  </Link>
                </InputGroup.Text>
              </div>
              <div className='p-1 ' style={{ width: "95.5%" }}>
                <Card style={{ borderRadius: "10px", border: "none" }} >
                  <Card.Body className={getCardClassName()}>
                    <Container>
                      <Row>
                        <Col sm={6} xs={12}>
                          <Card.Title style={{ color: "black", borderRadius: "5px", backgroundImage: "linear-gradient(to top, rgb(197, 239, 247), rgb(255,255,255))" }}>Hospitals</Card.Title>

                          <Card.Body className="custom-scroll" style={{ maxHeight: "300px", overflowY: "auto", }}>
                            {
                              filteredHastane.map((index) => {

                                return (
                                  <Link to={`/hospitaldetail/${index.id}`} style={{ textDecoration: "none" }}>
                                    <Row className='mt-2 searchRow' style={{  borderRadius: "10px" }} >
                                      <Col sm={6} xs={12} style={{ display: "flex", alignItems: "center" }}>

                                        <Card.Img
                                          style={{ maxHeight: "5.5rem", objectFit: "cover", width: "100%" , borderRadius:"10px" }}
                                          src={index.image_url || "https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/michigan/facility-images/mi_ascensionstjohn_hospital_detroit_22201morossrd_1600x1064px.jpg"}
                                          alt="Avatar"
                                          className="image p-1"
                                        />
                                      </Col>
                                      <Col sm={6} xs={12} className='mb-4 mt-2' style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
                                        <Card.Text className='mt-4 searchText' >{index.name}</Card.Text>

                                      </Col>
                                    </Row>
                                  </Link>
                                )
                              })
                            }


                          </Card.Body>

                        </Col>
                        <Col sm={6} xs={12} className=" border-start">
                          <Card.Title style={{ color: "black", borderRadius: "0px", backgroundImage: "linear-gradient(to top, rgb(200, 247, 197), rgb(255,255,255))" }}>Doctors</Card.Title>
                          <Card.Body className="custom-scroll" style={{ maxHeight: "300px", overflowY: "auto", }}>
                            {
                              filteredDoktor.map((index) => {

                                return (
                                  <Link to={`/doctors/${index.docktor_id}`} style={{textDecoration:"none"}}>
                                  <Row className='mt-2 searchRow' style={{ backgroundImage: "linear-gradient(to right, rgb(200, 247, 197), rgb(255,255,255))", borderRadius: "5px" }} >
                                    <Col sm={6} xs={12}  style={{ display: "flex", alignItems: "center" }}>
                                    <Card.Img
                                        style={{ maxHeight: "5.5rem", objectFit: "cover", width: "100%"  , backgroundPosition:"cent" , borderRadius:"10px"}}
                                        src={index.image_url || "https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"}
                                        alt="Avatar"
                                        className="image p-1 " 
                                      />
                                    </Col>
                                    <Col sm={6} xs={12} className='mb-4 mt-2' style={{ flexDirection: "column", display: "flex" }}>
                                      <Card.Text className='mt-4 searchText' style={{display:"flex"  , flexDirection:"column"}} > {index.tag?.toUpperCase()} {index.username}</Card.Text>

                                    </Col>
                                  </Row>
                                  </Link>
                                )
                              })
                            }
                          </Card.Body>
                        </Col>
                      </Row>
                    </Container>

                  </Card.Body>
                </Card>
              </div>
            </div>

          </InputGroup>


        </Carousel.Caption>


      </>
    </>
  );
}
