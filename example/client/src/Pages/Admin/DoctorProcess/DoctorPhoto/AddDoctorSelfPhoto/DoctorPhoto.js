import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DoctorSelfPhotoList from './DoctorSelfPhotoList';
import { Card } from "react-bootstrap"

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const DoctorPhoto = () => {
    const user = useSelector((state) => state.user.currentUser.id);
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [fileName, setFileName] = useState('');

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleFileChange = ({ fileList }) => {
        setFileList(fileList.map(file => ({ ...file, url: URL.createObjectURL(file.originFileObj) })));
        setSelectedFile(fileList.map(file => file.originFileObj));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (selectedFile.length > 0) {
            const formData = new FormData();
            selectedFile.forEach(file => {
                formData.append('file', file);
            });

            try {
                const response = await axios.post('http://localhost:3002/docktor/addphoto', formData);

                if (response.status === 200) {
                    const uploadedFileNames = response.data;
                    setFileName(uploadedFileNames);
                    console.log('Files uploaded successfully:', uploadedFileNames);

                    handleUpload(uploadedFileNames);
                } else {
                    console.error('Error uploading files:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        }

    };




    const handleUpload = async (uploadedFileNames) => {
        try {
            const fileNames = uploadedFileNames.fileNames; // Dosya adlarını al

            const uploadPromises = fileNames.map(async (fileName) => {
                const bodyData = {
                    userId: user,
                    image: '/photos/' + fileName,
                };

                try {
                    const response = await axios.post('http://localhost:3002/docktor/addimg', bodyData, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json; charset=UTF-8'
                        },
                    });
                    if (response.status === 200) {

                        alert("Added Photo Successful")
                        setSelectedFile([]);
                        setFileList([]);
                    }
                    if (response.status !== 200) {
                        throw new Error('Error uploading file: ' + response.statusText);
                    }
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            });

            await Promise.all(uploadPromises);
            console.log('All files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };



    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>

            <span className='fw-bold px-1' style={{ color: "red" }}>Upload only 1 pieces photo ! </span>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Upload
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleFileChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                        </Form.Group>
                        <Button className='float-end' type="submit" >
                            Save
                        </Button>

                    </Form>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>


                    <div>

                        <DoctorSelfPhotoList />
                    </div>
                </Card.Body>
            </Card>





        </>
    );
};

export default DoctorPhoto;
