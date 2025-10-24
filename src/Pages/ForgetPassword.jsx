import React, { use } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

const ForgetPassword = () => {
  const { user, resetPassword } = use(AuthContext)

  const passwordReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value

    console.log(email)
    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent')
      })
      .catch(() => { toast.error('Email not send!') })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 mt-10">
      <div className="card bg-base-100  shrink-0 shadow-xl max-md:h-165">
        <div className="card-body max-md:w-80 max-md:h-150">
          <h1 className='font-bold text-center text-4xl italic max-md:text-xl'>Reset Your Password</h1>
          <form onSubmit={passwordReset} className="flex justify-center items-center mt-2">
            <fieldset className="fieldset gap-3">
              {/* Email */}
              <label className="label text-sm md:text-xl font-bold">Email</label>
              <input type="email" name='email' className="input w-70 h-10 outline-none bg-gray-100 md:w-150 md:h-13 " placeholder="Email" />
              <button type='submit' className="btn btn-success mt-4 ">Send Email</button>
              <ToastContainer />
            </fieldset>
          </form>

          <Link to={'/auth/login'} className="btn btn-neutral mt-2 w-40"><IoMdArrowRoundBack size={25} /></Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
