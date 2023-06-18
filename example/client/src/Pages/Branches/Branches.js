import React, { useState, useEffect } from 'react'
import "./Branches.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaginationBranches from './PaginationBranches';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import InputGroup from 'react-bootstrap/InputGroup';
import MobileShorts from '../../Components/Content/Shorts/MobileShorts/MobileShorts';
import { Link } from 'react-router-dom';
export default function Branches() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(16);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('http://localhost:3002/branslar')
            .then(response => response.json())
            .then(json => setPosts(json.data))
    }, [posts]);

console.log(posts)
    // Filtrelenmiş ve sayfalanan gönderileri döndüren yardımcı fonksiyon
    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = posts.filter((item) => {
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

    // Sayfalama için gerekli hesaplamalar


    return (
        <div>
            <MobileShorts />
            <Carousel style={{ marginTop: "-6.9rem" }}>
                <Carousel.Item interval={1000} >
                    <img
                        className="brancheslsliderfoto"
                        src="https://i.hizliresim.com/pd8p7i8.png"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start">
                        <Card>
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

                                onChange={(e) => {
                                    setFilter(e.target.value);
                                    setCurrentPage(1); // Filtre değiştiğinde sayfayı sıfırla
                                }}
                                placeholder="Search Branch..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-info" id="button-addon2">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col className='p-3 px-4 mt-2' sm={6}>
                        <Form.Select
                            aria-label='Please Select HospitalName...'
                            value={filter}
                            onChange={(e) => {
                                setFilter(e.target.value);
                                setCurrentPage(1); // Filtre değiştiğinde sayfayı sıfırla
                            }}
                        >
                            <option disabled value="">
                                Please Select Branch...
                            </option>
                            {posts.map((city) => {
                                return (
                                    <option key={city.id} value={city.id}>
                                        {city.id}
                                    </option>
                                );
                            })}
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {getFilteredAndPaginatedPosts()
                 
                    .map((data) => {
                        return (
                            <Col xs={12} sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center'>
                                <Card style={{
                                    maxwidth: '19rem', border: "none",
                                    boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                                }}
                                    className="cardDoctor">

                                    <Link to={`/branches/${encodeURIComponent(data.name)}`}>


                                        {
                                            data.image_url ? <Card.Img
                                                                        style={{ maxHeight: "12rem", objectFit: "cover", width: "100%", height: "12rem" }}


                                                src={data.image_url}
                                                alt="Avatar"
                                                className="image"
                                            /> : <Card.Img
                                            style={{ maxHeight: "12rem", objectFit: "cover", width: "100%", height: "12rem" }}



                                                src="https://studyline.net/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9.jpg"
                                                alt="Avatar"
                                                className="image"
                                            />
                                        }

                                    </Link>
                                    <Card.Body>

                                        <Card.Title className='text-center'><i>{data.name}</i></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <div className='d-flex justify-content-center mt-2'>
                    <PaginationBranches postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />
                </div>
            </Container>
        </div>
    );
}
