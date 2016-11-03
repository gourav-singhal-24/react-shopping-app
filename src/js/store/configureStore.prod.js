import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const enhancer = applyMiddleware(promise,logger);

export default function configureStore(initialState) {
  
  return createStore(rootReducer, initialState, enhancer);
};