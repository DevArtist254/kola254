import React from 'react';
import CartCard from './cartCard.comp';

function CartCards({products}) {
  return (
    <>
      {products.map((product) => (
        <CartCard key={product._id} data={product} />
      ))}
    </>
  );
}

export default CartCards;
