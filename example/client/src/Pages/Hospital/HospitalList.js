import React, { useState, useEffect } from 'react'
import "./Hospital.css"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaginationBranches from './Pagination';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function HospitalList() {


  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  const [filter, setFilter] = useState('')

  const [post, setPosts] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3002/hastaneler")
      .then(response => response.json())
      .then(json => setPosts(json.data))

  }, [])




  //get current post 

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);


  //CHANGE PAGE 
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

  const filtered = post.filter((item) => {
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



  return (
    <div>

      <Container>
        <Row>

          <Col className='p-3 px-4'>
            <InputGroup className=" mt-2">
              <Form.Control

                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search Hospital..."
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

              aria-label='Please Selecet HospitalName...'

              onChange={(e) => setFilter(e.target.value)}
            >
              <option disabled value="">
                Please Select Hospital...
              </option>

              {
                post.map((city) => {
                  return (
                    <option key={city.id} value={city.name}>
                      {
                        city.name
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


        <Row >

          {
            filtered.map((data) => {

              return (
                <Col sm={6} lg={3} md={6} className='px-4 p-1 mb-3 d-flex justify-content-center' key={data.id}>
                  <Card
                    className="cardDoctor mt-2"
                    style={{
                      border: "none",
                      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <Link to={`/hospitaldetail/${data.id}`}>
                      <Card.Img
                        style={{ maxHeight: "12rem", objectFit: "cover", width: "100%" }}
                        src={data.image_url || "https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/michigan/facility-images/mi_ascensionstjohn_hospital_detroit_22201morossrd_1600x1064px.jpg"}
                        alt="Avatar"
                        className="image"
                      />
                    </Link>
                    <Card.Body style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <Card.Title style={{ fontSize: "17px", textAlign: "center", marginBottom: "0" }}>
                        <i>{data.name}</i>
                      </Card.Title>
                      <Card.Title style={{ textAlign: "center", marginTop: "0" }}>
                        {/* İkinci başlık */}
                      </Card.Title>
                    </Card.Body>
                  </Card>

                </Col>


              )
            })
          }
        </Row>

        <div className='d-flex justify-content-center'>
          <PaginationBranches postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
        </div>

      </Container>

    </div>
  )
}
