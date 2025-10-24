import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const BookSession = () => {
    const submitData = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        toast.success('Form submitted successfully!');
    }
    return (
        <div>
            <div className='w-full h-110 mt-15 flex flex-col items-center justify-center p-10 bg-linear-to-r from-blue-500 to-purple-600 max-md:w-full  '>
                <h1 className='text-center font-extrabold text-5xl'>Book Session</h1>
                <form onSubmit={submitData} className='m-auto place-content-center'>
                    <fieldset className="fieldset flex flex-col gap-4">
                        <label className="label text-xl max-md:text-sm text-white font-bold">Name</label>
                        <input type="text" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-lg:w-150" placeholder="Name" name='name' required />
                        <label className="label text-xl max-md:text-sm text-white font-bold">Email</label>
                        <input type="email" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-lg:w-150" placeholder="Enter your email" name='email' required />
                    </fieldset>
                    <button className="btn btn-neutral mt-4 w-50 h-15 text-xl max-md:h-10 max-md:w-25">Submit</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default BookSession
