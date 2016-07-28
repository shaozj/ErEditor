'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const CodeBox = require('./codebox');
const babel = require('babel-core');
const fs = require('fs');

class PlayGround extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      files: null
    };
  }

  onFile(e) {
    this.setState({ file: e.target.files[0].path });
  }

  /**
  * 翻译 es6 到 es5
  */
  translate() {
    // TODO: translate es6 to es5
    //alert('正在将es6翻译为es5');
    console.log(this.state.file);
    let es5File = 'test-es5.js';
    let es6FilePath = this.state.file;
    if (es6FilePath) {
      let arr = es6FilePath && es6FilePath.split('.');
      arr.splice(arr.length - 1, 1);
      es5File = arr.join('.') + '-es5.js';
    }

    // get es6 code
    let es6code = this.refs.codebox.doc.getValue();

    console.log('======es6 code======== ' + es6code);

    // es6 to es5
    let options = { presets: ['es2015'] };
    let es5code = babel.transform(es6code, options).code;
    console.log('=======================');
    console.log(eval(es5code));

    // write to codebox2
    this.refs.codebox2.setValue(es5code);

    // write to file
    fs.writeFile(es5File, es5code);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'play-ground' },
      React.createElement(
        'div',
        { className: 'actions' },
        React.createElement(
          'button',
          { className: 'cyan openbutton' },
          React.createElement(
            'label',
            null,
            React.createElement('input', { type: 'file', accept: '.js', onChange: this.onFile.bind(this) })
          ),
          '打开'
        ),
        React.createElement(
          'button',
          { className: 'blue', onClick: () => {
              this.refs.codebox.save();
            } },
          '保存'
        ),
        React.createElement(
          'button',
          { className: 'translate', onClick: () => {
              this.translate();
            } },
          '翻译'
        )
      ),
      React.createElement(
        'div',
        { className: 'editor' },
        React.createElement(CodeBox, { file: this.state.file, ref: 'codebox' })
      ),
      React.createElement(
        'div',
        { id: 'preview' },
        React.createElement(CodeBox, { file: this.state.file2, id: 'html5', ref: 'codebox2' })
      )
    );
  }
}

module.exports = PlayGround;