import React, { use } from 'react'
import Card_for_collection from '../Components/Card_for_collection';




const CardData1 = fetch('Course.json').then(res => res.json());

const Collection = () => {
  const cardData = use(CardData1);
  console.log(cardData)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-10 w-10/12 m-auto'>
      {cardData.map(card => <Card_for_collection key={card.skillId} card={card} />)}
    </div>
  )
}

export default Collection
