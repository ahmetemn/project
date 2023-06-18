import React from 'react';
import {Outlet} from "react-router-dom";
import  Header from "../Components/Header/Header"

import Footer from "../Components/Footer/Footer"
import Shorts from '../Components/Content/Shorts/Shorts';
export default function DashboardLayout({userClient}) {
  return (
    <div>

        <Header  userClient={userClient}/>
     
        <div>
      
        <Outlet />

         <Footer />


        </div>
    </div>
  )
}
