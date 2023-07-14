import React from 'react';
import {
  selectCartItem,
  selectCartItemCount,
  selectCartItemPriceSum,
} from '../../redux/cart/cart.selector';
import CartCards from '../card-comp/cartCards.comp';
import {connect} from 'react-redux';

function CartNav({cartItems, cartItemsSum, itemCartCount}) {
  return (
    <div>
      <div className='dropdown'>
        <h2 className='dropdown__header'>Shop</h2>
        <CartCards products={cartItems} />

        <p className='dropdown__p'>Total : {cartItemsSum}</p>
        <div
          className='dropdown__cta'
          // onClick={() => navRoute('/checkout')}
        >
          Pay
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
  itemCartCount: selectCartItemCount(state),
  cartItemsSum: selectCartItemPriceSum(state),
});

export default connect(mapStateToProps)(CartNav);
