import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState('');
  const { RegisterAccount, setUser } = use(AuthContext);
  const handleRegistation = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    RegisterAccount(email, password).then((result) => {
      const user = result.user
      updateProfile(user, { displayName: name, photoURL: photo });
      console.log(user);
      setUser(user);
    })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError("Email Already in use, Please add a new email");
      });
  }

  const [showPassword, setShowPassword] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  }




  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 mt-10">
      <div className="card bg-base-100 w-200 h-200  shrink-0 shadow-xl ">
        <div className="card-body">
          <h1 className='font-bold text-center text-4xl italic'>Register your account</h1>
          <form onSubmit={handleRegistation} className="flex justify-center items-center mt-4">
            <fieldset className="fieldset w-150 h-160 place-content-center flex flex-col gap-3">
              {/* Name */}
              <label className="label text-xl font-bold">Name</label>
              <input type="text" name='name' className="input w-150 h-13  outline-none bg-gray-100" placeholder="Name" />
              {/* Photo URL */}
              <label className="label text-xl font-bold">Photo URL</label>
              <input type="text" name='photo' className="input w-150 h-13  outline-none bg-gray-100" placeholder="Photo URL" />
              {/* Email */}
              <label className="label text-xl font-bold">Email</label>
              <input type="email" name='email' className="input w-150 h-13  outline-none bg-gray-100" placeholder="Email" />
              {/* Password */}
              <label className="label text-xl font-bold">Password</label>
              <div className='relative'>
                <input name='password' type={showPassword ? "text" : "password"} className='input w-150 h-13 outline-none bg-gray-100' placeholder="Password" />
                <button type='button' className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointerhohoiuyho" onClick={passwordShow}>
                  {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                </button>
              </div>
              <label className="label text-xl flex items-center gap-2">


                <input type="checkbox" className="checkbox text-xl" />
                Accept Terms & Conditions
              </label>
              <button type='submit' className="btn btn-neutral mt-4 w-150 h-13 ">Login</button>
              <Link to={'/auth/login'} className='text-xl text-center'>Already have An Account ? <span className='text-red-500 link-hover cursor-pointer font-bold'>Login</span></Link>
              <p className='text-red-500 text-center'>{error}</p>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
