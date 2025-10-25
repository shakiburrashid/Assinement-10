import React, { use } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const { user } = use(AuthContext);
  return (
    <div className='h-150 place-content-center'>
      <div className=' flex flex-col items-center  bg-gray-100 md:w-150 max-md:h-110 max-md:w-80 m-auto py-6 px-3 rounded-xl shadow-xl'>
        <div className='flex flex-col justify-center items-center  gap-5'>
          <h1 className='text-center font-bold text-4xl max-md:text-2xl'>Your Profile</h1>
          <div className='flex items-center h-50 justify-center gap-10  max-md:flex-col max-md:items-center max-md:justify-center max-md:mt-20'>
            <div>
              <img className='rounded-full w-30 h-30 md:w-40 md:h-40' src={user && user?.photoURL} alt="" />
            </div>
            <div className='space-y-4 '>
              <p className='max-md:text-sm'><span className='font-semibold'>Name:</span> {user && user?.displayName}</p>
              <p className='max-md:text-sm'><span className='font-semibold'>Email:</span> {user && user?.email}</p>
              <Link to={'/userinfo/update'} className='btn btn-info max-md:text-sm'>Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
