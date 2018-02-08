import React from 'react';
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

// const middlewares = [];
//
// if (__DEV__) {
//   middlewares.push(createLogger());
// }

const store = createStore(reducer, undefined, autoRehydrate());


export default store;
