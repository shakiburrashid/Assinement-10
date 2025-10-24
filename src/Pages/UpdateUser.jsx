import React, { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../Context/AuthProvider'

const UpdateUser = () => {
    const { user, setUser, updateProfie } = use(AuthContext)
    const updateInfo = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        updateProfie({
            displayName: name, photoURL: photo
        }).then(() => {
            setUser(user)
            toast.success("Suucessfully Updated!")
        }).catch((error) => {
           
        });


    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 mt-10">
            <div className="card bg-base-100  shrink-0 shadow-xl max-md:h-165">
                <div className="card-body max-md:w-80 max-md:h-150">
                    <h1 className='font-bold text-center text-4xl italic max-md:text-xl'>Update your account</h1>
                    <form onSubmit={updateInfo} className="flex justify-center items-center mt-2">
                        <fieldset className="fieldset gap-3">
                            {/* Name */}
                            <label className="label text-sm md:text-xl font-bold">Name</label>
                            <input type="text" name='name' className="input w-70 h-10 outline-none bg-gray-100 md:w-150 md:h-13 " placeholder="Name" />
                            {/* Photo URL */}
                            <label className="label text-sm md:text-xl font-bold">Photo URL</label>
                            <input type="text" name='photo' className="input w-70 h-10 outline-none bg-gray-100 md:w-150 md:h-13 " placeholder="Photo URL" />
                            <button type='submit' className="btn btn-neutral mt-4 ">Save Information</button>
                            <ToastContainer />
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default UpdateUser
