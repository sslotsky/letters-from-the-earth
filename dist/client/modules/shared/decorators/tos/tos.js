'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = tos;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../../styled/Layout');

var _reactRouter = require('react-router');

var _styles = require('./styles');

var _terms = require('./terms');

var _terms2 = _interopRequireDefault(_terms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function tos(Component) {
  return (0, _reactRouter.withRouter)(function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        agree: false,
        commit: false
      }, _this.toggleAgree = function () {
        return _this.setState(function (_ref2) {
          var agree = _ref2.agree;
          return { agree: !agree };
        });
      }, _this.commit = function () {
        return _this.setState({ commit: true });
      }, _this.cancel = function () {
        return _this.props.history.goBack();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        var _state = this.state,
            agree = _state.agree,
            commit = _state.commit;


        if (commit) {
          return _react2.default.createElement(Component, this.props);
        }

        return _react2.default.createElement(
          _styles.Page,
          null,
          _react2.default.createElement(
            _styles.Container,
            null,
            _react2.default.createElement(
              _styles.Terms,
              null,
              _terms2.default
            ),
            _react2.default.createElement(
              _styles.Actions,
              null,
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { type: 'checkbox', checked: agree, onChange: this.toggleAgree }),
                'I agree to these terms'
              ),
              _react2.default.createElement(
                _Layout.Button,
                { disabled: !agree, onClick: this.commit },
                'Continue'
              ),
              _react2.default.createElement(
                _Layout.Button,
                { onClick: this.cancel },
                'Cancel'
              )
            )
          )
        );
      }
    }]);

    return _class2;
  }(_react2.default.Component));
}