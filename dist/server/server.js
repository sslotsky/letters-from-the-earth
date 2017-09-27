'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serverRender = require('./serverRender');

var _serverRender2 = _interopRequireDefault(_serverRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));

app.use('/dist', _express2.default.static('dist'));

app.use(_serverRender2.default);

app.listen(9999);