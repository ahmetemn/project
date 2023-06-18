import React, { useState } from 'react'
import { Badge } from "react-bootstrap"
import { Modal } from 'react-bootstrap'
import HospitalMessageModal from "./HospitalMessage/HospitalMessageModal" ; 

export const HastaneMessage = () => {


    const [showed, setShowed] = useState(false);
    const handelClosed = () => setShowed(false)
    const handleShowed = () => setShowed(true);
    return (

        <>

            <span style={{ position: "absolute", right: "0", border: "none" }} className='m-5 mt-3 fw-bold '>
                <i onClick={handleShowed} id="icon2" className="messageicon fa-regular fa-message  p-3 " style={{ fontSize: "25px" }}> </i>
                <Badge style={{ fontSize: "10px", zIndex: "1000", position: "absolute", right: "10px", }} className='px-2 mt-2 ' size pill variant="danger">
                    1
                </Badge>
            </span>

            <Modal
                centered
                style={{ zIndex: 9500 }}
                size='lg'
                show={showed}
                onHide={handelClosed}
                backdrop="static"
                keyboard={false}
            >
            <HospitalMessageModal />
              
            </Modal>

        </>
    )
}
