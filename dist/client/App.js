'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('./modules/letters/components');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/letters/new', exact: true, component: _components.New }),
    _react2.default.createElement(_reactRouter.Route, { path: '/letters/new/:letterType', component: _components.LetterType }),
    _react2.default.createElement(_reactRouter.Route, { component: _Home2.default })
  );
}