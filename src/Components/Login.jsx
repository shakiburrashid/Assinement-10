import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [error, setError] = useState('');
  const { LoginAccount, setUser, loginAccount_Google} = use(AuthContext);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    loginAccount_Google()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Google Login Successful');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error('Google Login Failed');
      });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one uppercase letter, lowercase letter, and be at least 6 characters long");
      return;
    }
    LoginAccount(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Login Successful');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError("Invalid Email or Password");
        toast.error("Invalid Email or Password");
      });


  }
  const [showPassword, setShowPassword] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 mt-10">
      <div className="card bg-base-100  shrink-0 shadow-xl max-md:h-165">
        <div className="card-body max-md:w-80 max-md:h-150">
          <h1 className='font-bold text-center text-4xl italic max-md:text-xl'>Register your account</h1>
          <form onSubmit={handleLogin} className="flex justify-center items-center mt-2">
            <fieldset className="fieldset gap-3">

              {/* Email */}
              <label className="label text-sm md:text-xl font-bold">Email</label>
              <input type="email" name='email' required className="input w-70 h-10 outline-none bg-gray-100 md:w-150 md:h-13 " placeholder="Email" />
              {/* Password */}
              <label className="label text-sm md:text-xl font-bold">Password</label>
              <div className='relative'>
                <input name='password' required type={showPassword ? "text" : "password"} className='input w-70 h-10 outline-none bg-gray-100 md:w-150 md:h-13 ' placeholder="Password" />
                <button type='button' className="absolute top-2 left-62 cursor-pointer md:left-140 md:top-1/2 md:transform md:-translate-y-1/2" onClick={passwordShow}>
                  {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                </button>
              </div>
              <Link to={'/pass-reset'} className='text-sm link-hover cursor-pointer'>Forget Password?</Link>
              <button type='submit' className="btn btn-neutral mt-4 w-70 m-auto">Register</button>

              {/* w-150 h-13 */}
              <p className='text-red-500 text-center text-xl'>{error}</p>
              <ToastContainer />
            </fieldset>
          </form>
          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-150 max-md:w-70 max-md:h-10 md:mb-5">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

          <Link to={'/auth/register'} className='text-xl max-md:text-sm max-md:mt-3 text-center'>Don't Have An Account ? <span className='text-red-500 link-hover cursor-pointer font-bold'>Register</span></Link>
        </div>

      </div>
    </div>
  )
}

export default Login




