'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const CodeBox = require('./codebox');

class Editor extends React.Component {
  render() {
    return;
    React.createElement(
      'div',
      { className: 'editor' },
      React.createElement(
        'div',
        { className: 'actions' },
        React.createElement(
          'button',
          { className: 'cyan openbutton' },
          '打开'
        ),
        React.createElement(
          'button',
          { className: 'blue' },
          '保存'
        )
      ),
      React.createElement(CodeBox, null)
    );
  }
}

module.exports = Editor;