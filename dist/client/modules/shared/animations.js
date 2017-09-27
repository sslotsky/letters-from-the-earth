'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shrink = exports.grow = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: scaleY(0);\n  }\n  to {\n    transform: scaleY(1);\n  }\n'], ['\n  from {\n    transform: scaleY(0);\n  }\n  to {\n    transform: scaleY(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: scaleY(1);\n  }\n  to {\n    transform: scaleY(0);\n  }\n'], ['\n  from {\n    transform: scaleY(1);\n  }\n  to {\n    transform: scaleY(0);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var grow = exports.grow = (0, _styledComponents.keyframes)(_templateObject);

var shrink = exports.shrink = (0, _styledComponents.keyframes)(_templateObject2);