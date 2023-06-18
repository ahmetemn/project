import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import BranchPagination from '../HospitalProcess/HospitalBranchPagination.js/BranchPagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import AddHospitaleDoctor from './AddHospitaleDoctor';
const HospitalDoctorTable = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [detail, setdoktor] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [filter, setFilter] = useState('')
    const [filterName, setFilterName] = useState('');
    const [filterEmail, setFilterEmail] = useState('');


    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);

    const user = useSelector((state) => state.user.currentUser.id)

    const deleteDoctor = async (id) => {
        try {
            const res = await fetch("http://localhost:3002/hastane/deletedocktor",
                {
                    method: "POST",
                    body: JSON.stringify({ docktor_id: id }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })

            if (res.status === 200) {
                alert("Delete Successful.");

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
            fetch(`http://localhost:3002/hastaneler/${user}`,
                {
                    method: "GET",
                    body: JSON.stringify(),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })

                .then(response => response.json())
                .then(data => setdoktor(data.HastaneDoktorlar))

        } catch (error) {
            console.log(error)
        }

    }, [detail])



    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = detail?.filter((item) => {
            if (item !== null && item !== undefined) {
                const nameMatch = item.username !== null && item.username !== undefined && item.username.toString().toLowerCase().includes(filterName.toLowerCase());
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

    //Sayfa değiştirme işlemi
    const paginate = (page) => setCurrentPage(page);


    const handleHastaneDoctorId = (id) => {

        deleteDoctor(id)
        console.log(id)
    }


    return (
        <>
            <Table striped bordered hover size="sm"

                style={{ boxShadow: " rgb(141, 238, 235 , 0.7) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Doctor Tag</th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >

                            <div className='d-flex justify-content-between' >
                                <span className='mt-1'>  Doctor Name  </span>
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
                                <span className='mt-2'> Doctor E-mail
                                </span>
                                <InputGroup className=" mt-1 w-50">
                                    <Form.Control
                                        size="sm"
                                        onChange={(e) => setFilterEmail(e.target.value)}
                                        placeholder="Search Email..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>

                            </div>


                        </th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >

                            <th className='d-flex justify-content-center'>
                                <Button onClick={handleShow} style={{ width: '100%' }} size='sm' variant="primary">
                                    <i class="fa-solid fa-plus fa-xl "></i>
                                </Button>
                            </th>

                        </th>



                    </tr>
                </thead>
                <tbody>
                    {
                        getFilteredAndPaginatedPosts()?.map((index) => {
                            return (
                                <tr>

                                    <td>{index.tag}</td>
                                    <td>
                                        <i style={{ fontWeight: "600" }}>{index.username}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.email}</i></td>


                                    <td className="text-center ">

                                        <Button onClick={() => {
                                            handleHastaneDoctorId(index.docktor_id);

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
                <AddHospitaleDoctor />
            </Modal>

        </>
    )
}

export default HospitalDoctorTable;