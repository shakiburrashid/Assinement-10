import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Collection_Details from '../Pages/Collection_Details'
import UserInfo from '../Pages/UserInfo'
import Loader from '../Pages/Loader'

const Root = () => {
  const { state } = useNavigate()
  return (
    <>
      <Navbar />
      {state == 'loading' ? <Loader /> : <Outlet />}
      <Footer />
      {/* <UserInfo/> */}

    </>
  )
}

export default Root
