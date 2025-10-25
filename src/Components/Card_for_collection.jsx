import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card_for_collection = ({ card }) => {
    const { skillName, rating, price, image } = card;
    return (
        <div>
            <div className=' w-90 h-100 m-auto bg-gray-100 mt-10 shadow-xl p-5 rounded-xl'>
                <div className='space-y-4'>
                    <img className='w-80 h-45  object-cover rounded-xl' src={image} alt="" />
                    <div className='m-3'>
                        <h1>Name: {skillName}</h1>
                        <div>
                            <h1 className='flex gap-2 items-center my-2'>Rating:{[...Array(Math.round(rating))].map((_, index) => <FaStar className='text-orange-500' key={index} />)} ({rating}) </h1>
                        </div>
                        <h1>Price: {price}</h1>
                    </div>
                    <Link to={`/collection/${card.skillId}`} className='btn btn-success mt-3 flex m-auto w-30 text-white'>Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card_for_collection
