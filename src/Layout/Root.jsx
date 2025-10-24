import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Collection_Details from '../Pages/Collection_Details'
import UserInfo from '../Pages/UserInfo'

const Root = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     {/* <UserInfo/> */}

    </>
  )
}

export default Root
