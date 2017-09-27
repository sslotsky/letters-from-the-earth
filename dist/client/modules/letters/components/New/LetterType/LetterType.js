'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetterType = LetterType;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _decorators = require('../../../../shared/decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LetterType(_ref) {
  var letterType = _ref.letterType;

  return _react2.default.createElement(
    'h1',
    null,
    'Start writing your letter'
  );
}

exports.default = (0, _decorators.tos)(LetterType);