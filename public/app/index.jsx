const React = require('react');
const ReactDOM = require('react-dom');
const Editor = require('../editor');

ReactDOM.render((
  <div>
    <Editor />
    <webview id="html5" nodeintegration>
      <Editor />
    </webview>
  </div>
), document.getElementById('body'));
