import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store;

export default function create() {
  if (!store) {
    store = createStore(reducers, applyMiddleware(thunk));
  }

  return store;
}
