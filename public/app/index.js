'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PlayGround = require('../playground');
const CodeBox = require('../codebox');

ReactDOM.render(React.createElement(
  'div',
  { id: 'wrap' },
  React.createElement(PlayGround, null)
), document.getElementById('body'));