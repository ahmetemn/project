import React, { useEffect, useState, useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container } from 'react-bootstrap';
import DoctorPagination from '../../../Pages/Doctors/DoctorPagination';
export default function SubBranch({detayBranchID}) {


  const [detail, setDetail] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  const [filter, setFilter] = useState('')


  useEffect(() => {

    fetch("http://localhost:3002/branslar")
      .then(response => response.json())
      .then(data => setDetail(data.data))
  }, [])




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


  console.log(detayBranchID)
  // Sayfa değiştirme işlemi
  const paginate = (page) => setCurrentPage(page);
  return (
    <>

   
      
    
      <Container>

        <Row>

          {
            getFilteredAndPaginatedPosts()
              
            .filter(item => item.parent_id === 2)
            .map((data) => {

      

              return (
                <Col sm={6} lg={3} md={6} className=' p-3 d-flex justify-content-center'>


                  <Card style={{


                        
                    border: "none",
                    boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  }}
                >


                    <Link to={`/doctors/${data.docktor_id}`}>
                      <Card.Img  src= {data.image_url  || "https://www.drhakanolmezturk.com/public/images/estetik-cerrahisi/ameliyatlar/vucut-estetigi/karin-germe-estemita.jpg" } alt="Avatar" className="image" />
                    </Link>

                    <Card.Body>
                      <Card.Title className='text-center'><i>{data.name}</i></Card.Title>
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
