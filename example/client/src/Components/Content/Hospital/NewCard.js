import React from 'react'

import "./NewCard.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
export default function NewCard({ image_url, hospitalName }) {

  return (
    <div class="newCard" style={{ borderRadius: "5px" }}>
  <Image src={image_url || "https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/michigan/facility-images/mi_ascensionstjohn_hospital_detroit_22201morossrd_1600x1064px.jpg"} alt="Avatar" className="" style={{ minHeight:"320px", borderRadius: "20px", objectFit: "cover" }} />
  <div class="middle">
    <div className="bg-info" style={{ cursor: "pointer", borderRadius: "5px", color: "white" }}>{hospitalName}</div>
  </div>
</div>

  
  )
}
