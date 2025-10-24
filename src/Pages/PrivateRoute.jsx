import React, { use } from 'react'
import Collection_Details from './Collection_Details'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from './Loader'

const PrivateRoute = ({ children, ab }) => {
  const { user, loading } = use(AuthContext)
  const location = useLocation();

  if (loading) {
    return <Loader />
  }


  if (user && user?.email) {
    return children;
  }


  return <Navigate state={location.pathname} to="/auth/login"></Navigate>


}

export default PrivateRoute
