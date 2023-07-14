import cartTypes from './cart.types';
import {addItem} from './cart.utils';

const initialState = {
  cartItem: [],
};

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case cartTypes.itemAddedToCart:
      return {...state, cartItem: addItem(state.cartItem, payload)};

    default:
      return state;
  }
};

export default cartReducer;
