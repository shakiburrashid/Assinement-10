import React, { use } from 'react'
import Card_for_collection from '../Components/Card_for_collection';
import { AuthContext } from '../Context/AuthProvider';
import Loader from './Loader';




const CardData1 = fetch('/Course.json').then(res => res.json());

const Collection = () => {
  const { loading } = use(AuthContext); 
  if (loading) {
    return <Loader />;
  }
  const cardData = use(CardData1);
  return (
    <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3 max-lg:gap-5 my-10 w-11/12 m-auto'>
      {cardData.map(card => <Card_for_collection key={card.skillId} card={card} />)}
    </div>
  )
}

export default Collection
