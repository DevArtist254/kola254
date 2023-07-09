import { combineReducers } from 'redux';
import productReducer from './products/product.reducer';

//Local storage
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
    key: 'root',
    storage,
    whitelist: ['product']
}

const rootReducer = combineReducers({
    product: productReducer,
})

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer
