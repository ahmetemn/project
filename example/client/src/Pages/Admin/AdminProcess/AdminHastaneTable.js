import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import AddHospitalModal from './AddHospitalModal';
import UpdateHospitalModal from './UpdateHospitalModal';
import BranchPagination from '../HospitalProcess/HospitalBranchPagination.js/BranchPagination';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
const AdminHospitalTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showtwo, setShowtwo] = useState(false);
    const handleClosetwo = () => setShowtwo(false);
    const handleShowtwo = () => setShowtwo(true)
    const [tıklanaId, setTıklananId] = useState()

    const [detail, setHastaneler] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterEmail, setFilterEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [filter, setFilter] = useState('')

    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const hastaneDelete = async (id) => {
        try {
            const res = await fetch("http://localhost:3002/admin/deletehastane",
                {
                    method: "POST",
                    body: JSON.stringify({ hastane_id: id }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })

            if (res.status === 200) {
                alert("Giriş işlemi başarılı.");

            }
            if (res.status === 401) {
                alert("Yorum Yapılamadı .");
            }


        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        fetch("http://localhost:3002/hastaneler")
            .then(response => response.json())
            .then(data => setHastaneler(data.data))
    }, [detail])

    const handleClick = (id) => {
        setTıklananId(id)
       
    };


    const handleHastaneId =(id)=>{
     
        hastaneDelete(id)
    }

    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = detail.filter((item) => {
            if (item !== null && item !== undefined) {
                const nameMatch = item.name !== null && item.name !== undefined && item.name.toString().toLowerCase().includes(filterName.toLowerCase());
                const emailMatch = item.email !== null && item.email !== undefined && item.email.toString().toLowerCase().includes(filterEmail.toLowerCase());
                return nameMatch && emailMatch;
            }
            return false;
        });
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
        return currentPosts;
    };
    const paginate = (page) => setCurrentPage(page);
    return (
        <>
            <Table striped bordered hover size="sm"

                style={{ boxShadow: " rgb(106, 90, 205 ,0.8) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >

                            <div className='d-flex justify-content-between' >
                                <span className='mt-2'>  Hospital  Name   </span>
                                <InputGroup className=" mt-1 w-50">
                                    <Form.Control
                                        size="sm"
                                        onChange={(e) => setFilterName(e.target.value)}
                                        placeholder="Search Name..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />

                                </InputGroup>

                            </div>
                        </th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >


                            <div className='d-flex justify-content-between' >
                                <span className='mt-2'>   Hospital  E-mail    </span>
                                <InputGroup className=" mt-1 w-50">
                                    <Form.Control
                                        size="sm"
                                        onChange={(e) => setFilterEmail(e.target.value)}
                                        placeholder="Search E-mail..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />

                                </InputGroup>

                            </div>

                        </th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Hospital Address</th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Hospital Description </th>
                        <th className='d-flex justify-content-center'>
                            <Button onClick={handleShow} style={{ width: '40%' }} size='sm' variant="primary">
                                <i class="fa-solid fa-plus fa-xl "></i>
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        getFilteredAndPaginatedPosts()?.map((index) => {

                            return (
                                <tr >
                                    <td>

                                        <i style={{ fontWeight: "600" }}>{index.name}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.email}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.adress}</i></td>

                                    <td style={{ maxWidth: "100px" }}><i style={{ fontWeight: "600" }}> {index.description}</i></td>
                                    <td className="text-center ">

                                        <Button onClick={() => {
                                            handleClick(index.id);
                                            handleShowtwo();
                                        }} size="sm" variant="outline-warning" className='m-1' style={{ borderRadius: "7px" }}>
                                            <i class="fa-solid fa-pen "></i>
                                        </Button>

                                        <Button onClick={() => {
                                            handleHastaneId(index.id);

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

            <div className='d-flex  justify-content-center '>
                <BranchPagination currentPage={currentPage} postPerPage={postPerPage} totalPost={detail.length} paginate={paginate} ></BranchPagination>
            </div>
            <Modal centered show={show} onHide={handleClose}>
                <AddHospitalModal />
            </Modal>
            <Modal centered show={showtwo} onHide={handleClosetwo}>
                <UpdateHospitalModal tıklanaId={tıklanaId} />
            </Modal>
        </>
    )
}

export default AdminHospitalTable;