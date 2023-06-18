import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
const DoctorPatientList = () => {
 
    const [patient, setPatient] = useState([]);
   

    const user = useSelector((state) => state.user.currentUser.id);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    useEffect(() => {
        try {
            fetch("http://localhost:3002/docktor/hastalarim",
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
    } , [patient])
    return (

        <>
            <Table striped bordered hover size="sm"
                style={{ boxShadow: " rgb(106, 90, 205 ,0.8) 0px 13px 27px -5px, rgba(0.2, 0.5, 0.5, 1) 0px 8px 16px -8px", }}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Patient  Name </th>
                        <th style={{ fontSize: "19px", color: "rgb(30,144,255)" }} >Patient E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patient?.map((index) => {

                            return (
                                <tr >
                                    <td key={index.id}>
                                        <i style={{ fontWeight: "600" }}>{index.username}</i></td>
                                    <td> <i style={{ fontWeight: "600" }}>{index.email}</i></td>
                                    
                                </tr>
                            )

                        })
                    }


                </tbody>


            </Table>
        
        </>


    )
}

export default DoctorPatientList;