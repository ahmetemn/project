import React from 'react';
import HospitalList from './HospitalList';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import "./Hospital.css";
import HospitalMaps from "./HospitalMap/HospitalMaps";
import MobileShorts from '../../Components/Content/Shorts/MobileShorts/MobileShorts';
const MapChart = () => {




  return (
    <>
  <MobileShorts /> 
      <Carousel style={{ marginTop: "-6.9rem" }}>
        <Carousel.Item interval={1000} >
          <img
            className="hospitalsliderfoto"
            src="https://i.hizliresim.com/8zt2epv.png"
            alt="First slide"
          />
          <Carousel.Caption style={{ top: "0", marginTop: "-1.1rem", left: "0", }} className="p-3 d-flex vh-100 d-flex justify-content-start align-items-start"  >
            <Card>
              <Image className="logosliderimg" variant="top" src="https://i.hizliresim.com/p1rutnn.png" />
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HospitalMaps />
      <HospitalList />
    </>


  );
};

export default MapChart;
