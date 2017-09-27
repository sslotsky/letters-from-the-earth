'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = exports.Terms = exports.Container = exports.Page = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 100vh;\n  background-color: wheat;\n'], ['\n  min-height: 100vh;\n  background-color: wheat;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  padding: 10rem;\n'], ['\n  display: flex;\n  flex-direction: column;\n  padding: 10rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: whitesmoke;\n  display: flex;\n  padding: 2rem;\n  max-height: 25rem;\n  overflow: auto;\n'], ['\n  background-color: whitesmoke;\n  display: flex;\n  padding: 2rem;\n  max-height: 25rem;\n  overflow: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n\n  input {\n    margin-bottom: 1rem;\n  }\n\n  button {\n    margin-bottom: .2rem;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n\n  input {\n    margin-bottom: 1rem;\n  }\n\n  button {\n    margin-bottom: .2rem;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Page = exports.Page = _styledComponents2.default.div(_templateObject);

var Container = exports.Container = _styledComponents2.default.div(_templateObject2);

var Terms = exports.Terms = _styledComponents2.default.div(_templateObject3);

var Actions = exports.Actions = _styledComponents2.default.div(_templateObject4);