import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDice from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: 0,
    animating: false
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-dice">
        <ReactDice
          clickable
          animating={this.state.animating}
          // onChange={this.handleChange}
        />
        <button
          className="button"
          onClick={(e) => {
            this.setState({ animating: true });
          }}>
          Start~
        </button>

        <h1 className="text-center text-white" style={{ fontSize: 120 }}>
          {this.state.value}
        </h1>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
