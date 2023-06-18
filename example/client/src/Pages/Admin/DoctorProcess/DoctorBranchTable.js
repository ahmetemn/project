import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import DoctorBranchModal from './DoctorBranchModal';
const DoctorBranchTable = () => {


    const [branch, setbranch] = useState([]);
    const [show, setShow] = useState(false);
    const [branchId , setBranchId] = useState([])
    const added = useSelector(state => state.added);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[deletePhoto  , setdeletePhoto] = useState(false)
    
    const user = useSelector((state) => state.user.currentUser.id);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);


    const deleteDoctorunBranch = async (id) => {
        try {
            const res = await fetch("http://localhost:3002/docktor/deletebranch",
                {
                    method: "POST",
                    body: JSON.stringify({ branches_id: id }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })

            if (res.status === 200) {
                alert("Delete Succcessful");
                setdeletePhoto(!deletePhoto)
            }
            if (res.status === 401) {
                alert("Yorum Yapılamadı .");
            }


        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        try {
            fetch("http://localhost:3002/docktor/branches",
                {
                    method: "POST",
                    body: JSON.stringify({ userId: user }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
                .then(response => response.json())
                .then(data => setbranch(data.data))
            
        } catch (error) {
            console.log(error)
        }
    } , [deletePhoto , added ])   

    const handleHastaneDoctorBranchDelete = (id) => {

        deleteDoctorunBranch(id)
        console.log(id)
    }
    return (
        <>
            <Table striped bordered hover size="sm"

                style={{ boxShadow: " rgb(141, 238, 235 , 0.7) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Branches </th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Hospital </th>
                        <th className='d-flex justify-content-center'>
                            <Button  onClick={() => {
                                           
                                            handleShow(); } }  style={{ width: '50%' }} size='sm' variant="primary">
                                <i class="fa-solid fa-plus fa-xl "></i>
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        branch?.map((index) => {
                            return (
                                <tr>
                                    <td> <i style={{ fontWeight: "600" }}>{index.bname}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.hname}</i></td>
                                    
                                    <td className='text-center'>
                                    

                                        <Button  onClick={() => {
                                            handleHastaneDoctorBranchDelete(index.branches_id);

                                        }} size="sm" variant="outline-danger" className='m-1' style={{ borderRadius: "15px" }}>
                                            <i class="fa-solid fa-trash "></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal  centered show={show} onHide={handleClose}>
                <DoctorBranchModal branchId={branchId}/> 
            </Modal>
           
        </>
    )
}

export default DoctorBranchTable;