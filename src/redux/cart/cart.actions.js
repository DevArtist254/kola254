import cartTypes from './cart.types';

export const addItemsToCart = (item) => ({
  type: cartTypes.itemAddedToCart,
  payload: item,
});
