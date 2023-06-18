import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import "../../../Components/Header/HeaderMessagetabbar/HeaderTabbar.css";
import Spinner from "../../../Components/Spinner/Spinner";
import MessageBoxValidation from '../../../Components/Header/HeaderMessagetabbar/MessageBoxValidation';


export default function DoctorMessageBox({ tıklanahastaId }) {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser?.id)
    const [hastamessage, sethastaMessage] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
         setIsLoading(true);
        fetch("http://localhost:3002/docktor/mesajlarim", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ hasta_id: tıklanahastaId  ,  userId: user }),
        })

            .then(response => response.json())
            .then(data => sethastaMessage(data.data))
            .finally(() => setIsLoading(false));
                
    }, [tıklanahastaId])

    const formik = useFormik({
        initialValues: {
            messages: '',
        },
        onSubmit: async (values, { resetForm }) => {
                const res = await fetch("http://localhost:3002/docktor/mesajgonder", {
                    method: "POST",
                    body: JSON.stringify({
                        patient_id: tıklanahastaId, ...values}),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                }, values);

                if (res.status === 200) {
                    alert("Giriş işlemi başarılı.");
                    fetchMessages()
                    resetForm();
                }
                if (res.status === 401) {
                    alert("Yorum Yapılamadı .");
                }
          
        },
        validationSchema: MessageBoxValidation
    });


    const fetchMessages = () => {
        setIsLoading(true);
        fetch("http://localhost:3002/docktor/mesajlarim", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hasta_id: tıklanahastaId, userId: user }),
        })
          .then((response) => response.json())
          .then((data) => sethastaMessage(data.data))
          .finally(() => setIsLoading(false));
      };


    return (
        < >
            {
                tıklanahastaId ?
                    <Row>
                        <Col sm={12}>
                            <Card  className='w-100 ' style={{ border: "none", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                                <Card.Body className="custom-scroll" style={{ maxHeight: "300px", overflowY: "auto", }} >
                                    <Card style={{ border: "none" }}>
                                        <Card.Body style={{
                                            flexDirection: "column", display: "flex",

                                        }} >
                                                {isLoading ? (
                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <Spinner >

                                                        </Spinner>
                                                    </div>

                                                ) : (
                                                    <div style={{ width: "auto" }}>

                                                        {
                                                            hastamessage?.map((index) => {
                                                                const isCurrentUser = index.gönderen_id === user
                                                                return (
                                                                    <>
                                                                        {isCurrentUser ? (
                                                                            <>
                                                                                 <Card
                                                                                    style={{
                                                                                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                                                                                        height: "auto",
                                                                                        width: "fit-content",
                                                                                        display:"flex", // Bu satırı ekleyin
                                                                                        borderRadius: "10px",
                                                                                        justifyContent: "flex-end",
                                                                                        display: "flex",
                                                                                        marginLeft: "auto",
                                                                                        backgroundColor: "#46b2e5",
                                                                                        color: "white",
                                                                                        fontWeight: "600",
                                                                                        border: "none"
                                                                                    }}
                                                                                    className="mt-2"
                                                                                >
                                                                                    <i className="p-2 text-center">{index.messages}</i>
                                                                                </Card>


                                                                            </>
                                                                        ) : (
                                                                            <Card
                                                                                style={{
                                                                                    boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                                                                                    Height: "auto",
                                                                                    width: "fit-content",
                                                                                    borderRadius: " 10px 100px 120px; ",
                                                                                    justifyContent: "flex-end",
                                                                                    display: "flex",
                                                                                    marginRight: "auto",
                                                                                    backgroundColor: "#88d3cb",
                                                                                    fontWeight: "600",
                                                                                    border: "none",
                                                                                    color: "white"

                                                                                }}
                                                                                className="mt-1"
                                                                            >
                                                                                <span className="p-2 text-center">{index.messages}</span>
                                                                            </Card>
                                                                        )}
                                                                    </>

                                                                )
                                                            })
                                                        }
                                                    </div>

                                                )}
                                            
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Row className='mt-2 float-right'>
                                 <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mt-3" >
                                        <Form.Control placeholder='Write your messages...' style={{ boxShadow: "rgba(82, 179, 217, 1) 0px 2px 8px 0px", border: "none" }} value={formik.values.messages} name="messages" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" >
                                        </Form.Control>
                                        {
                                            user ? <Button size="sm" style={{ float: "right", fontWeight: "600", borderRadius: "20px" }} className='d-grid mt-2' variant="primary" type="submit">
                                                Send Message
                                            </Button>
                                                :
                                                <Link to="/auth/login">


                                                    <Button style={{ float: "right", fontWeight: "600" }} className='d-grid mt-2' variant="primary" type="submit">
                                                        Send Message
                                                    </Button>
                                                </Link>
                                        }
                                        {formik.errors.messages && formik.touched.messages && (<div className='mt-1 text-danger'>{formik.errors.messages}</div>)}
                                    </Form.Group>
                                </Form> 
                            </Row>
                        </Col>
                    </Row> : <span>Lütfen bir doktor seç</span>
            }
        </>
    );
}
