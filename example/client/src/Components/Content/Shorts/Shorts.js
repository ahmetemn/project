import React from 'react'
import "./SliderShort.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Shorts() {
    return (
        <div className="sliderkartı d-flex justify-content-end" >
            <div className='kartkısa'>
                <Card className='cardsliderüst' style={{ backgroundColor: "#f25f22", width: '5.3rem', height: '4rem', border: "none", borderRadius: "10px 0px 0px 20px", boxShadow: "   rgba(0, 0, 0.2, 0.8) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
                    <Link to="doctors" style={{ textDecoration: 'none' }}>
                        <Card.Body >
                            <Card.Text className='d-flex justify-content-center  align-align-items-center ' style={{ color: "#214fa0", fontWeight: "600", cursor: "pointer" }}>
                                <i class="fa-solid fa-user-doctor fa-2xl  mt-3  m-1 " style={{ color: "white" }} ></i>
                                <span className='' style={{ fontWeight: "600", color: "white" ,  fontSize:"12px" }} >Find Doctor</span>
                            </Card.Text>

                        </Card.Body>
                    </Link>
                </Card>
                <Card className='mt-5' style={{ backgroundColor: "#46b2e5", width: '5.3rem', height: '4rem', border: "none", borderRadius: "10px 0px 0px 20px", boxShadow: "   rgba(0, 0, 0, 0.6) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
                    <Link to="hospital" style={{ textDecoration: 'none' }}>
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-center' style={{ color: "#46b2e5", fontWeight: "600", cursor: "pointer" }}>
                                <i class="fa-solid fa-square-h fa-2xl  mt-3 m-1 " style={{ color: "white" }}></i>
                                <span style={{ fontWeight: "600", color: "white" , fontSize:"12px" }}>Find Hospital</span>
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='mt-5' style={{ backgroundColor: "#214fa0", width: '5.3rem', height: '4rem', border: "none", borderRadius: "10px 0px 0px 20px", boxShadow: "   rgba(0, 0, 0.2, 0.8) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
                    <Link to="branches" style={{ textDecoration: 'none' }}>
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-center ' style={{ color: "#214fa0", fontWeight: "600", cursor: "pointer" }}>
                                <i className="cardtext fa-solid fa-file-waveform fa-2xl mt-3 m-1 " style={{ color: "white" }}></i>
                                <span style={{ fontWeight: "600", color: "white", fontSize: "600",fontSize:"12px" }}>Find Branchs</span>

                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
