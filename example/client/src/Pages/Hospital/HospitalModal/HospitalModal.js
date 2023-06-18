import React from 'react'
import Modal from 'react-bootstrap/Modal';


export default function HospitalModal({detailmapdata}) {
  
    return (
        <div>

         
            <Modal.Header  closeButton>
                <Modal.Title style={{fontSize:"20px"}}>{detailmapdata.ADI}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
            <p> {detailmapdata.ADRES}</p> 
            <p>{detailmapdata.TELEFON}</p> 
            <a href={`https://${detailmapdata.WEBSITESI}`} target='_blank' rel='noopener noreferrer'>{detailmapdata.WEBSITESI}</a>

            </Modal.Body>
            <Modal.Footer>
             

            </Modal.Footer>




        </div>
    )
}
