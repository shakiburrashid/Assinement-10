import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 mt-10">
      <div className="card bg-base-100 w-200 h-200  shrink-0 shadow-xl ">
        <div className="card-body">
          <h1 className='font-bold text-center text-4xl italic'>Register your account</h1>
          <form className="flex justify-center items-center mt-4">
            <fieldset className="fieldset w-150 h-160 place-content-center flex flex-col gap-3">
              {/* Name */}
              <label className="label text-xl font-bold">Name</label>
              <input type="text" className="input w-150 h-13  outline-none bg-gray-100" placeholder="Name" />
              {/* Photo URL */}
              <label className="label text-xl font-bold">Photo URL</label>
              <input type="text" className="input w-150 h-13  outline-none bg-gray-100" placeholder="Photo URL" />
              {/* Email */}
              <label className="label text-xl font-bold">Email</label>
              <input type="email" className="input w-150 h-13  outline-none bg-gray-100" placeholder="Email" />
              {/* Password */}
              <label className="label text-xl font-bold">Password</label>
              <input type="password" className="input w-150  h-13 outline-none bg-gray-100" placeholder="Password" />
              <label className="label text-xl flex items-center gap-2">
                <input type="checkbox" className="checkbox text-xl" />
                Accept Terms & Conditions
              </label>
              <button className="btn btn-neutral mt-4 w-150 h-13 ">Login</button>
          <Link to={'/auth/login'} className='text-xl text-center'>Already have An Account ? <span className='text-red-500 link-hover cursor-pointer font-bold'>Login</span></Link>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
