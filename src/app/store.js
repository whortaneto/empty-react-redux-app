import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { rootReducer } from './modules';
import sagas from './sagas';

export const history = createHistory();

const createEnhancersAndMiddlewares = (isDevelopment, sagaMiddleware) => {
  const enhancers = [];
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware
  ];
  /* eslint-disable no-underscore-dangle */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  return isDevelopment
    ? {
      enhancers: typeof devToolsExtension === 'function' ? [...enhancers, devToolsExtension()] : enhancers,
      middlewares: [...middlewares, createLogger({ stateTransformer: state => state })]
    }
    : {
      enhancers,
      middlewares
    };
};

const sagaMiddleware = createSagaMiddleware();

const { enhancers, middlewares } = createEnhancersAndMiddlewares(process.env.NODE_ENV === 'development', sagaMiddleware);

const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = {
  ...createStore(
    rootReducer,
    initialState,
    composedEnhancers
  ),
  sagas: Object.keys(sagas).map(sagaName => sagaMiddleware.run(sagas[sagaName]))
};

export default store;
