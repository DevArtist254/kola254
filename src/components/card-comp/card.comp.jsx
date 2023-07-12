import React from 'react';
import Stars from './stars.comp';
import intro1 from '../../assests/images/hair-2.jpg';

function Card({data}) {
  return (
    <div className='card-full'>
      <div
        className='card-full__picture'
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${intro1})`,
        }}
      >
        <h3
          className='card-full__header card-heading'
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${intro1})`,
          }}
        >
          {data.firstName}
        </h3>
        <div className='card-full__picture--sub-header'>
          <p className='card-price'> Only ${data.price}</p>
          <h4 className='card-full__subHeader card-subHeader'>
            {data.firstName}
          </h4>
          <div className='stars'>
            <Stars />
          </div>
        </div>
      </div>
      <div className='card-full__link'>
        <p className='nav-link'>Details</p>
        <p className='card-addToCart-btn'>Add to cart</p>
      </div>
    </div>
  );
}

export default Card;
