import React, { use } from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import { Navigate, useNavigate } from 'react-router-dom';

const CardData = fetch('/Course.json').then(res => res.json());
const Home = () => {
  const cardData = use(CardData);
  const navigate = useNavigate();
  const more = () => {
    navigate('/collection');
  }
  return (
    <div>
      <Hero />
      <div>
        <h1 className='text-center font-bold text-4xl mt-10'>Step By Step Grow Your Skill</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10 w-11/12 m-auto'>
          {
            cardData.slice(0, 6).map(card => <Card key={card.id} card={card} />)
          }
        </div>
        <button onClick={more} className='btn btn-primary mt-15 flex m-auto w-40 text-2xl h-18 rounded-2xl'> More</button>
      </div>
    </div>
  )
}

export default Home
