import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="card bg-base-100 w-200 h-150  shrink-0 shadow-xl ">
        <div className="card-body">
          <h1 className='font-bold text-center text-4xl italic'>Login your account</h1>
          <form className="flex justify-center items-center mt-4">
            <fieldset className="fieldset w-150 h-100 place-content-center flex flex-col gap-3">
              <label className="label text-xl font-bold">Email</label>
              <input type="email" className="input w-150 h-13  outline-none bg-gray-100" placeholder="Email" />
              <label className="label text-xl font-bold">Password</label>
              <input type="password" className="input w-150  h-13 outline-none bg-gray-100" placeholder="Password" />
              <div><a className="link link-hover text-xl">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4 w-150 h-13 ">Login</button>
            </fieldset>
          </form>
            <Link to={'/auth/register'} className='text-xl text-center'>Dont’t Have An Account ? <span className='text-red-500 link-hover cursor-pointer font-bold'>Register</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
