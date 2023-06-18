import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Style.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
export default function App() {




  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3002/branslar')
      .then(response => response.json())
      .then(json => setPosts(json.data))
  }, []);

  console.log(posts)


  return (
    <div className="container">
      <Card style={{ border: "none" }} className="container p-2" >

        <Card.Header className=" border-info border-3  " style={{ borderRadius: "0px", backgroundColor: "transparent", fontWeight: "600", }} >
          <i className="" style={{ color: "black", fontSize: "18px" }}>Plastic Surgery</i>  </Card.Header>
      </Card>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2.3,
            spaceBetween: 1,
          },

          "@0.60": {
            slidesPerView: 2.2,
            spaceBetween: 1,
          },
          "@0.75": {
            slidesPerView: 2.2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5.5,
            spaceBetween: 5,
          },

        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
          posts
            .filter(item => item.parent_id === 1)
            .map((index) => {


              return (
                <SwiperSlide style={{ border: "none", backgroundColor: "transparent", minHeight: "380px" }} className="container mt-1">
                  <Link to="plasticsurgery" style={{ textDecoration: "none", color: "black" }}>
                    <Card className="cardplasticsurgery" >

                      <Link to={`/branches/${encodeURIComponent(index.name)}`} style={{ textDecoration: "none" }}>

                        <Card.Img className="cardimgplastic" variant="top" style={{ minHeight: "212px" }} src={index.image_url || "https://studyline.net/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9.jpg"} />
                          </Link>
                          <Card.Body>

                            <Card.Text style={{ color: "#214fa0", fontWeight: "600" }} >
                              {index.name}
                            </Card.Text>

                          </Card.Body>
                        </Card>
                      </Link>
                    </SwiperSlide>
                    )
            })
        }



                  </Swiper>

                </div>




              );
            }
