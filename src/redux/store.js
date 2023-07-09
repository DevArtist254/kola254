import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import persistedReducer from './root-reducer';

const middlewares = [thunk, logger];

export const store = createStore( persistedReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);