import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import Spinner from "../../../Components/Spinner/Spinner";
import DoctorMessageBox  from './DoctorMessageBox';
const DoctorMessageModal = () => {
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser?.id)
    const [tıklanahastaId, setTıklanaId] = useState()



    const [doktorunHastalariMesaj, setdoktorunHastalariMesaj] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:3002/docktor/hastalarim", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: user }),
        })
            .then(response => response.json())
            .then(data => setdoktorunHastalariMesaj(data.data))
            .finally(() => setIsLoading(false));
    }, [])



    const handleClick = (id) => {
        setTıklanaId(id)

    };
    const getCardClassName = (id) => {
        if (id === tıklanahastaId ) {
            return 'doktorListChat mb-2 active';
        }
        else {
            return 'doktorListChat mb-2'; // Pasif durum için stil sınıfı
        }
    };



    return (

        <>
            <Modal.Header style={{ zIndex: 9600 }} closeButton >
                <Modal.Title id="example-custom-modal-styling-title">
                    Chat Panel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <div>
            {isLoading ? (
                <div style={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Spinner>
                  
                  </Spinner>
                </div>
              
            ) : (
                <Row>
                    <Col sm={3}>

                        <Card className="custom-scroll" style={{ maxHeight: "400px", overflowY: "auto", }}>
                            {
                                doktorunHastalariMesaj?.map((index) => {
                                    return (<>

                                        <Card.Body className={getCardClassName(index.id)}
                                            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                                            <div className='p-2  text-center  d-flex flex-column' style={{ cursor: "pointer" }} key={index.id}
                                                onClick={() => {
                                                    handleClick(index.id);
                                                }}>
                                                <span>  {index.username} </span>

                                                <span>    {index.tag}</span>

                                            </div>
                                        </Card.Body>
                                    </>
                                    )
                                })
                            }
                        </Card>
                    </Col>
                    <Col sm={9}>
                            <DoctorMessageBox tıklanahastaId={tıklanahastaId} /> 
                    </Col>

                </Row>
            )}
        </div>
            </Modal.Body>
        </>
    )
}

export default DoctorMessageModal; 