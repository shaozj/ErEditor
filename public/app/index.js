'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Editor = require('../editor');

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Editor, null),
  React.createElement(
    'div',
    { id: 'preview' },
    React.createElement('webview', { id: 'html5', nodeintegration: true }),
    React.createElement(Editor, null)
  )
), document.getElementById('body'));