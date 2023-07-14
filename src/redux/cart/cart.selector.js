import {createSelector} from 'reselect';

export const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce((accPcs, cartItem) => accPcs + cartItem.pcs, 0)
);

export const selectCartItemPriceSum = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accPrice, cartItem) => accPrice + Number(cartItem.price),
      0
    )
);
