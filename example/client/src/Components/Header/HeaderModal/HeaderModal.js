import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderTabbar from '../HeaderMessagetabbar/HeaderTabbar';
const HeaderModal = ({docktordantıklananId , hastaneTıklananId ,setHastaneTıklananId}) => {


    return (
        <>
            <Modal.Header style={{ zIndex: 9600 }} closeButton >
                <Modal.Title id="example-custom-modal-styling-title">
                    Chat Panel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <HeaderTabbar setHastaneTıklananId={setHastaneTıklananId} hastaneTıklananId={hastaneTıklananId} docktordantıklananId={docktordantıklananId}></HeaderTabbar>

            </Modal.Body>
          
        </>
    );
}

export default HeaderModal;
