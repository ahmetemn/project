import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import DoctorDetailSlider from "./DoctorDetailSlider";
import DoctorTabBar from "./DoctorTabBar/DoctorTabBar";
import SwiderAnotherDoctors from "./SwiderAnotherDoctors/SwiderAnotherDoctors"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderModal from '../../Components/Header/HeaderModal/HeaderModal';
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
export default function DoctorDetail({ user }) {
    const [showed, setShowed] = useState(false);
    const handelClosed = () => setShowed(false)
    const handleShowed = () => setShowed(true);
    const userid = useSelector((state) => state.user.currentUser?.id)
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const { id } = useParams()
    const [doctordetail, setDoctorDetail] = useState([])
    const [doctordetailBranches, setDoctorDetailBranches] = useState([])
    const [docktordantıklananId, setdocktordantıklananId] = useState()
    const [doctorSelfPhoto, setDoctorSelfPhoto] = useState([])
    const [doctorBranchPhoto, setdoctorBranchPhoto] = useState([])
    const [anotherDoctor, setAnotherDoctor] = useState([])
    const [allDoctorPhoto , setallDoctorPhoto] = useState([])
    useEffect(() => {

        fetch(`http://localhost:3002/doktorlar/${id}`)
            .then(response => response.json())
            .then(data => {

                setDoctorDetail(data.doktorDetay);
                setDoctorSelfPhoto(data.doktorphoto);
                setdoctorBranchPhoto(data.doktorbranchphoto.slice(0, 8))
                setallDoctorPhoto(data.doktorbranchphoto)
            })
    }, [])




    useEffect(() => {

        fetch(`http://localhost:3002/doktorlar/${id}`)
            .then(response => response.json())
            .then(data => setDoctorDetailBranches(data.doktorunbransları))
    }, [])


    useEffect(() => {

        fetch("http://localhost:3002/doktorlar")
            .then(response => response.json())
            .then(data => setAnotherDoctor(data.data))
    }, [])


    const postData = async (hospitalid, docktorid) => {
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
                    docktor_id: docktorid
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
    const handleDoctorListedeGondor = (id) => {
        setdocktordantıklananId(id)
    }

    return (
        <>
            <Carousel style={{ marginTop: "-6.9rem" }}>
                <Carousel.Item  >

                    <img

                        className="doctorsliderfoto"
                        src="https://i.hizliresim.com/s1hn8y6.png"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >
                        <Card   >
                            <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container'>
                <Row>
                    <Col sm={12} md={6} lg={3} style={{ marginTop: "-0.4rem" }}>
                        {doctorSelfPhoto.length > 0 ? (
                            doctorSelfPhoto.map((data) => (
                                <Card style={{ width: 'auto', borderRadius: "10px", border: "none" }}>
                                    {data.image_url ? (
                                        <Card.Img
                                            style={{ height: "19.8rem" }}
                                            src={data.image_url}
                                            alt="Avatar"
                                            className="image"
                                        />
                                    ) : (
                                        <Card.Img
                                           style={{ height: "19.8rem" }}
                                            src="https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"
                                            alt="Avatar"
                                            className="image"
                                        />
                                    )}
                                </Card>
                            ))
                        ) : (
                            <Card style={{ width: 'auto', borderRadius: "10px", border: "none" }}>
                                <Card.Img
                                 style={{ height: "19.8rem" }}
                                    src="https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"
                                    alt="Avatar"
                                    className="image"
                                />
                            </Card>
                        )}

                    </Col>

                    <Col sm={12} md={6} lg={4} className="   d-flex  justify-content-center  align-items-center ">
                        {doctordetail.map((index) => {
                            return (

                                <div className='w-100' style={{ flexDirection: "column" }}>
                                    <Card className='w-100 ' style={{ boxShadow: "rgba(52,152,219, 1) 0px 2px 14px 0px", border: "none" }} >


                                        <ListGroup className=' w-100' style={{ borderStyle: "none" }}>

                                            <ListGroup.Item style={{ borderStyle: "none" }} action variant="light">


                                                <Row>
                                                    <Col sm={3} >
                                                        <span className='fw-bold'>Name</span>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <span className='fw-bold'>{index.username}</span>
                                                    </Col>
                                                </Row>


                                            </ListGroup.Item>

                                            <ListGroup.Item style={{ borderStyle: "none" }} action variant="secondary">
                                                <Row>
                                                    <Col sm={3}>
                                                        <span className='fw-bold'>Hospital  </span>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <span className='fw-bold'>{index.Hastane}</span>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ borderStyle: "none" }} action variant="light">

                                                <Row>
                                                    <Col sm={3}>


                                                        <span className='fw-bold float-start '>University</span>


                                                    </Col>

                                                    <Col sm={9}>
                                                        <span className='fw-bold float-start'>{index.content}</span>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item style={{ borderStyle: "none" }} action variant="secondary">
                                                <Row>
                                                    <Col sm={3} >
                                                        <span className='fw-bold float-start'>Degree</span>


                                                    </Col>

                                                    <Col sm={9} className='d-flex justify-content-start'>
                                                        <span className='fw-bold float-start'>{index.tag}</span>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ borderStyle: "none" }} action variant="light">
                                                <Row>
                                                    <Col sm={3}>


                                                        <span className='fw-bold'>Branches</span>
                                                    </Col>
                                                    <Col sm={9} >

                                                        {

                                                            doctordetailBranches.map((index) => {
                                                                return (
                                                                    <span className='fw-bold'>{index.name} ,  </span>
                                                                )
                                                            })
                                                        }

                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item style={{ borderStyle: "none" }} variant="secondary">
                                                <Row>
                                                    <Col sm={3}>
                                                        <span className='fw-bold'>E-mail</span>

                                                    </Col>
                                                    <Col sm={9} >
                                                        <span className='fw-bold'> {index.email}</span>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>


                                        </ListGroup>
                                    </Card>

                                    <div className='d-flex  justify-content-between'>
                                        <div className='d-flex mt-3 justify-content-end '>

                                            <FacebookShareButton
                                                url={"https://erxes.mn/blog/customer-experience-mistakes"}

                                            >
                                                <FacebookIcon size={32} round />
                                            </FacebookShareButton>
                                            <br />
                                            <TwitterShareButton
                                                url={"https://peing.net/ja/"}
                                            >
                                                <TwitterIcon size={32} round />
                                            </TwitterShareButton>

                                            <LinkedinShareButton
                                                url={"https://erxes.mn/blog/customer-experience-mistakes"}
                                            >
                                                <LinkedinIcon size={32} round>

                                                </LinkedinIcon>

                                            </LinkedinShareButton>

                                        </div>

                                        <div>
                                            {
                                                user ? <div className='d-flex justify-content-end mt-2 '>
                                                    <Button style={{ borderRadius: "150px 240px  0px 240px", backgroundImage: "linear-gradient(to right, rgb(30, 139, 195), rgb(3, 201, 169))", border: "none", marginTop: "5px" }} onClick={() => {
                                                        postData(index.hospitalid, index.docktor_id);
                                                        handleDoctorListedeGondor(index.docktor_id)
                                                        handleShowed()
                                                    }} className="fw-bold sendmesajyazi"> <i class="fa-solid fa-paper-plane  fa-bounce px-1 sendicon" ></i>Send Message</Button>
                                                </div>
                                                    :
                                                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                                                        <div className='d-flex justify-content-end mt-2 '>
                                                            <Button style={{ borderRadius: "150px 240px  0px 240px", backgroundImage: "linear-gradient(to right, rgb(30, 139, 195), rgb(3, 201, 169))", border: "none", marginTop: "5px" }} className="fw-bold  "> <i class="fa-solid fa-paper-plane px-1 sendicon"></i>Send Message</Button>
                                                        </div>
                                                    </Link>
                                            }
                                        </div>
                                    </div>



                                </div>
                            )
                        }
                        )}

                        <Modal
                            centered
                            style={{ zIndex: 9500 }}
                            size='lg'
                            show={showed}
                            onHide={handelClosed}
                            backdrop="static"
                            keyboard={false}
                        >
                            <HeaderModal docktordantıklananId={docktordantıklananId} setdocktordantıklananId={setdocktordantıklananId} />
                        </Modal>
                    </Col>
                    <Col sm={12} md={12} lg={5} >

                        <DoctorDetailSlider doctorBranchPhoto={doctorBranchPhoto} />
                    </Col>
                </Row>


                <DoctorTabBar allDoctorPhoto={allDoctorPhoto} doctordetail={doctordetail} className="p-2"></DoctorTabBar>

                <SwiderAnotherDoctors anotherDoctor={anotherDoctor} />
            </div>

        </>

    );
}
