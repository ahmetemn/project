import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import "../../DoctorDetail/DoctorTabBar/DoctorTabBar.css"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import "./BranchTabbar.css";
import { Link } from 'react-router-dom';
export default function BranchTabbar({ hastanelerBrans ,doktorlarBrans }) {




    // useEffect(() => {

    //     fetch(`http://localhost:3002/doktorlar/${id}`)
    //         .then(response => response.json())
    //         .then(data => setDoctorYorumlar(data.yorumlar))
    // }, [doctorYorumlar])

    console.log(doktorlarBrans)

    return (
        <>

            <Tab.Container className="" id="left-tabs-example" defaultActiveKey="first" >


                <Nav variant="pills" defaultActiveKey="first" className="navtabbarhospital d-flex  p-2  " style={{ backgroundColor: "white", borderRadius: "20px", boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                   
                    <Nav.Item>
                        <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="first">WHICH HOSPİTAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ fontWeight: "600", fontSize: "15px", borderRadius: "10px" }} className="navtabbarhospital" eventKey="three">WHICH DOCTOR</Nav.Link>
                    </Nav.Item>

                </Nav>
                <Tab.Content className='d-flex'>
                

                    <Tab.Pane eventKey="first" className='p-2  container-fluid ' >
                        <Table striped bordered hover size="sm"

                            style={{ boxShadow: " rgb(106, 90, 205 ,0.8) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
                        >
                            <thead>
                                <tr>


                                    <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Hospital Name </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hastanelerBrans.map((index) => {


                                        return (
                                            <tr>
                                                <td className='d-flex  justify-content-between'>
                                                    <span className='p-1 fw-bold' style={{ color: "black" }}>{index.name} </span>
                                                    <Link to={`/hospitaldetail/${index.id}`} style={{ textDecoration: "none", color: "orange" }}>
                                                        <i class="sendmessageplane fa-solid fa-paper-plane fa-xl p-2" ></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="three" className='p-2  container-fluid ' >
                        <Table striped bordered hover size="sm"

                            style={{ boxShadow: " rgb(106, 90, 205 ,0.8) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Doctor Name </th>

                                </tr>
                            </thead>
                            <tbody>

                            {
                                doktorlarBrans.map((index) => {


                                        return (
                                            <tr>
                                                <td className='d-flex  justify-content-between'>
                                                    <span className='p-1 fw-bold' style={{ color: "black" }}>{index.tag} {index.username} </span>
                                                    <Link to={`/doctors/${index.id}`} style={{ textDecoration: "none", color: "orange" }}>
                                                        <i class="sendmessageplane fa-solid fa-paper-plane fa-xl p-2" ></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }


                            </tbody>
                        </Table>
                    </Tab.Pane>



                </Tab.Content>
            </Tab.Container>


            { /*    
 */}

        </>



    );
}
