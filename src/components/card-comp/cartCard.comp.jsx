import React from 'react';
import intro1 from '../../assests/images/hair-2.jpg';
import x from '../../assests/images/x.png';

function CartCard({data}) {
  return (
    <div
      className='dropdown__tours'
      // onClick={() => navTours(cartItem)}
    >
      <div className='dropdown__tours--placeHolder '></div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${intro1})`,
        }}
        className='dropdown__tours--img'
      ></div>
      <div className='dropdown__tours--content'>
        <h4 className='dropdown__tours--header'>{data.firstName}</h4>
        <p className='dropdown__tours--total'>Pcs: {data.pcs}</p>
        <p className='dropdown__tours--total'>${data.price}</p>
      </div>
      <img src={x} alt='cancel' className='dropdown__tours--cancel' />
    </div>
  );
}

export default CartCard;
