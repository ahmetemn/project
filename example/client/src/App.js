
import './App.css';

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter ,
  Navigate
 
} from "react-router-dom";
import DashboardLayout from './Layout/DashboardLayout';
import AuthLayout from './Layout/AuthLayout';
import Login from "./Pages/Login/Login"
import Signin from "./Pages/Signin/Signin";
import Hospital from "./Pages/Hospital/Hospital";
import Doctors from "./Pages/Doctors/Doctors";
import Contact from "./Pages/Contact/Contact";
import HospitalDetail from './DetailPages/HospitalDetail/HospitalDetail';
import DoctorDetail from './DetailPages/DoctorDetail/DoctorDetail';
import Branches from './Pages/Branches/Branches';
import ErrorPage from "./Pages/404Page/404Page";
import jwt_decode from "jwt-decode";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import Admin from './Pages/Admin/Admin';
import { useState , useEffect } from 'react';
import BranchesDetail from './DetailPages/BranchesDetail/BranchesDetail';

function App() {


  const accessToken = useSelector((state) => state.user.currentUser?.details.accessToken);
  const [admin, setAdmin] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [hastane, setIsHastane] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    if (accessToken ) {
      const decodedToken = jwt_decode(accessToken);
     const  isUser = decodedToken?.role === "client";
     const  isAdmin = decodedToken?.role === "admin";
     const  isDoctor = decodedToken?.role === "docktor";
     const  isHastane = decodedToken?.role === "hastane";
     setDoctor(isDoctor)
     setAdmin(isAdmin);
     setIsHastane(isHastane);
     setUser(isUser)
     setLoading(false);
    }else {
      setAdmin(false);
      setLoading(false);
    }
  }, [accessToken ] )
 if (isLoading) {
  return (

    <div className='vh-100 d-flex justify-content-center align-items-center '>
      
    <Spinner   animation="border" role="status">
   
    </Spinner>

    
    </div>
  );
}

  return (

 
<>
    <BrowserRouter>

    
      <Routes>

        <Route path="/" element={<DashboardLayout userClient={user} />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='hospital' element={<Hospital />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path="contact" element={<Contact />} />
          <Route path='hospitaldetail/:id' element={<HospitalDetail />}  user={user}/>
          <Route path='doctors/:id' element={<DoctorDetail user={user} />} />
          <Route path='branches' element={<Branches />} />
          <Route path='branches/:name' element={<BranchesDetail />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Route>

        <Route path= '/admin'   element= { admin || doctor  || hastane? <Admin admin={admin} doctor={doctor} hastane={hastane} /> : <Navigate to="/auth/login" />  } />
        <Route path="auth" element={<AuthLayout />}>
          <Route path='login'  element= { user ? <Navigate to="/" /> : <Login />}  />
          <Route path='signin'  element= { <Signin />}  />
        </Route>
      </Routes>
    </BrowserRouter>



</>
  );
}

export default App;
