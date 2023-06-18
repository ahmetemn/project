import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

const DoctorBranchModal = () => {
  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
  const user = useSelector((state) => state.user.currentUser.id);
  const dispatch = useDispatch()
  const [branches, setBranches] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    try {
        fetch("http://localhost:3002/docktor/hastanebrans",
            {
                method: "POST",
                body: JSON.stringify({ userId: user }),
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-type": "application/json; charset=UTF-8"
                },
            })
            .then(response => response.json())
            .then(data => setBranches(data.data))
    } catch (error) {
        console.log(error)
    }
} , [])


  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      console.log({ ...values, branches_id: selectedId });
      try {
        const res = await fetch('http://localhost:3002/docktor/addbranches', {
          method: 'POST',
          body: JSON.stringify({ userId: user, ...values, branches_id: selectedId }),
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json; charset=UTF-8',  
          },
        });

        if (res.status === 200) {
          alert('Added Successful.');
          dispatch({ type: 'SET_ADDED'});
        }
        if (res.status === 401) {
          alert('Yorum Yapılamadı.');
        }
      } catch (error) {
        console.log(error);
      }
    },
  });





  const handleBranchChange = (e) => {
    const branchId = e.target.value;
    setSelectedId(branchId);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Branch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Select
            aria-label="Please Select HospitalName..."
            name="name"
            onChange={(e) => {
              formik.handleChange(e);
              handleBranchChange(e);
            }}
          >
            {branches?.map((index) => (
              <option value={index.id} key={index.id}>
                {index.name}
              </option>
            ))}
          </Form.Select>
          <Button className="mt-2 fw-bold float-end" type="submit" variant="primary">
            Add New Branch
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default DoctorBranchModal;
