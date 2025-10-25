import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Loader from '../Pages/Loader'


const Root = () => {
  const { state } = useNavigate()
  return (
    <>
      <Navbar />
      {state == 'loading' ? <Loader /> : <Outlet />}
      <Footer />
      
    </>
  )
}

export default Root
