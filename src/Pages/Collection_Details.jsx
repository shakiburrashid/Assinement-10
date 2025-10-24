import React, { use, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Loader from './Loader';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify';

const Collection_Details = () => {
    const { loading } = use(AuthContext);

    const data = useLoaderData();
    const { id } = useParams();
    if (loading) {
        return <Loader />
    }
    const [DetailsData, setDetailsData] = useState({});
    // const {loading} = use(AuthContext);
    useEffect(() => {
        const detailsItem = data.find((item) => item.skillId == id);
        setDetailsData(detailsItem)
    }, [data, id])
    const { skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image } = DetailsData;
    const submitData = (event) => {
    event.preventDefault();
    toast.success('Form submitted successfully!');
  }
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center my-12'>
                <div className=' w-250 max-md:w-80 '>
                    <img className='w-220 rounded-xl m-auto' src={image} alt="" />
                    <div className='pl-14 text-xl space-y-2 mt-5 max-md:text-xs max-md:pl-0 w-220 max-md:w-80'>
                        <h1 className='text-xl font-bold text-left '>Skill Name: {skillName} </h1>
                        <h1 className='text-left'>Provider Name: {providerName} </h1>
                        <h1 className='text-left'>Provider Email: {providerEmail} </h1>
                        <h1>Price: {price}</h1>
                        <h1 className='flex gap-2 items-center'>Rating: ({rating})</h1>
                        <h1>Slots Available: {slotsAvailable}</h1>
                        <p className='w-150 text-left'>Description: {description}</p>
                        <Link to={`/collection`} className='btn btn-accent mt-3 flex m-auto w-30 text-white'>Back</Link>
                    </div>
                </div>
            </div>
            
            <div className='w-full h-110 mt-15 flex flex-col items-center justify-center p-10 bg-linear-to-r from-blue-500 to-purple-600 max-md:w-full  '>
                <h1 className='text-center font-extrabold text-5xl'>Book Session</h1>
                <form onSubmit={submitData} className='m-auto place-content-center'>
                    <fieldset className="fieldset flex flex-col gap-4">
                        <label className="label text-xl max-md:text-sm text-white font-bold">Name</label>
                        <input type="text" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Name" name='name' required />
                        <label className="label text-xl max-md:text-sm text-white font-bold">Email</label>
                        <input type="email" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Enter your email" name='email' required />
                    </fieldset>
                    <button className="btn btn-neutral mt-4 w-50 h-15 text-xl max-md:h-10 max-md:w-25">Submit</button>
                </form>
            </div>
            <ToastContainer/>
            <Footer />
        </>
    )
}

export default Collection_Details
