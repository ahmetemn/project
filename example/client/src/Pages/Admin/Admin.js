import React from 'react'
import {
    UserOutlined,
    PictureOutlined,
    InfoCircleOutlined,
    OrderedListOutlined,
    ReconciliationOutlined,
    FileImageOutlined, q
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import "./Admin.css";
import AdminInfo from './HospitalProcess/AdminInfo';
import HastanePhoto from "./HospitalProcess/HastanePhoto"
import { useSelector } from 'react-redux';
import DoctorBranchTable from './DoctorProcess/DoctorBranchTable';
import DoctorPatientList from './DoctorProcess/DoctorPatientList';
import AdminDoctorTable from './AdminProcess/AdminDoctorTable';
import AdminHastaneTable from './AdminProcess/AdminHastaneTable';
import HastaneBranchTable from './HospitalProcess/HastaneBranchTable';
import HastanePatientTable from './HospitalProcess/HastanePatientTable';
import HeaderModal from '../../Components/Header/HeaderModal/HeaderModal';
import DoctorInfo from './DoctorProcess/DoctorInfo';
import Modal from 'antd/es/modal/Modal';
import { DoctorMessage } from './DoctorMessage';
import { HastaneMessage } from './HastaneMessage';
import AddBranchPhoto from './HospitalProcess/AddBranchPhoto/AddBranchPhoto';
import DoctorTraitmentPhoto from './DoctorProcess/DoctorPhoto/AddDoctorTraitmentPhoto/DoctorTraitmentPhoto';
import DoctorPhoto from './DoctorProcess/DoctorPhoto/AddDoctorSelfPhoto/DoctorPhoto';
import SubBranchPhoto from './HospitalProcess/SubBranchPhoto/SubBranchPhoto';
import HospitalDoctorTable from './HospitalProcess/HospitalDoctorTable';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Admin = ({ admin, hastane, doctor }) => {
    const [showed, setShowed] = useState(false);
    const handelClosed = () => setShowed(false)
    const handleShowed = () => setShowed(true);
    const user = useSelector((state) => state.user.currentUser)
    const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const handleItemClick = ({ keyPath ,key }) => {
        setSelectedItem1(keyPath[1])
        setSelectedItem(key);
    };



    const handleLogout = () => {
        // Oturumu kapatma işlemini gerçekleştir

        fetch("http://localhost:3002/auth/logout", {
            method: "POST"
        })

        navigate("/auth/login")
        localStorage.removeItem('persist:root');
        // Daha fazla oturum işlemlerini yapmak isterseniz, burada diğer işlemleri de yapabilirsiniz.
        window.location.reload()
    };

    return (

        <>
            <Layout className="w-100 vh-100">

                <Sider trigger={null} collapsible collapsed={collapsed}>


                    <div className='p-1' style={{ color: "white" }}>
                        <h5 className='mt-2 text-center' style={{ color: "white" }}> Healer Go Turkey</h5>

                    </div>


                    <Menu
                        onClick={handleItemClick}
                        className=''
                        theme="dark"
                        mode="inline" >

                        {
                            admin ? <>

                                <Menu.Item className='fw-bold  mt-1' style={{ fontSize: "15px" }} icon={<OrderedListOutlined style={{ fontSize: "18px" }} />} key="Item3">Doktor Listesi</Menu.Item>
                                <Menu.Item className='fw-bold  mt-1' style={{ fontSize: "15px" }} icon={<ReconciliationOutlined style={{ fontSize: "18px" }} />} key="Item4">Hastane Listesi</Menu.Item>

                            </>

                                : <>

                                    {
                                        doctor ? <>

                                            <SubMenu icon={<UserOutlined style={{ fontSize: "18px" }} />} 
                                                key="Info" title="Info" className='fw-bold  mt-1' style={{ fontSize: "15px" }}>
                                                <Menu.Item icon={<InfoCircleOutlined style={{ fontSize: "18px" }} />} 
                                                    key="Doctor Info">
                                                    My info</Menu.Item>
                                            </SubMenu>
                                            <SubMenu icon={<FileImageOutlined style={{ fontSize: "18px" }} />} key="Photos" title="Photos" className='fw-bold  mt-1' style={{ fontSize: "15px" }}>
                                                <Menu.Item icon={<PictureOutlined style={{ fontSize: "18px" }} />} key="Doctor Photo">     My Photo</Menu.Item>
                                                <Menu.Item icon={<PictureOutlined style={{ fontSize: "18px" }} />} key="Upload Traitment Photos">    My Traitment Photo</Menu.Item>
                                            </SubMenu>
                                            <Menu.Item  className='fw-bold  mt-1' style={{ fontSize: "15px" }}  key="My Branches" icon={<OrderedListOutlined style={{ fontSize: "18px" }} />} >My Branches</Menu.Item>
                                            <Menu.Item className='fw-bold  mt-1' style={{ fontSize: "15px" }} key="My Patients">
                                                <i class="fa-solid fa-hospital-user px-1" style={{ fontSize: "18px" }} ></i>
                                                My Patients
                                            </Menu.Item>
                                        </>
                                            : <>
                                                <SubMenu icon={<UserOutlined style={{ fontSize: "18px" }} />} key="subMenu" title="Info" className='fw-bold  mt-1' style={{ fontSize: "15px" }}>
                                                    <Menu.Item icon={<InfoCircleOutlined style={{ fontSize: "18px" }} />} key="MyInfo">
                                                        My info</Menu.Item>


                                                </SubMenu>

                                                <SubMenu icon={<FileImageOutlined style={{ fontSize: "18px" }} />} key="photo" title="Photos" className='fw-bold  mt-1' style={{ fontSize: "15px" }}>

                                                    <Menu.Item icon={<PictureOutlined style={{ fontSize: "18px" }} />} key="Hospital Upload Photo">Hospital Photo</Menu.Item>

                                                    <Menu.Item icon={<PictureOutlined style={{ fontSize: "18px" }} />} key="Hospital Upload Branch Photo">Branch  Photo</Menu.Item>

                                                    <Menu.Item icon={<PictureOutlined style={{ fontSize: "18px" }} />} key="Hospital Upload SubBranch Photo">Sub Branch Photo</Menu.Item>

                                                </SubMenu>
                                                <SubMenu icon={<InfoCircleOutlined style={{ fontSize: "18px" }} />} key="subMenuHospital" title=" Hospital Detail" className='fw-bold  mt-1' style={{ fontSize: "15px" }}>
                                                    <Menu.Item key="Hospital Doctors">
                                                        <i class="fa-solid fa-user-doctor px-1" style={{ fontSize: "18px" }} />
                                                        Doctors
                                                    </Menu.Item>
                                                    <Menu.Item key="Hospital Branches">
                                                        <i class="fa-solid fa-code-branch px-1" style={{ fontSize: "18px" }}></i>
                                                        Branches</Menu.Item>
                                                    <Menu.Item key="Hospital Patients">
                                                        <i class="fa-solid fa-bed-pulse px-1" style={{ fontSize: "18px" }}></i>
                                                        Patients</Menu.Item>
                                                </SubMenu>
                                            </>
                                    }

                                </>
                        }
                    </Menu>
                </Sider>
                <Layout >
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-bars"></i>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <span className=' fw-bold ' style={{ position: "absolute" }}>Hoşgeldiniz Sayın:  <span style={{ color: "#214fa0" }}>{user.username}</span></span>
                        {
                            admin ? <span> </span> : hastane ? <HastaneMessage /> : doctor ? <DoctorMessage /> : <span></span>
                        }

                        <Button onClick={handleLogout} variant="primary" style={{ position: "absolute", right: "0" }} className='m-2 px-2 mt-4  fw-bold '>
                            <i class="fa-solid fa-right-from-bracket" style={{ fontSize: "15px" }}></i>

                        </Button>

                    </Header>

                    <nav className='p-1 px-5' aria-label="breadcrumb">
                        <ol style={{ height: "100%" }} className="breadcrumb d-flex align-items-center">

                            <li className="breadcrumb-item mt-1 fw-bold"><a href="#" style={{ textDecoration: "none", color: "black" }}> <i class="fa-solid fa-house fa-xs"></i> Home</a></li>


                             { 
                                selectedItem1? <>
                                <li className="breadcrumb-item mt-1  fw-bold"><span style={{ textDecoration: "none", color: "black" }}>{selectedItem1}</span></li>
                                <li className="breadcrumb-item mt-1 gradient-text-breadCrumb fw-bold"><span style={{ textDecoration: "none", color: "black" }}>{selectedItem}</span></li>
                                </> 
                                :selectedItem?  <li className="breadcrumb-item mt-1 gradient-text-breadCrumb fw-bold"><span style={{ textDecoration: "none", color: "black" }}>{selectedItem}</span></li>
                                :<span></span>

                                    
                             }
                           

                        </ol>
                    </nav>

                    <Content

                        style={{
                            margin: '3px 5px',
                            padding: 14,
                            minHeight: 400,
                            background: colorBgContainer,
                        }}
                    >



                        {selectedItem === 'MyInfo' && <AdminInfo />}
                        {selectedItem === 'Hospital Upload Photo' && <HastanePhoto />}
                        {selectedItem === 'Item3' && <AdminDoctorTable />}
                        {selectedItem === 'Item4' && <AdminHastaneTable />}
                        {selectedItem === 'Hospital Doctors' && <HospitalDoctorTable />}
                        {selectedItem === 'Hospital Branches' && <HastaneBranchTable />}
                        {selectedItem === 'My Branches' && <DoctorBranchTable />}
                        {selectedItem === 'My Patients' && <DoctorPatientList />}
                        {selectedItem === 'Hospital Patients' && <HastanePatientTable />}
                        {selectedItem === 'Doctor Info' && <DoctorInfo />}
                        {selectedItem === 'Hospital Upload Branch Photo' && <AddBranchPhoto />}
                        {selectedItem === 'Doctor Photo' && <DoctorPhoto />}
                        {selectedItem === 'Upload Traitment Photos' && <DoctorTraitmentPhoto />}
                        {selectedItem === 'Hospital Upload SubBranch Photo' && <SubBranchPhoto />}
                    </Content>
                </Layout>
            </Layout>


            <Modal
                centered
                style={{ zIndex: 9500 }}
                size='lg'
                show={showed}
                onHide={handelClosed}
                backdrop="static"
                keyboard={false}
            >
                <HeaderModal />
            </Modal>

        </>
    )
}

export default Admin;