import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./SwiderAnotherDoctors.css";
import Button from 'react-bootstrap/Button';
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SwiderAnotherDoctors({ anotherDoctor }) {


  console.log(anotherDoctor)
  return (

    <Card className="container  border-none  p-2" style={{ border: "none", minHeight: "420px", backgroundColor: "transparent" }}>

      <Card.Header className=" border-info border-3  " style={{ borderRadius: "0px", backgroundColor: "transparent", fontWeight: "900", }} >
        <i className="container" style={{ color: "black", fontSize: "20px" }}>Another Doctors</i>  <Button variant="outline-info btn-sm float-end " style={{ fontWeight: "600", borderRadius: "20px" }}>See All</Button></Card.Header>
      <Card.Body>

        <Swiper


          slidesPerView={1}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            "@0.60": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
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
            anotherDoctor?.slice(0,10).map((index) => {

              return (
                <SwiperSlide style={{ border: "none", backgroundColor: "transparent", minHeight: "380px" }} className="container">
                    
                  <Card className="cardplastic" style={{ minwidth: '18rem', minHeight: "22rem", border: "1", marginBottom: "45px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 1px, rgba(0, 0, 0, 0.23) 0px 1px 6px" }}>
                    <Card.Img className="cardimgplastic" variant="top" style={{ minHeight: "212px" }} src={index.image_url || "https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150442-stock-photo-smiling-female-doctor-holding-medical.jpg"} />
                    <Card.Body>
                    <Card.Title>
                      {index.tag}
                   
                      </Card.Title>
                      <Card.Title>
                     
                         {index.username}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              )



            })
          }

        </Swiper>


      </Card.Body>
    </Card>




  );
}
