import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { initializeStore, configurePageParams } from '@orange-marmalade/paginate-this';

import { setUser } from 'MODULES/identity/actions';

import './init';
import { user } from './session';
import store from './store';
import App from './App';

const currentUser = user();

if (currentUser) {
  store().dispatch(setUser(currentUser));
}

configurePageParams({
  totalCount: 'totalCount'
});

initializeStore(store());

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
