'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = New;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Layout = require('../../../../styled/Layout');

var _style = require('./style');

var _LetterGroup = require('./LetterGroup');

var _LetterGroup2 = _interopRequireDefault(_LetterGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var letterTypes = [{
  display: 'Landlord Dispute',
  type: 'landlord_dispute'
}, {
  display: 'Creditor Dispute',
  type: 'creditor_dispute'
}];

function New() {
  return _react2.default.createElement(
    _Layout.Page,
    null,
    _react2.default.createElement(
      _Layout.PageHeader,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'What type of letter?'
      )
    ),
    _react2.default.createElement(
      _Layout.MainContent,
      null,
      _react2.default.createElement(_LetterGroup2.default, { title: 'Consumer Letters', types: letterTypes })
    )
  );
}