'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.Button = exports.MainContent = exports.PageHeader = exports.Page = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n'], ['\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  border-bottom: 1px solid #d2d2d2;\n  color: darkslategray;\n'], ['\n  text-align: center;\n  border-bottom: 1px solid #d2d2d2;\n  color: darkslategray;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1 100%;\n  font-size: 1.5rem;\n  padding: 2rem 5rem;\n  color: darkslategray;\n  transform-origin: 0 0;\n'], ['\n  flex: 1 100%;\n  font-size: 1.5rem;\n  padding: 2rem 5rem;\n  color: darkslategray;\n  transform-origin: 0 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background-color: darkmagenta;\n  color: white;\n  border-radius: .3rem;\n  cursor: pointer;\n  border: none;\n  padding: .75rem;\n  box-shadow: .2rem .2rem .5rem darkorange;\n\n  &:hover, &:focus {\n    opacity: 0.9;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.3;\n  }\n'], ['\n  background-color: darkmagenta;\n  color: white;\n  border-radius: .3rem;\n  cursor: pointer;\n  border: none;\n  padding: .75rem;\n  box-shadow: .2rem .2rem .5rem darkorange;\n\n  &:hover, &:focus {\n    opacity: 0.9;\n  }\n\n  &:active {\n    opacity: 0.8;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.3;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-decoration: none;\n'], ['\n  text-decoration: none;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Page = exports.Page = _styledComponents2.default.div(_templateObject);

var PageHeader = exports.PageHeader = _styledComponents2.default.header(_templateObject2);

var MainContent = exports.MainContent = _styledComponents2.default.main(_templateObject3);

var likeAButton = function likeAButton(elem) {
  return (0, _styledComponents2.default)(elem)(_templateObject4);
};

var Button = exports.Button = likeAButton('button');
var LinkButton = exports.LinkButton = (0, _styledComponents2.default)(likeAButton(_reactRouterDom.Link))(_templateObject5);