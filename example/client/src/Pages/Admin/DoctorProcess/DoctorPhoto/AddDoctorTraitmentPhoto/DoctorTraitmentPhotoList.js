import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'antd';
import { useSelector } from 'react-redux';
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import HastanePhotoPagination from '../../../HospitalProcess/HastanePhoto/HastanePhotoPagination';
const DoctorTraitmentPhotoList = ({selectBranchesID,buttonClicked}) => {
    const user = useSelector((state) => state.user.currentUser.id)
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const [doctorBranchPhoto, setdoctorBranchPhoto] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = doctorBranchPhoto.slice(indexOfFirstPost, indexOfLastPost);
    const [dataLength , setLenght] = useState([])
    const paginate = (page) => setCurrentPage(page);
    const[deletePhoto  , setdeletePhoto] = useState(false)


    const deleteHastanePhoto = async (image_url) => {
        try {
            const res = await fetch("http://localhost:3002/docktor/deleteimage",
                {
                    method: "POST",
                    body: JSON.stringify({ image_url: image_url }),
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
            if (res.status === 200) {
                alert("Giriş işlemi başarılı.");
                setdeletePhoto(!deletePhoto)
            }
            if (res.status === 401) {
                alert("Yorum Yapılamadı .");
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleHastanePhotoDelete = (image_url) => {
        deleteHastanePhoto(image_url)
    }
 
      useEffect(() => {
        try {
            fetch("http://localhost:3002/docktor/operasyonphoto", {
              method: "POST",
              body: JSON.stringify({ userId: user, branches_id: selectBranchesID }),
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/json; charset=UTF-8"
              },
            })
              .then(response => response.json())

              .then(data => {

                setdoctorBranchPhoto(data.data)
              
              })
          } catch (error) {
            console.log(error);
        }
      }, [selectBranchesID,buttonClicked,deletePhoto]);

    return (
        <>
 <Row className='p-2'>
            {currentPosts?.map((index) => {

                return (
                    <>
                    <Col sm={6} lg={3} md={6} className='px-4 p-1 d-flex justify-content-center  d-flex' >
                            <Card style={{ border: "none", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: "100px", height: "150px" }} className="custom-scroll cardDoctor">
                                    <i onClick={() => handleHastanePhotoDelete(index.image_url)} className="deleteFoto fa-solid fa-trash fa-xl mt-3 p-2"></i>
                                    <Card.Img
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        src={index.image_url}
                                        alt="Avatar"
                                        className="image"
                                    />
                                </Card>
                            </Col>
                    </>
                )
            })}
            </Row> 
            <div className='d-flex justify-content-center mt-1'>
                <HastanePhotoPagination postPerPage={postPerPage} totalPost={doctorBranchPhoto.length} paginate={paginate} />
            </div>
        </>

    )
}

export default DoctorTraitmentPhotoList;