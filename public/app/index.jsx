const React = require('react');
const ReactDOM = require('react-dom');
const PlayGround = require('../playground');
const CodeBox = require('../codebox');

ReactDOM.render((
  <div id="wrap">
    <PlayGround />
  </div>
), document.getElementById('body'));
