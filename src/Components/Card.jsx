import React from 'react'
import { FaStar } from 'react-icons/fa';

const Card = ({ card }) => {
    const { skillName, rating, price, image } = card;
    console.log(rating)
    return (
        <div>
            <div className='w-90 h-100 m-auto bg-gray-100 mt-10 shadow-xl p-5 rounded-xl'>
                <div className='space-y-4'>
                    <img className='w-80 h-50  object-cover rounded-xl' src={image} alt="" />
                    <div className='m-3'>
                        <h1>Name: {skillName}</h1>
                        <div>
                            <h1 className='flex gap-2 items-center my-2'>Rating:{[...Array(Math.round(rating))].map((_, index) => <FaStar className='text-orange-500' key={index} />)} ({rating}) </h1>
                            {/* <div className='flex my-2 gap-1'>
                                {[...Array(Math.round(rating))].map((_, index) => <FaStar className='text-orange-500' key={index} />)} {(rating)}
                            </div> */}
                        </div>

                        <h1>Price: {price}</h1>
                    </div>
                    <button className='btn btn-success mt-3 flex m-auto w-30 text-white'>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card
