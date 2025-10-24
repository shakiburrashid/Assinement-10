import React, { use, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Collection_Details = () => {
    const [DetailsData, setDetailsData] = useState({});
    const data = useLoaderData();
    const { id } = useParams();
    useEffect(() => {
        const detailsItem = data.find(item => item.skillId == id);
        setDetailsData(detailsItem)
    }, [data, id])
    const { skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image } = DetailsData;
    console.log(data, id, DetailsData)
    console.log(data, id)
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <div className=' w-250 max-md:w-80 '>
                <img className='w-220 rounded-xl m-auto' src={image} alt="" />
                <div className='pl-14 text-xl space-y-2 mt-5 max-md:text-xs max-md:pl-0 w-220 max-md:w-80'>
                    <h1 className='text-xl font-bold text-left '>Skill Name: {skillName} </h1>
                    <h1 className='text-left'>Provider Name: {providerName} </h1>
                    <h1 className='text-left'>Provider Email: {providerEmail} </h1>
                    <h1>Price: {price}</h1>
                    <h1>Rating: {rating}</h1>
                    <h1>Slots Available: {slotsAvailable}</h1>
                    <p className='w-150 text-left'>Description: {description}</p>
                    <Link to={`/collection`} className='btn btn-accent mt-3 flex m-auto w-30 text-white'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Collection_Details
