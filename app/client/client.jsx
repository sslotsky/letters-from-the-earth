import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setUser } from 'MODULES/identity/actions';

import { user } from './session';
import store from './store';
import App from './App';

const currentUser = user();

if (currentUser) {
  store().dispatch(setUser(currentUser));
}

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
