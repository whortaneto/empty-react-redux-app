import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './app/store';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

/* eslint-disable */

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker()
