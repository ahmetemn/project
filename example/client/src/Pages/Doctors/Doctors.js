import React, { useEffect, useState , useCallback } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Doctor.css"
import { Container } from 'react-bootstrap';
import DoctorPagination from './DoctorPagination';
import MobileShorts from '../../Components/Content/Shorts/MobileShorts/MobileShorts';


export default function Doctors() {


  const [detail, setDetail] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(16);
  const [filter, setFilter] = useState('')


    useEffect(()=>{
      fetch("http://localhost:3002/doktorlar")
      .then(response => response.json())
      .then(data => setDetail(data.data));
    },[detail])

   

  // Filtrelenmiş ve sayfalanan gönderileri döndüren yardımcı fonksiyon
  const getFilteredAndPaginatedPosts = () => {
    const filteredPosts = detail.filter((item) => {
      if (item !== null && item !== undefined) {
        return Object.keys(item).some((key) => {
          const itemValue = item[key];
          if (itemValue !== null && itemValue !== undefined) {
            return itemValue
              .toString()
              .toLowerCase()
              .includes(filter.toLowerCase());
          }
          return false;
        });
      }
      return false;
    });
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  };

  // Sayfa değiştirme işlemi
  const paginate = (page) => setCurrentPage(page);
  return (
    <>

      <MobileShorts />
      <Carousel style={{ marginTop: "-6.9rem" }}>
        <Carousel.Item interval={1000} >
          <img
            className="doctorsliderfoto"
            src="https://i.hizliresim.com/dsgv7ng.png"
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

          <Col className='p-3 px-4' sm={6}>
            <InputGroup className=" mt-2">
              <Form.Control

                onChange={(e) => { setFilter(e.target.value); }}
                placeholder="Search Doctor..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-info" id="button-addon2">
                <i class="fa-solid fa-magnifying-glass"  ></i>
              </Button>
            </InputGroup>
          </Col>
          <Col className='p-3 px-4 mt-2' sm={6}>
            <Form.Select

              aria-label='Please Selecet City...'

              onChange={(e) => setFilter(e.target.value)}
            >
              <option disabled value="">
                Please Select City...
              </option>

              {
                detail.map((city) => {
                  return (
                    <option key={city.id} value={city.content}>
                      {
                        city.content
                      }
                    </option>
                  )
                })
              }
            </Form.Select>
          </Col>

        </Row>

      </Container>
      <Container>

        <Row>

          {
            getFilteredAndPaginatedPosts().map((data) => {

              return (
                <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center mb-2' >


                  <Card style={{


                    border: "none",
                    boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  }}
                    className="custom-scroll cardDoctor">
                    <Link to={`/doctors/${data.docktor_id}`}>


                      {
                        data.image_url ? <Card.Img
                          style={{ maxHeight: "12rem" }}


                          src={data.image_url}
                          alt="Avatar"
                          className="image"
                        /> : <Card.Img
                          style={{ maxHeight: "12rem" }}


                          src="https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"
                          alt="Avatar"
                          className="image"
                        />
                      }

                    </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "17px" }} className='text-center'><i>{data.tag} </i></Card.Title>
                      <Card.Title className='text-center'><i>{data.username}</i></Card.Title>
                    </Card.Body>
                  </Card>

                </Col>

              )
            })
          }

        </Row>
        <div className='d-flex justify-content-center'>
          <DoctorPagination postPerPage={postPerPage} totalPost={detail.length} paginate={paginate} />
        </div>
      </Container>
    </>
  )
}
