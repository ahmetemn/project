import React, { useEffect, useState, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import Modal from 'react-bootstrap/Modal';
import HospitalModal from "../HospitalModal/HospitalModal"
import "./Style.css"

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mapdata, setMapData] = useState([]);
  const  [detailmapdata , setDetailMapData] = useState({})
  useEffect(() => {
    fetch('https://data.ibb.gov.tr/tr/dataset/bd3b9489-c7d5-4ff3-897c-8667f57c70bb/resource/6800ea2d-371b-4b90-9cf1-994a467145fd/download/salk-kurum-ve-kurulularna-ait-bilgiler.json')
      .then(response => response.json())
      .then( (json)  => setMapData(json.filter(item => item.ALT_KATEGORI === "Eğitim Araştırma Hastanesi")))
  }, []);

  console.log(mapdata)

  const center = useMemo(() => ({ lat: 40.9927, lng: 29.1277 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDQCNp0klMMqCUuChd5TVvLezJqcxz2nGU",
  });

  if (!isLoaded) return <div>Loading</div>;

  const handleMarkerClick = (detailmap) => {
    // İstenilen ayrıntıları işle
    console.log(detailmap)
    setDetailMapData(detailmap)
    handleShow();
  };

  return (
    <Wrapper>
      <Modal centered show={show} onHide={handleClose}>
        <HospitalModal detailmapdata={detailmapdata} />
      </Modal>

      <GoogleMap zoom={10} mapContainerClassName="map-container" center={center}>
        {mapdata
         
          .map((detailmap) => {
            const lat = parseFloat(detailmap.ENLEM);
            const lng = parseFloat(detailmap.BOYLAM);

            return (
              <Marker
                onClick={() => handleMarkerClick(detailmap)}
                position={{ lat: lat, lng: lng }}
              />
            );
          })}
      </GoogleMap>
    </Wrapper>
  );
}
