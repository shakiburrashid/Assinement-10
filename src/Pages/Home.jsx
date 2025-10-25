import React, { use } from 'react'
import Hero from '../Components/Hero'
import Card_for_home from '../Components/Card_for_home'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';
import { AuthContext } from '../Context/AuthProvider';
import BookSession from '../Components/BookSession';

const CardData = fetch('/Course.json').then(res => res.json());
const Home = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loader />;
  }
  const cardData = use(CardData);
  const navigate = useNavigate();
  const more = () => {
    navigate('/collection');
  }

  return (
    <div>
      <Hero />
      <div>
        <h1 className='animate__animated animate__backInLeft forheadline underline  text-center font-bold text-4xl mt-10'>Step By Step Grow Your Skill</h1>
        <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5 my-10 w-11/12 m-auto'>
          {
            cardData.slice(0, 6).map(card => <Card_for_home key={card.skillId} card={card} />)
          }
        </div>
        <button onClick={more} className='btn btn-primary mt-15 flex m-auto w-40 text-2xl h-18 rounded-2xl'> More</button>
      </div>
      <div className=''>
        <ToastContainer />
        <BookSession />
      </div>
    </div>
  )
}

export default Home
