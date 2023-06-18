
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./SliderRower.css";
import Steps from './steps/Steps';
import { useState, useEffect } from "react"
// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3002/branslar')
      .then(response => response.json())
      .then(json => setPosts(json.data))
  }, []);


  console.log(posts)
  return (
    <div >
      <Steps />


      <Card className=" border-0 " style={{
        borderRadius: "0px", maxHeight: "440px"
      }} >



        <Card.Body>
          <div className='container'>
            <span className='px-5 fw-bold' style={{ fontSize: "28px", color: "#46b2e5" }}>Branches  <span className='seeAll px-2 ' style={{ fontSize: "18px", color: "gray" }} >See all...</span></span>

          </div>


          <Swiper
            style={{ maxHeight: "440px", }}
            slidesPerView={1.2}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2.5,
                spaceBetween: 1,
              },

              "@0.60": {
                slidesPerView: 2.2,
                spaceBetween: 5,
              },
              "@0.75": {
                slidesPerView: 2.2,
                spaceBetween: 5,
              },
              "@1.00": {
                slidesPerView: 3.3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5.5,
                spaceBetween: 0,
              },

            }}

            initialSlide={0}
            loop={true}
            modules={[Pagination]}
            className="mySwiper  "
          >
            {
              posts
                .filter(item => item.parent_id === 0)
                .map(index => (
                  <>


              


                    <SwiperSlide
                      className="swiperSlider p-3"
                      style={{
                        height: "20rem",
                        width: "16rem",
                        border: "none",
                        backgroundColor: "white"
                      }}
                    >


                      <Card
                        style={{
                          width: '22rem',
                          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                          border: "none",
                          borderRadius: "20px",
                          backgroundColor: "transparent"
                        }}
                        className="mb-5"
                      >

                        <Link to={`/branches/${encodeURIComponent(index.name)}`} style={{ textDecoration: "none" }}>

                          <Card.Img
                            className="zoom"
                            style={{
                              height: "18rem",
                              cursor: "pointer",
                              borderRadius: "10px"
                            }}
                            variant="top"
                            src={index.image_url || "https://studyline.net/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9.jpg"}
                          />
                        </Link>
                        <Card.Title
                          className='cardTitle fw-bold'
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            color: "#214fa0",
                            marginTop: "-55px",
                            borderRadius: "0px",
                            fontSize: "39x",
                            fontFamily: "serif"
                          }}
                        >
                          {index.name}
                        </Card.Title>
                      </Card>

                    </SwiperSlide>

                  </>
                ))
            }

          </Swiper>

        </Card.Body>

      </Card>





    </div>
  );
}
