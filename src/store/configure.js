import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules'
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware(),ReduxThunk];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloaderState) => createStore(reducers, preloaderState, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;