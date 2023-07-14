import {combineReducers} from 'redux';
import productReducer from './products/product.reducer';
import cartReducer from './cart/cart.reducer';

//Local storage
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  whitelist: ['product', 'cart'],
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
