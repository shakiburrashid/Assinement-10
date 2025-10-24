import React, { use } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const {user} = use(AuthContext);
  return (
    <div className='flex flex-col items-center h-150'>
      <h1 className='text-center mt-20 font-bold text-4xl '>Your Profile</h1>
      <div className='flex items-center h-50 justify-center gap-10 max-md:flex-col max-md:items-center max-md:justify-center max-md:mt-20'>
        <div>
          <img className='rounded-full w-30 h-30' src={user && user?.photoURL} alt="" />
        </div>
        <div className='space-y-4 max-md:text-center'>
          <p>Name: {user && user?.displayName}</p>
          <p>Email: {user && user?.email}</p>
        <Link to={'/userinfo/update'} className='btn'>Update Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
