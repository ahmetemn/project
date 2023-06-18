import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import AddBranchModal from './AddBranchModal';
import UpdateBranchModal from './UpdateBranchModal';
import BranchPagination from './HospitalBranchPagination.js/BranchPagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const HastaneBranchTable = () => {
    const [detail, setDetail] = useState([]);
    const [tıklanaId, setTıklananId] = useState()
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);
    const [filter, setFilter] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showtwo, setShowtwo] = useState(false);
    const handleClosetwo = () => setShowtwo(false);
    const handleShowtwo = () => setShowtwo(true);
    const user = useSelector((state) => state.user.currentUser.id)
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);

   const brnachDelete = async (id) => {
        try {
            const res = await fetch("http://localhost:3002/hastane/deletebranch",
                {
                    method: "POST",
                    body: JSON.stringify({ branches_id: id }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })

            if (res.status === 200) {
                alert("Delete işlemi başarılı.");

            }
            if (res.status === 401) {
                alert("Yorum Yapılamadı .");
            }


        } catch (error) {
            console.log(error)
        }

    }

    const getFilteredAndPaginatedPosts = () => {
        const filteredPosts = detail?.filter((item) => {
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
        const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);
        return currentPosts;
    };
    // Sayfa değiştirme işlemi
    const paginate = (page) => setCurrentPage(page);
  useEffect(()=>{
     
    try {
        fetch("http://localhost:3002/hastane/branches", {
            method: "POST",
            body: JSON.stringify({ userId: user }),
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/json; charset=UTF-8"
            },
          })
            .then(response => response.json())
            .then(data => setDetail(data.data));

    } catch (error) {
        console.log(error)
    }
  },[detail])
    const handleClick = (id) => {
        setTıklananId(id)
    };
     const handleBranchId =(id)=>{
     
        brnachDelete(id)
        console.log(id)
    }
    return (
        <>
            <Table striped bordered hover size="sm"
                className="custom-scroll"
                style={{ maxHeight: "400px", overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "red", boxShadow: " rgb(141, 238, 235 , 0.7) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }}    >

                            <div className='d-flex justify-content-between' >
                                <span className='mt-2'>  Branches  </span>
                                <InputGroup className=" mt-1 w-50">
                                    <Form.Control
                                        
                                        onChange={(e) => setFilter(e.target.value)}
                                        placeholder="Search Branch..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                  
                                </InputGroup>

                            </div>





                        </th>


                        <th className='d-flex justify-content-center mt-2'>
                            <Button onClick={handleShow} style={{  }} size='sm' variant="primary">


                                <i class="fa-solid fa-plus fa-xl "></i>
                            </Button>

                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        getFilteredAndPaginatedPosts()?.map((index) => {

                            return (

                                <>
                              
                                <tr>
                                    <td> <i style={{ fontWeight: "600" }}>{index.name}</i></td>

                                    <td className='text-center'>
                                        <Button

                                            onClick={() => {
                                                handleClick(index.id);
                                                handleShowtwo();
                                            }}
                                            size="sm" variant="outline-warning" className='m-1' style={{ borderRadius: "7px" }}>
                                            <i class="fa-solid fa-pen  "></i>
                                        </Button>

                                        <Button 
                                            onClick={() => {
                                                handleBranchId(index.id);
                                            
                                            }} size="sm" variant="outline-danger" className='m-1' style={{ borderRadius: "15px" }}>
                                            <i class="fa-solid fa-trash "></i>
                                        </Button>
                                    </td>
                                </tr>
                                                    
                                  </>
                 
                            )

                        })
                    }

                  
                </tbody>
               
               
                
            </Table>

            <div className='d-flex  justify-content-center '>
                        <BranchPagination currentPage={currentPage} postPerPage={postPerPage} totalPost={detail?.length} paginate={paginate} ></BranchPagination>
                    </div>
            
            <Modal centered show={show} onHide={handleClose}>
                <AddBranchModal detail={detail}  />
            </Modal>


            <Modal centered show={showtwo} onHide={handleClosetwo}>
                <UpdateBranchModal tıklanaId={tıklanaId} />
            </Modal>

        </>
    )
}

export default HastaneBranchTable;