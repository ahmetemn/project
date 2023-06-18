import React from 'react'
import "./MobileShorts.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function MobileShorts() {
    return (


        <div className='kardlarınkartı'>
            <div className="mobilesliderkart d-flex justify-content-center" >

                <div className='' style={{ display: "flex" }}>


                    <Card className='mobilecardsliderüst' style={{ backgroundColor: "#f25f22", width: '8rem', height: '4.2rem', borderRadius: "20px", marginRight: "2px" }}>

                        <Link to="doctors" style={{ textDecoration: 'none' }}>
                            <Card.Body >
                                <Card.Text className='d-flex justify-content-center  align-align-items-center ' style={{ color: "#214fa0", fontWeight: "600", cursor: "pointer" }}>
                                    <i class="fa-solid fa-user-doctor fa-2xl  mt-3  m-1 " style={{ color: "white" }} ></i>
                                    <span className='' style={{ fontWeight: "600", color: "white", fontSize: "12px" }} >Find Doctor</span>
                                </Card.Text>

                            </Card.Body>
                        </Link>
                    </Card>
                    <Card className='' style={{ backgroundColor: "#46b2e5", width: '8rem', height: '4.2rem', border: "none", borderRadius: "20px", }}>

                        <Link to="hospital" style={{ textDecoration: 'none' }}>
                            <Card.Body>
                                <Card.Text className='d-flex justify-content-center' style={{ color: "#46b2e5", fontWeight: "600", cursor: "pointer" }}>
                                    <i class="fa-solid fa-square-h fa-2xl  mt-3 m-1 " style={{ color: "white" }}></i>
                                    <span style={{ fontWeight: "600", color: "white", fontSize: "12px" }}>Find Hospital</span>
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                    <Card className='' style={{ backgroundColor: "#214fa0", width: '8rem', height: '4.2rem', border: "none", borderRadius: "20px", marginLeft: "2px" }}>

                        <Link to="branches" style={{ textDecoration: 'none' }}>
                            <Card.Body>
                                <Card.Text className='d-flex justify-content-center ' style={{ color: "#214fa0", fontWeight: "600", cursor: "pointer" }}>
                                    <i className="cardtext fa-solid fa-file-waveform fa-2xl mt-3 m-1 " style={{ color: "white" }}></i>
                                    <span style={{ fontWeight: "600", color: "white", fontSize: "600", fontSize: "12px" }}>Find Branchs</span>

                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>







                </div>
            </div>


        </div>

    )
}
