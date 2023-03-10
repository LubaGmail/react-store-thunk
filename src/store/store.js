// Enhances rootReducer with helper functions
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(
  Boolean
);

const composeEnhancer =   (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
    
  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'],
    blacklist: ['categories']
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

// src\store\middleware\logger.js
// const middleWares = [loggedMiddleware]

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore (
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

// export const store = createStore(rootReducer);
