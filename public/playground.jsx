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
            </div>
            <div className="editor">
              <CodeBox file={this.state.file} ref="codebox" />
            </div>
            <div id="preview">
              <CodeBox id="html5" ref="codebox2" />
            </div>
          </div>
  }
}

module.exports = PlayGround;
