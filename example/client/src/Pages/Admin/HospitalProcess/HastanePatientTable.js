import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import UpdateUserModal from "./UpdateUserModal"
import PatientPagination from './HospitalBranchPagination.js/PatientPagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const HastanePatientTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [detail, setPatient] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);
    const [filter, setFilter] = useState('')
    const [tıklanaUser, setTıklananUser] = useState()
    const user = useSelector((state) => state.user.currentUser.id);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);


    useEffect(() => {
        try {
            fetch("http://localhost:3002/hastane/kullanicilar",
                {
                    method: "POST",
                    body: JSON.stringify({ userId: user }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
                .then(response => response.json())
                .then(data => setPatient(data.data))
        } catch (error) {
            console.log(error)
        }
    }, [])


    const handleClick = (id) => {
        setTıklananUser(id)
    };

    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = detail.filter((item) => {
            if (item !== null && item !== undefined) {
                return Object.keys(item).some((key) => {
                    const itemValue = item[key];
                    if (itemValue !== null && itemValue !== undefined) {
                        return itemValue
                            .toString()
                            .toLowerCase()
                            .includes(filter.toLowerCase());
                    }
                    return false;
                });
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
                    <tr >
                        <th >
                            <InputGroup className=" mt-1 w-100 ">
                                <Form.Control
                                    size='sm'
                                    onChange={(e) => setFilter(e.target.value)}
                                    placeholder="Search Name..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />

                            </InputGroup>
                        </th>
                        <th>
                            <InputGroup className=" mt-1 w-100 ">
                                <Form.Control
                                    size='sm'
                                    onChange={(e) => setFilter(e.target.value)}
                                    placeholder="Search E-mail..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />

                            </InputGroup>
                        </th>

                    </tr>

                    <tr>



                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >


                            <div className='d-flex justify-content-between' >


                                <span className='mt-2'>
                                    Patient  Name

                                </span>


                            </div>
                        </th>

                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >


                            <div className='d-flex justify-content-between' >
                                <span className='mt-2'>  Patient E-mail  </span>


                            </div>

                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        getFilteredAndPaginatedPosts()?.map((index) => {

                            return (
                                <tr >

                                    <td>

                                        <i style={{ fontWeight: "600" }}>{index.username}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.email}</i></td>


                                  
                                </tr>
                            )

                        })
                    }


                </tbody>



            </Table>



            <div className='d-flex  justify-content-center '>
                <PatientPagination currentPage={currentPage} postPerPage={postPerPage} totalPost={detail.length} paginate={paginate} ></PatientPagination>
            </div>
            <Modal centered show={show} onHide={handleClose}>
                <UpdateUserModal tıklanaUser={tıklanaUser} />
            </Modal>




        </>


    )
}

export default HastanePatientTable;