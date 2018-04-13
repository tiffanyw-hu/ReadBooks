import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;
