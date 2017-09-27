'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

exports.default = (0, _redux.combineReducers)({ form: _reduxForm.reducer });