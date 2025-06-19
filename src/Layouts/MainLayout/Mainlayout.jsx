import React from 'react'
import Webnav from '../../Components/Webnavbar/Webnav';
import Footer from "../../Components/Footer/Footer"
import { Outlet } from 'react-router-dom';
import WhatsappFloatingButton from "../../Components/WhatsappFloatingButton/WhatsappFloatingButton";
const Mainlayout = () => {
  return (
    <>
    <Webnav />
    <Outlet/>
    <WhatsappFloatingButton />
    <Footer/>
    </>
  )
}

export default Mainlayout