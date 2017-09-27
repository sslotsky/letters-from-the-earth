'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vendorBundle = exports.bundle = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dist = _path2.default.join(process.cwd(), 'dist');
var files = _fs2.default.readdirSync(dist);

var filename = function filename(pattern) {
  return files.find(function (f) {
    return pattern.test(f);
  });
};

var bundle = exports.bundle = filename(/^bundle.*\.js$/);
var vendorBundle = exports.vendorBundle = filename(/^vendor.bundle.*\.js$/);