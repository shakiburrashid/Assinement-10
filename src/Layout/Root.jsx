import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Collection_Details from '../Pages/Collection_Details'

const Root = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     {/* <Collection_Details/> */}

    </>
  )
}

export default Root
