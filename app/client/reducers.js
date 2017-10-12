import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import identity from 'MODULES/identity/reducer';
import letterRequests from 'MODULES/letters/pagination';

export default combineReducers({
  identity,
  letterRequests,
  form
});

