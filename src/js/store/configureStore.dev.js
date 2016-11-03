import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
     
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}