import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import "./HospitalTabs.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import DoctorReviewValidations from '../DoctorDetail/DoctorTabBar/DoctorReviewValidation'
import HospitalPagination from './HospitalPagination';
import DoctorPagination from './DoctorPagination';
export default function HospitalTabs({ HastaneYorumlar, hastaneDoktorlar, hastaneBranslar  , allHospitalPhotos}) {

  const { id } = useParams()
  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
  const user = useSelector((state) => state.user.currentUser)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = hastaneBranslar.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsDoktor = hastaneDoktorlar.slice(indexOfFirstPost, indexOfLastPost);
  const asdsss = allHospitalPhotos.slice(indexOfFirstPost, indexOfLastPost);

console.log(allHospitalPhotos)
  const formik = useFormik({
    initialValues: {


      yorum: '',
      hastane_id: id

    },
    onSubmit: async (values) => {
      console.log(values)
      try {
        const res = await fetch("http://localhost:3002/patient/hastaneyorumyap",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/json; charset=UTF-8"
            },
          }, values)

        if (res.status === 200) {
          alert("Giriş işlemi başarılı.");

        }
        if (res.status === 401) {
          alert("Yorum Yapılamadı .");
        }


      } catch (error) {
        console.log(error)
      }
    },

    validationSchema: DoctorReviewValidations

  });



  const paginate = (page) => setCurrentPage(page);

  return (
    <>




      <Tab.Container className="p-2" id="left-tabs-example" defaultActiveKey="first" >

        <Nav variant="pills" defaultActiveKey="first" className="navtabbarhospital d-flex  mt-1 p-2" style={{ backgroundColor: "white", borderRadius: "20px", boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
          <Nav.Item style={{}}>
            <Nav.Link style={{ fontSize: "15px", fontWeight: "600", borderRadius: "10px" }} className="navtabbarhospital" eventKey="first">DESCRIPTION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="second">REVIEWS</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="four">DOCTORS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="five">BRANCHES</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="six">ALL PHOTOS</Nav.Link>
          </Nav.Item>


        </Nav>


        <Tab.Content className='d-flex'>
          <Tab.Pane eventKey="first">

            <Card className='mt-2 p-4 border-0' >
              <span > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla quod, ratione, vero quis veli
                maiores fuga ab ad dolor aliquam similique excepturi assumenda numquam odit ullam optio deleniti aut.
              </span>
            </Card>


          </Tab.Pane>
          <Tab.Pane eventKey="second" className='p-2 container-fluid'>


            {
              HastaneYorumlar?.map((index) => {
                return (
                  <Card className='mt-2 mb-3  '>
                    <Card.Header>{index.username}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {index.yorum}
                      </Card.Text>

                      <span>{index.yorumzamanı.substring(0, 10)}</span>
                    </Card.Body>
                  </Card>
                )
              })
            }

            <Card className="p-2 border-secondary mb-3">
              <Form onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3" >
                  <Form.Label>Yorum</Form.Label>
                  <Form.Control name="yorum" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />

                  {formik.errors.yorum && formik.touched.yorum && (<div className='mt-1 text-danger'>{formik.errors.yorum}</div>)}
                </Form.Group>


                {
                  user ? <Button style={{ float: "right", fontWeight: "600" }} className='d-grid' variant="primary" type="submit">
                    Comment
                  </Button>
                    :
                    <Link to="/auth/login">


                      <Button style={{ float: "right", fontWeight: "600" }} className='d-grid' variant="primary" type="submit">
                        Comment
                      </Button>
                    </Link>

                }


              </Form>
            </Card>

          </Tab.Pane>
          <Tab.Pane eventKey="three" className='p-2  container-fluid ' >


            <div class="container" id="containermaps">
              <iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2435.1362071787566!2d4.9278111!3d52.3860811!3m2!1i1024!2i768!4f13.1!3m3!
              1m2!1s0x47c60901d324d5e3%3A0x7f5e5ccbb6f9efac!2sJohan%20van%20Hasseltweg%2036%2C%201022%20WV%20Amsterdam%2C%20Hollanda!5e0!3m2!1str!2str!4v1668952177344!5m2!1str!2str"></iframe>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="four" className='p-2 container-fluid'>
            <Row>
              {
                currentPostsDoktor?.map((data) => {

                  return (
                    <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center'>
                      <Card
                        style={{
                          border: "none",
                          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                        }}
                        className="custom-scroll cardDoctor"
                      >
                        <Link to={`/doctors/${data.docktor_id}`}>
                          <Card.Img
                            style={{ maxHeight: "12rem", objectFit: "cover", width: "100%", height: "12rem" }}
                            src={data.image_url || "https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"}
                            alt="Avatar"
                            className="image"
                          />
                        </Link>
                        <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                          <Card.Title style={{ fontSize: "17px", textAlign: "center", marginBottom: "0" }} className='text-center'>
                            <i>{data.tag}</i>
                          </Card.Title>
                          <Card.Title style={{ fontSize: "17px", textAlign: "center", marginBottom: "0" }} className='text-center'>
                            <i>{data.username}</i>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })
              }

            </Row>
            <div className='d-flex justify-content-center mt-1'>
              <DoctorPagination style={{ backgroundColor: "red" }} postPerPage={postPerPage} totalPost={hastaneDoktorlar.length} paginate={paginate} />
            </div>
          </Tab.Pane>


          <Tab.Pane eventKey="five" className='p-2 container-fluid'>
            <Row>
              {
                currentPosts?.map((data) => {

                  return (
                    <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center'>
                      <Card
                        style={{
                          border: "none",
                          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                        }}
                        className="custom-scroll cardDoctor"
                      >
                        <Link to={`/branches/${encodeURIComponent(data.name)}`} style={{ textDecoration: "none" }}>
                          <Card.Img
                            style={{ maxHeight: "12rem", objectFit: "cover", width: "100%", height: "12rem" }}
                            src={data.image_url || "https://studyline.net/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9.jpg"}
                            alt="Avatar"
                            className="image"
                          />
                        </Link>
                        <Card.Body style={{ display: "flex", justifyContent: "center" }}>
                          <Card.Title className='text-center' style={{ fontSize: "17px", marginBottom: "0", marginTop: "10px" }}>
                            <i>{data.name}</i>
                          </Card.Title>
                        </Card.Body>
                      </Card>

                    </Col>

                  )
                })
              }

            </Row>

            <div className='d-flex justify-content-center mt-1'>
              <HospitalPagination style={{ backgroundColor: "red" }} postPerPage={postPerPage} totalPost={hastaneBranslar.length} paginate={paginate} />
            </div>



          </Tab.Pane>

          <Tab.Pane eventKey="six" className='p-2 container-fluid'>

            <Row>
              {
                asdsss?.map((data) => {

                  return (
                    <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center mb-2 d-flex' >
                                <Card style={{ border: "none", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: "100px", height: "150px" }} className=" cardDoctor">
                                   
                                    <Card.Img
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        src={data.image_url}
                                        alt="Avatar"
                                        className="image"
                                    />
                                </Card>

                            </Col>

                  )
                })
              }

            </Row>

            <div className='d-flex justify-content-center mt-1'>
              <DoctorPagination style={{ backgroundColor: "red" }} postPerPage={postPerPage} totalPost={allHospitalPhotos.length} paginate={paginate} />
            </div>
          </Tab.Pane>



        </Tab.Content>
      </Tab.Container>


      { /*    
 */}

    </>



  );
}
