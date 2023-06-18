import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Button from 'react-bootstrap/Button';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Style.css";

import NewCard from "./NewCard";
// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function App() {


  const [post, setPosts] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3002/hastaneler")
      .then(response => response.json())
      .then(json => setPosts(json.data))

  }, [])

  return (
    <div className="mt-4 wavehospital " style={{

    }}>

      <div className="container  px-5 "><h3 className="fw-bold " style={{ color: "#214fa0" }}>HOSPİTALS</h3></div>

      <Swiper


        style={{ marginTop: "20px", minHeight: "330px", }}
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2.3,
            spaceBetween: 1,
          },

          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 20,
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
            spaceBetween: 1,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  "


      >

        {
          post.map((index) => {


            return (
              <SwiperSlide className="p-2" style={{ borderRadius: "20px  ", width: "14.8rem", backgroundColor: "transparent" }} >


                <Link to={`/hospitaldetail/${index.id}`}>

                <NewCard image_url={index.image_url}  hospitalName={index.name}/>

                  </Link>
              </SwiperSlide>

            )
          })
        }



      </Swiper>


    </div>
  );
}
