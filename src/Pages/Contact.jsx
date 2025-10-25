import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const submitData = (event) => {
      event.preventDefault();
      toast.success('Form submitted successfully!');
      event.target.reset();
    }
  return (
    <div>
      <div className='w-full h-130 my-15 mb-10 flex flex-col items-center justify-center p-10 max-md:w-full  '>
        <h1 className='text-center font-extrabold text-5xl underline'>Contact Us</h1>
        <form onSubmit={submitData} className='m-auto place-content-center'>
          <fieldset className="fieldset flex flex-col gap-4">
            <label className="label text-xl max-md:text-sm text-white font-bold">Name</label>
            <input type="text" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Name" name='name' required />
            <label className="label text-xl max-md:text-sm text-white font-bold">Email</label>
            <input type="email" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Enter your email" name='email' required />
            <label className="label text-xl max-md:text-sm text-white font-bold">Text</label>
            <textarea className="textarea w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Enter your message" name='message' required />
          </fieldset>
          <button className="btn btn-neutral mt-4 w-50 h-15 text-xl max-md:h-10 max-md:w-25">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Contact
