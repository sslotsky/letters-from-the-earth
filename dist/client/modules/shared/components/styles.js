'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  1s ', '\n'], ['\n  1s ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  transform-origin: 0 0;\n  animation: ', ';\n'], ['\n  transform-origin: 0 0;\n  animation: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var expandCollapse = function expandCollapse(_ref) {
  var open = _ref.open;
  return open ? (0, _styledComponents.css)(_templateObject, _animations.grow) : (0, _styledComponents.css)(_templateObject, _animations.shrink);
};

var Container = exports.Container = _styledComponents2.default.div(_templateObject2, expandCollapse);