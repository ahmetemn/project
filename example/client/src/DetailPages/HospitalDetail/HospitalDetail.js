import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import HospitalTabs from './HospitalTabs';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import HospitalSlider from './HospitalSlider/HospitalSlider'
import SwiperHospital from "./SwiperHospital/SwiperHospital"
import HospitalSocialMedia from './HospitalSocialMedia/HospitalSocialMedia';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from "react-bootstrap"
import HeaderModal from '../../Components/Header/HeaderModal/HeaderModal';
import "./HospitalDetail.css";
export default function HospitalDetail({ user }) {

  const { id } = useParams()
  const userid = useSelector((state) => state.user.currentUser?.id)
  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
  const [hospitaldetaildata, setHospitalDetailData] = useState([])
  const [hospitalbranch, setHospitalBranch] = useState([])
  const [hastaneTıklananId, setHastaneTıklananId] = useState()
  const [hastanePhoto, setHastanePhoto] = useState([])
  const [HastaneYorumlar, sethastaneYorum] = useState([])
  const [hastaneDoktorlar, sethastaneDoktorlar] = useState([])
  const [hastaneBranslar, sethastaneBranslar] = useState([])
  const [post, setPosts] = useState([]);
const [allHospitalPhotos , setallHospitalPhotos] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {

    fetch("http://localhost:3002/hastaneler")
      .then(response => response.json())
      .then(json => setPosts(json.data))

  }, [])



  useEffect(() => {

    fetch(`http://localhost:3002/hastaneler/${id}`)
      .then(response => response.json())
      .then(data => {

        setHospitalDetailData(data.HastaneDetay)
        setHastanePhoto(data.HastaneFoto.slice(0, 9));
        setallHospitalPhotos(data.HastaneFoto)
        sethastaneYorum(data.HastaneYorumlar)
        sethastaneDoktorlar(data.HastaneDoktorlar)
        sethastaneBranslar(data.HastaneBranslar)
      })
  }, [])
  useEffect(() => {
    fetch(`http://localhost:3002/hastaneler/${id}`)
      .then(response => response.json())
      .then(data => setHospitalBranch(data.HastaneBranslar))

  }, [])
  const postHastaneMesajDataClient = async (hospitalid, docktor_id) => {
    try {
      const response = await fetch("http://localhost:3002/patient/hastaol", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          userId: userid,
          hastane_id: hospitalid,
          docktor_id: docktor_id

        })
      });

      if (response.ok) {
        // İstek başarılı oldu
        console.log("POST isteği başarıyla tamamlandı.");
        // İstek sonucunu işleyebilirsiniz
      } else {
        // İstek başarısız oldu
        console.log("POST isteği başarısız oldu.");
      }
    } catch (error) {
      console.log("POST isteği sırasında bir hata oluştu:", error);
    }
  };
  const handleHastaneListeGoster = (id) => {
    setHastaneTıklananId(id)
  }



  return (
    <div>
      <Carousel style={{ marginTop: "-6.9rem" }} controls={false}>
        <Carousel.Item >
          <div class="resim-container"


          />
          <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0" }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >

            <Card   >
              <div>

              </div>
              <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />

            </Card>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className='mb-5 mt-2'>

        <Row>
          <Col sm={6}>

            {
              hospitaldetaildata?.map((index, key) => {
                return (
                  <>   

                    <ListGroup key={key}>

                       {
                        hastanePhoto[0]?.image_url ?  <Image className="logo"
                      src={hastanePhoto[0]?.image_url}
                        style={{ borderRadius: "10px", baxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", marginTop: "-5rem", }}>
                      </Image>: <Image className="logo"
                      src="https://i.hizliresim.com/60lhl43.png"
                        style={{ borderRadius: "10px", baxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", marginTop: "-5rem", }}>
                      </Image>
                       }
                     
                      <ListGroup className=''>

                        <ListGroup.Item style={{ borderStyle: "none" }} action variant="info">
                          <Row>
                            <Col sm={3}>
                              <span className='fw-bold'>Address</span>
                            </Col>
                            <Col sm={9}>
                              <span className='fw-bold'>{index.adress}</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ borderStyle: "none" }} action variant="light">

                          <Row>
                            <Col sm={3}>
                              <span className='fw-bold'>Phone Number</span>
                            </Col>
                            <Col sm={9}>
                              <span className='fw-bold'>{index.phone}</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>

                        <ListGroup.Item style={{ borderStyle: "none" }} action variant="info">
                          <Row>
                            <Col sm={3}>
                              <span className='fw-bold'>Branches</span>
                            </Col>
                            <Col sm={9}>
                              {
                                hospitalbranch.map((index) => {
                                  return (
                                    <span className='fw-bold'></span>
                                  )
                                })
                              }
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ borderStyle: "none" }} action variant="light">
                          <Row>
                            <Col sm={3}>
                              <span className='fw-bold'>When Is It Open</span>
                            </Col>
                            <Col sm={9}>
                              <span className='fw-bold'>24 Hours</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>

                        <ListGroup.Item style={{ borderStyle: "none" }} action variant="info">
                          <Row>
                            <Col sm={3}>
                              <span className='fw-bold'>Adverts</span>

                            </Col>
                            <Col sm={9}>
                              <span className='fw-bold'>0</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </ListGroup>

                    <div>

                      <div className='d-flex  justify-content-between mt-1 '>
                        <HospitalSocialMedia style={{ display: "flex" }} />
                        <Button style={{ borderRadius: "150px 240px  0px 240px", backgroundImage: "linear-gradient(to right, rgb(30, 139, 195), rgb(3, 201, 169))", border: "none", marginTop: "5px" }} onClick={() => {
                          postHastaneMesajDataClient(index.id, index.id);
                          handleHastaneListeGoster(index.id)
                          handleShow()
                        }} className="fw-bold"> <i class="fa-solid fa-paper-plane px-1 sendicon" ></i>Send Message</Button>
                      </div>


                      {/* <Link to="/auth/login">
                            <div className='d-flex justify-content-end mt-2 '>
                              <Button className="fw-bold  "> <i class="fa-solid fa-paper-plane px-1 sendicon"></i>Send Message</Button>
                            </div>
                          </Link> */}

                    </div>


                  </>
                )
              })
            }

            <Modal
              centered
              style={{ zIndex: 9500 }}
              size='lg'
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <HeaderModal setHastaneTıklananId={setHastaneTıklananId} hastaneTıklananId={hastaneTıklananId} />
            </Modal>
            <div className='d-flex justify-content-between'>
              <div>
              </div>
            </div>

          </Col>
          <Col sm={6}>
            <HospitalSlider hastanePhoto={hastanePhoto} />
          </Col>
        </Row>
        <br></br>
        <HospitalTabs allHospitalPhotos={allHospitalPhotos} HastaneYorumlar={HastaneYorumlar} hastaneDoktorlar={hastaneDoktorlar} hastaneBranslar={hastaneBranslar} />
        <SwiperHospital post={post} />


      </Container>
    </div>
  )
}
