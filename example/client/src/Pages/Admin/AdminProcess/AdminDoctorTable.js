import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import BranchPagination from '../HospitalProcess/HospitalBranchPagination.js/BranchPagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const AdminDoctorTable = () => {
    const [detail, setdoktor] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [filter, setFilter] = useState('')
    const [filterName, setFilterName] = useState('');
    const [filterEmail, setFilterEmail] = useState('');
    useEffect(() => {

        fetch("http://localhost:3002/doktorlar")
            .then(response => response.json())
            .then(data => setdoktor(data.data))

    }, [detail])




    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = detail.filter((item) => {
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
      
    // Sayfa değiştirme işlemi
    const paginate = (page) => setCurrentPage(page);

    return (
        <>
            <Table striped bordered hover size="sm"

                style={{ boxShadow: " rgb(141, 238, 235 , 0.7) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>

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
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Doctor Tag</th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }}>Doctor Content</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        getFilteredAndPaginatedPosts()?.map((index) => {
                            return (
                                <tr>
                                    <td>
                                    <i style={{ fontWeight: "600" }}>{index.username}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.email}</i></td>
                                    <td>{index.tag}</td>
                                    <td style={{ maxWidth: "100px" }}><i style={{ fontWeight: "600" }}> {index.content}</i></td>
                                  
                                </tr>
                            )

                        })
                    }
                </tbody>

            </Table>

            <div className='d-flex  justify-content-center '>
                        <BranchPagination currentPage={currentPage} postPerPage={postPerPage} totalPost={detail.length} paginate={paginate} ></BranchPagination>
                    </div>
            
        </>
    )
}

export default AdminDoctorTable;