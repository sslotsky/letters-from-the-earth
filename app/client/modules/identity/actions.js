import api from 'APP_ROOT/api';
import * as actionTypes from './actionTypes';

export function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    user
  };
}

export function clearUser() {
  return {
    type: actionTypes.CLEAR_USER
  };
}

export function logout() {
  return dispatch => api.identity.logout().then(() =>
    dispatch(clearUser())
  );
}
