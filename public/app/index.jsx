const React = require('react');
const ReactDOM = require('react-dom');
const Editor = require('../editor');

ReactDOM.render((
  <div>
    <Editor />
    <div id="preview">
        <webview id="html5" nodeintegration></webview>
        <Editor />
    </div>
  </div>
), document.getElementById('body'));
