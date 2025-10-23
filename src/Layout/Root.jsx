import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'

const Root = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Root
