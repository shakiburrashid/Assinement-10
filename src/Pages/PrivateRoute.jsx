import React, { use } from 'react'
import Collection_Details from './Collection_Details'
import { AuthContext } from '../Context/AuthProvider'
import Login from '../Components/Login'

const PrivateRoute = () => {
  const { user } = use(AuthContext) 

  if (user && user.email) {
    return <Collection_Details />
  } else {
    return <Login />
  }

}

export default PrivateRoute
