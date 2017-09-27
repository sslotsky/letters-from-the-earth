'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _Collapse = require('../../../shared/components/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LetterGroup = function (_Component) {
  _inherits(LetterGroup, _Component);

  function LetterGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LetterGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LetterGroup.__proto__ || Object.getPrototypeOf(LetterGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.toggle = function () {
      return _this.setState(function (_ref2) {
        var open = _ref2.open;
        return { open: !open };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  //toggle = () => this.setState(({ open }) => ({ open: !open }));


  _createClass(LetterGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          types = _props.types;
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _style.RowContainer,
          { onClick: this.toggle },
          _react2.default.createElement(
            _style.RowContent,
            null,
            title
          )
        ),
        _react2.default.createElement(
          _style.Grouping,
          null,
          _react2.default.createElement(
            _Collapse2.default,
            { open: open },
            types.map(function (t) {
              return _react2.default.createElement(
                _style.RowContainer,
                { key: t.type },
                _react2.default.createElement(
                  _style.LinkRow,
                  { to: '/letters/new/' + t.type },
                  t.display
                )
              );
            })
          )
        )
      );
    }
  }]);

  return LetterGroup;
}(_react.Component);

exports.default = LetterGroup;