'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _store = require('../client/store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _App = require('../client/App');

var _App2 = _interopRequireDefault(_App);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _assets = require('./assets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(req, res) {
  var store = (0, _store2.default)();

  var context = {};

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    )
  ));

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    var status = context.status || 200;
    res.status(status).send((0, _template2.default)(html, store.getState(), { bundle: _assets.bundle, vendorBundle: _assets.vendorBundle }));
  }
}