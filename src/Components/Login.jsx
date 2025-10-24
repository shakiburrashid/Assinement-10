import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [error, setError] = useState('');
  const { LoginAccount, setUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginAccount(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success('Login Successful');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError("Invalid Email or Password");
        toast.error("Invalid Email or Password");
      });
  }
  const [showPassword, setShowPassword] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="card bg-base-100 w-200 h-150  shrink-0 shadow-xl ">
        <div className="card-body">
          <h1 className='font-bold text-center text-4xl italic'>Login your account</h1>
          <form onSubmit={handleLogin} className="flex justify-center items-center mt-4">
            <fieldset className="fieldset w-150 h-100 place-content-center flex flex-col gap-3">
              <label className="label text-xl font-bold">Email</label>
              <input name='email' required type="email" className="input w-150 h-13  outline-none bg-gray-100" placeholder="Email" />
              <label className="label text-xl font-bold">Password</label>
              <div className='relative'>
                <input name='password' required type={showPassword ? "text" : "password"} className="input w-150 h-13 outline-none bg-gray-100" placeholder="Password" />
                <button type='button' className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={passwordShow}>
                  {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                </button>
              </div>
              <div><a className="link link-hover text-xl">Forgot password?</a></div>
              <button type='submit' className="btn btn-neutral mt-4 w-150 h-13 ">Login</button>
            </fieldset>
          </form>
          <Link to={'/auth/register'} className='text-xl text-center'>Dont’t Have An Account ? <span className='text-red-500 link-hover cursor-pointer font-bold'>Register</span></Link>
          <p className='text-red-500 text-center'>{error}</p>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Login
