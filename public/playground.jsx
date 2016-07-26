const React = require('react');
const ReactDOM = require('react-dom');
const CodeBox = require('./codebox');
const babel = require('babel-core');
const fs = require('fs');
require('shelljs/global');

class PlayGround extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      files: null
    };
  }

  onFile(e) {
    this.setState({file: e.target.files[0].path});
  }

  /**
  * 翻译 es6 到 es5
  */
  translate () {
    // TODO: translate es6 to es5
    //alert('正在将es6翻译为es5');
    console.log(this.state.file);
    let es6FilePath = this.state.file;
    let arr = this.state.file.split('.');
    arr.splice(arr.length - 1, 1);
    let es5File = arr.join('.') + '-es5.js';

    // es6 to es5
    let options = {presets: ['es2015']};
    let es5code = babel.transformFileSync(es6FilePath, options).code;
    console.log('==========es5 code: ==== ' + es5code);

    // write to file
    fs.writeFileSync(es5File, es5code);

    // refresh file2
    this.setState({ file2: es5File});
  }

  render() {
    return <div className="play-ground">
            <div className="actions">
              <button className="cyan openbutton">
                <label><input type="file" accept=".js" onChange={this.onFile.bind(this)} /></label>
                打开
              </button>
              <button className="blue" onClick={() => {
                this.refs.codebox.save();
              }}>保存</button>
              <button className="translate" onClick={() => {
                this.translate();
              }}>翻译</button> 
            </div>
            <div className="editor">
              <CodeBox file={this.state.file} ref="codebox" />
            </div>
            <div id="preview">
              <CodeBox file={this.state.file2} id="html5" ref="codebox2" />
            </div>
          </div>
  }
}

module.exports = PlayGround;
