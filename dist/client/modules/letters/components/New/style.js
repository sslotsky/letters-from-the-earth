'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grouping = exports.RowContent = exports.LinkRow = exports.RowContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 1rem;\n  box-shadow: .2rem .2rem .5rem darkslategray;\n  display: flex;\n'], ['\n  margin-bottom: 1rem;\n  box-shadow: .2rem .2rem .5rem darkslategray;\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 1;\n  padding: 2rem;\n  height: 5rem;\n  text-decoration: none;\n  color: darkslategray;\n'], ['\n  flex: 1;\n  padding: 2rem;\n  height: 5rem;\n  text-decoration: none;\n  color: darkslategray;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding-left: 5rem;\n'], ['\n  padding-left: 5rem;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RowContainer = exports.RowContainer = _styledComponents2.default.div(_templateObject);

var rowContent = function rowContent(elem) {
  return (0, _styledComponents2.default)(elem)(_templateObject2);
};

var LinkRow = exports.LinkRow = rowContent(_reactRouterDom.Link);

var RowContent = exports.RowContent = rowContent('div').extend(_templateObject3);

var Grouping = exports.Grouping = _styledComponents2.default.div(_templateObject4);