import React, { use } from 'react'
import Hero from '../Components/Hero'
import Card_for_home from '../Components/Card_for_home'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CardData = fetch('/Course.json').then(res => res.json());
const Home = () => {
  const cardData = use(CardData);
  const navigate = useNavigate();
  const more = () => {
    navigate('/collection');
  }
  const submitData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    toast.success('Form submitted successfully!');
  }
  return (
    <div>
      <Hero />
      <div>
        <h1 className='text-center font-bold text-4xl mt-10'>Step By Step Grow Your Skill</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10 w-11/12 m-auto'>
          {
            cardData.slice(0, 6).map(card => <Card_for_home key={card.skillId} card={card} />)
          }
        </div>
        <button onClick={more} className='btn btn-primary mt-15 flex m-auto w-40 text-2xl h-18 rounded-2xl'> More</button>
      </div>
      <div className=''>
        <ToastContainer />
        <div className='w-full h-110 mt-15 flex flex-col items-center justify-center p-10 bg-linear-to-r from-blue-500 to-purple-600 max-md:w-full  '>
          <h1 className='text-center font-extrabold text-5xl'>Book Session</h1>
          <form onSubmit={submitData} className='m-auto place-content-center'>
            <fieldset className="fieldset flex flex-col gap-4">
              <label className="label text-xl max-md:text-sm text-white font-bold">Name</label>
              <input type="text" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Name" name='name' required />
              <label className="label text-xl max-md:text-sm text-white font-bold">Email</label>
              <input type="email" className="input w-200 h-15 text-xl max-md:w-80 max-md:h-10 max-md:text-" placeholder="Enter your email" name='email' required  />
            </fieldset>
            <button className="btn btn-neutral mt-4 w-50 h-15 text-xl max-md:h-10 max-md:w-25">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
