import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Card.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import Image from 'react-bootstrap/Image'

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Image src="https://i.hizliresim.com/o85s37b.png" className='img-fluid mt-4'></Image>

      <Swiper

        style={{ marginTop: "20px", minHeight: "400px", backgroundColor: "transparent" }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
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
            slidesPerView: 5.4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"


      >


        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px 80px", width: "18rem", backgroundColor: "transparent", position: "relative" }}>
          <div id="container" style={{ borderRadius: "60px", position: "relative" }}>

                <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g293974-Istanbul-Vacations.html" target="blank">
              <div className="product-image " style={{ borderRadius: "60px 60px 60px 60px", position: "relative", cursor: "pointer" }}>
                <div className="d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(197, 239, 247 , 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
                  <span style={{ fontSize: "30px", fontFamily: "Impact" , color:"black" }}>ISTANBUL</span>
                </div>
                <img style={{ backgroundColor: "red" }} src="https://www.touringclub.it/sites/default/files/styles/gallery_full/public/immagini_georiferite/shutterstock_1503106583.jpg?itok=MG-GK31H" alt="" />
              </div>
              </a>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px  80px  ", width: "18rem", backgroundColor: "transparent" }} >
          <div id="container" style={{ borderRadius: "60px" }}>
            <div className="d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(150, 54, 148 , 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
              <span style={{ fontSize: "30px", fontFamily: "Impact" }}>IZMIR</span>
            </div>
            <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g298006-Izmir_Izmir_Province_Turkish_Aegean_Coast-Vacations.html" target="blank">
            <div className="product-image" style={{ borderRadius: " 60px 60px 60px 60px" }}>
              <img style={{ backgroundColor: "red" }} src="https://izmir.ktb.gov.tr/Resim/68383,konakjpg.png?0" alt="" />
            </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px  80px  ", width: "18rem", backgroundColor: "transparent" }} >
          <div className="sehirYazisi d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(249, 180, 45, 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
            <span style={{ fontSize: "30px", fontFamily: "Impact" }}>ANKARA</span>
          </div>

          <div id="container" style={{ borderRadius: "60px" }}>
          <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g298656-Ankara-Vacations.html" target="blank">
            <div className="product-image" style={{ borderRadius: " 60px 60px 60px 60px" }}>
              <img style={{ backgroundColor: "red" }} src="https://www.piriguide.com/wp-content/uploads/2022/02/ankara.jpg" alt="" />
            </div>
            </a>
          </div>
     
        </SwiperSlide>
        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px  80px  ", width: "18rem", backgroundColor: "transparent" }} >
          <div id="container" style={{ borderRadius: "60px" }}>
            <div className="sehirYazisi d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(102, 204, 153, 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
              <span style={{ fontSize: "30px", fontFamily: "Impact" }}>BURSA</span>
            </div>
            <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g297977-Bursa-Vacations.html" target="blank">
            <div className="product-image" style={{ borderRadius: " 60px 60px 60px 60px" }}>
              <img style={{ backgroundColor: "red" }} src="https://shippedaway.com/wp-content/uploads/2021/12/Arijana-Tkalcec-in-Ottoman-village-in-Bursa-Turkey.jpg" alt="" />
            </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px  80px  ", width: "18rem", backgroundColor: "transparent" }} >
          <div id="container" style={{ borderRadius: "60px" }}>
            <div className="product-image" style={{ borderRadius: " 60px 60px 60px 60px" }}>
              <div className="sehirYazisi d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(197, 239, 247 , 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
                <span style={{ fontSize: "30px", fontFamily: "Impact" }}>ANTALYA</span>
              </div>
              <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g297962-Antalya_Turkish_Mediterranean_Coast-Vacations.html" target="blank">

              <img style={{ backgroundColor: "red" }} src="https://media.istockphoto.com/id/470542476/tr/foto%C4%9Fraf/antalya-old-town-harbor.jpg?s=612x612&w=0&k=20&c=Sl5ks_0kklCvCD-OlFI__cscxccEneiPtY-Av4rAtwI=" alt="" />
            </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="sehirlerSwider" style={{ borderRadius: "80px 80px  80px  ", width: "18rem", backgroundColor: "transparent" }} >
          <div id="container" style={{ borderRadius: "60px" }}>
            <div className="product-image" style={{ borderRadius: " 60px 60px 60px 60px" }}>
              <div className="sehirYazisi d-flex justify-content-start align-items-center p-2 " style={{ backgroundImage: "linear-gradient(to top, rgb(255, 240, 0, 0.7), rgb(255,255,255,0.7))", borderRadius: "10px", zIndex: "2000", position: "absolute", top: "50%", left: "30px", transform: "translate(-50%, -50%) rotate(-90deg)" }}>
                <span style={{ fontSize: "30px", fontFamily: "Impact" }}>TRABZON</span>
              </div>
              <a style={{textDecoration:"none"}} href="https://www.tripadvisor.com.tr/Tourism-g298039-Trabzon_Ortahisar_Turkish_Black_Sea_Coast-Vacations.html" target="blank">
              <img style={{ backgroundColor: "red" }} src="https://blog.turkishairlines.com/wp-content/uploads/2021/12/trabzon-uzungol.jpg" alt="" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


    </>
  );
}
