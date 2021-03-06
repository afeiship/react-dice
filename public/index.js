import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDice from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: 0
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-dice">
        <h1 class="title">骰子</h1>
        <h2 class="subtitle">😎点击开始玩吧~</h2>
        <div className="box">
          <ReactDice clickable onChange={this.handleChange} />
        </div>

        <h1 className="text-center text-white">
          <span className="tag is-danger" style={{ fontSize: 80 }}>
            {this.state.value}
          </span>
        </h1>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
