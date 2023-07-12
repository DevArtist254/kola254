import React from 'react';
import Card from './card.comp';

function Cards({products}) {
  return (
    <div className='cards'>
      {products.map((product) => (
        <Card key={product._id} data={product} />
      ))}
    </div>
  );
}

export default Cards;
