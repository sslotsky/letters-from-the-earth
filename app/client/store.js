import { fromJS } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store;

function rehydrate(state) {
  if (!state) {
    return undefined;
  }

  const { letterRequests, ...rest } = state;
  return {
    ...rest,
    letterRequests: fromJS(letterRequests)
  };
}

export default function create(server = false) {
  if (!store || server) {
    store = createStore(
      reducers,
      server ? undefined : rehydrate(window.__PRELOADED_STATE__),
      applyMiddleware(thunk)
    );
  }

  return store;
}
