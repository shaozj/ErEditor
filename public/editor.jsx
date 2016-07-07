const React = require('react');
const ReactDOM = require('react-dom');
const CodeBox = require('./codebox');

class Editor extends React.Component {
  render() {
    return 
      <div className="editor">
        <div className="actions">
          <button className="cyan openbutton">打开</button>
          <button className="blue">保存</button>
        </div>
        <CodeBox />
      </div>
  }
}

module.exports = Editor;
