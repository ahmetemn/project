import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from './MessageBox';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import "./HeaderTabbar.css";
import Spinner from '../../Spinner/Spinner';
import { useDispatch } from 'react-redux';
const MessageTabbar = ({ docktordantıklananId, hastaneTıklananId, setHastaneTıklananId }) => {

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const user = useSelector((state) => state.user.currentUser?.id)
    const [tıklanaId, setTıklanaId] = useState()
    const [doktorlarimMesajList, setDoktorlarimMesajList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [messageGelen, setMessageGelen] = useState([]);
    const [tıklananKisi, setTıklananKisi] = useState(null);
    useEffect(() => {
        if (docktordantıklananId) {
            setTıklanaId(docktordantıklananId);
        } else if (hastaneTıklananId) {
            setTıklanaId(hastaneTıklananId);
        }
    }, [docktordantıklananId, hastaneTıklananId]);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:3002/patient/doktorlarim", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: user }),
        })
            .then(response => response.json())


            .then(data => {
                setDoktorlarimMesajList(data.data);
                dispatch({ type: 'SET_MESSAGES', payload: data.data });
            })

            .finally(() => setIsLoading(false));
    }, [])

    console.log()

    const handleClick = (id) => {
        setTıklanaId(id)
        setHastaneTıklananId(null)
    };
    const getCardClassName = (id) => {
        if (id === tıklanaId || id === hastaneTıklananId) {
            return 'doktorListChat mb-2 active';
        }
        else {
            return 'doktorListChat mb-2'; // Pasif durum için stil sınıfı
        }
    };


    return (
        <div>
            {isLoading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Spinner>

                    </Spinner>
                </div>

            ) : (
                <Row>
                    <Col sm={3}>

                        <Card className="custom-scroll" style={{ maxHeight: "400px", overflowY: "auto", }}>
                            {
                                doktorlarimMesajList?.map((index) => {
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
                        <MessageBox hastaneTıklananId={hastaneTıklananId} tıklanaId={tıklanaId} doktorlarimMesajList={doktorlarimMesajList} />
                    </Col>

                </Row>
            )}


        </div>
    )
}

export default MessageTabbar