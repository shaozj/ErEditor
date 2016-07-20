const React = require('react');
const ReactDOM = require('react-dom');
const CodeBox = require('./codebox');

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
    // todo: translate es6 to es5
    //alert('正在将es6翻译为es5');
    console.log(this.state.file);
    process.env.es5FilePath = this.state.file;
    let arr = this.state.file.split('.');
    arr.splice(arr.length - 1, 1);
    let es6File = arr.join('.') + '-es5.js';

    global.gulpCb = function() {
      this.setState({ file2: es6File}).bind(this);
    }

    require('./gulp/index');
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
