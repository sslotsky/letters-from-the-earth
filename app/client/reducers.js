import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import identity from 'MODULES/identity/reducer';

export default combineReducers({ identity, form });

