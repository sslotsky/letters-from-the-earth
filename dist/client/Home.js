'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('./styled/Layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    _Layout.Page,
    null,
    _react2.default.createElement(
      _Layout.PageHeader,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Letters From The Earth'
      )
    ),
    _react2.default.createElement(
      _Layout.MainContent,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Layout.LinkButton,
          { to: '/letters/new' },
          'Start New Letter'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Do you Need Help Writing a Letter? If so, You\u2019ve Come to the Right Place!'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Greetings from the Earth! A place where most of the inhabitants are not particularly good at writing letters. If you are not a good letter writer, you are in the majority. And in this informal world we live in, usually a very casual approach will do just fine. But sometimes it won\u2019t. If you are reading this, you probably already have such an occasion in mind.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Fear Not! We at Letters from Earth love writing letters and we are very good at it (if we do say so ourselves). We have an excellent grasp on grammar but also understand the value of not having a letter sound stilted. In other words, we will keep \u201Cto whom\u201D \u201Cfrom which\u201D \u201Ctherefrom\u201D and other awkward sounding phrases from appearing too often in your letter.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'You are always in charge! We write the letters but they are nothing more than a suggestion. Once your letter arrives, it is your decision to send it as is, alter it as you like, or just not send it. We will not compose letters containing vulgarity, profanity, hate speech, etc. But once you get the letter, you are free to make it a bit more colorful if you like. Please also be aware that we are not lawyers and do not give legal advice. Sometimes there is just no substitute to a letter from a lawyer.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We will give you a list of the most frequent requests that we get. But feel free to request any kind of letter you need. And if you are not happy with the first draft, just let us know and we will give you one rewrite at no extra charge.'
      )
    )
  );
}