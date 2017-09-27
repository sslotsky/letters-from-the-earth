'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  login: function login(user) {
    return window.localStorage.setItem('user', JSON.stringify(user));
  },
  logout: function logout() {
    return window.localStorage.removeItem('user');
  }
};