import { resolveEach } from 'redux-resolver';
import * as actionTypes from './actionTypes';

const initialState = {
  user: null
};

function setUser(state, action) {
  return { ...state, user: action.user };
}

function clearUser(state) {
  return { ...state, user: null };
}

export default resolveEach(initialState, {
  [actionTypes.SET_USER]: setUser,
  [actionTypes.CLEAR_USER]: clearUser
});
