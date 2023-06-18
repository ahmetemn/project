import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";
import HeaderModal from './HeaderModal/HeaderModal';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
export default function Header({ userClient }) {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);

  const handleLogout = () => {
    // Oturumu kapatma işlemini gerçekleştir

    fetch("http://localhost:3002/auth/logout", {
      method: "POST"
    })

    localStorage.removeItem('persist:root');
    // Daha fazla oturum işlemlerini yapmak isterseniz, burada diğer işlemleri de yapabilirsiniz.
    window.location.reload()
  };

  const user = useSelector((state) => state.user.currentUser);


  const [showed, setShowed] = useState(false);
  const handelClosed = () => setShowed(false)
  const handleShowed = () => setShowed(true);

  window.onscroll = function () { scrollFunction() };


  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbarButtons = document.querySelectorAll(".navbarbtn");
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = "white";
      navbarButtons.forEach(btn => (btn.style.color = "black"));

    } else {
      navbar.style.backgroundColor = "transparent";
      navbarButtons.forEach(btn => (btn.style.color = "white"));

    }
  }




  return (
    <>

      {['xl'].map((expand) => (

        <Navbar id='navbar' key={expand} style={{ zIndex: "7000", display: "flex", top: "0px", marginTop: "0px", position: "sticky", height: "65px" }} expand={expand} >
          <Container fluid>
            <Navbar.Brand href="/"  >
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas

              style={{ backgroundColor: "#b0f1f3", zIndex: "9000" }}
              show={show}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>


                <Nav id="nav" className=' ps-3'>
                  <div>
                  </div>
                  <Link to="/" style={{ textDecoration: "none" }}>   <Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}  >HOME</Button></Link>
                  <Link to="hospital" style={{ textDecoration: "none" }} > <Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}  >HOSPITAL</Button></Link>
                  <Link to="doctors" style={{ textDecoration: "none" }}><Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}  >DOCTORS</Button> </Link>
                  <Link to="branches" style={{ textDecoration: "none" }}><Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}  >BRANCHES</Button>
                    <Link to="contact" style={{ textDecoration: "none" }}><Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}  >CONTACT</Button> </Link>
                    <Link to="about"> <Button onClick={handleClose} className="navbarbtn" style={{ border: "0", fontWeight: "600", backgroundColor: "transparent" }}   >ABOUT US</Button> </Link> </Link>
                </Nav>
                <Row>
                  {
                    user ?

                      <span></span>
                      :

                      <>
                        <Col>
                          <div className="dropdown mt-3" >
                            <button
                              className="dropbtn"
                              style={{ display: "flex", backgroundColor: "transparent" }}>
                              <i id='' className="loginicon fa-regular fa-user p-1" style={{ color: "black", display: "flex", fontSize: "25px" }}>
                              </i>

                            </button>
                            <div className="dropdown-content">
                              <Dropdown.Item ><Link to="auth/login"><Button className='btn btn-warning btn-block' style={{ minWidth: "120px", fontWeight: "600", }}> Login</Button> </Link></Dropdown.Item>
                              <Dropdown.Item > <Link to="auth/signin"> <Button className=' btn-block' style={{ minWidth: "120px", fontWeight: "600" }}>Signup </Button></Link></Dropdown.Item>
                            </div>
                          </div>
                        </Col>


                      </>

                  }
                  <Col>
                    <Modal
                      centered
                      style={{ zIndex: 9500 }}
                      size='lg'
                      show={showed}
                      onHide={handelClosed}
                      backdrop="static"
                      keyboard={false}
                    >
                      <HeaderModal />
                    </Modal>
                    {
                      userClient ?
                        <div className='mt-3 '>
                          {/* <Badge style={{ fontSize: "11px", zIndex: "1000", position: "absolute", backgroundColor: "red" }} className='m-4 my-2 ' size pill variant="danger">
                            {message?.length}
                          </Badge> */}
                          <i id="icon2" className="messageicon fa-regular fa-message p-2 mt-2" style={{ color: "#3b5998", fontSize: "25px" }} onClick={handleShowed}>
                          </i>
                        </div> : <span></span>
                    }




                  </Col>
                  <Col>
                    {
                      user ?
                        <div className='mt-3 '>
                          <i id="icon2" className="messageicon fa-solid fa-right-from-bracket p-2 mt-2" style={{ color: "#46b2e5", fontSize: "25px" }} onClick={handleLogout}></i>
                        </div>

                        : <span></span>
                    }

                  </Col>
                  <Col>

                  </Col>
                </Row>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>


      ))}





    </>







  )
}
