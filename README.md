# react-dice
> Dice for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-dice
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | number | false    | 1       | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |
| disabled  | bool   | false    | false   | If dice can be click.                 |
| duration  | number | false    | 500     | The dice rotate speed.                |
| timeout   | number | false    | 2000    | The timeout timing.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-dice/dist/style.css";

  // or use sass
  @import "~@jswork/react-dice/dist/style.scss";

  // customize your styles:
  $react-dice-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDice from '@jswork/react-dice';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: 3
    };

    handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-dice">
          <h1 className="title">骰子</h1>
          <h2 className="subtitle">😎点击开始玩吧~</h2>
          <div className="box">
            <ReactDice value={this.state.value} onChange={this.handleChange} />
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

  ```

## documentation
- https://afeiship.github.io/react-dice/


## license
Code released under [the MIT license](https://github.com/afeiship/react-dice/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-dice
[version-url]: https://npmjs.org/package/@jswork/react-dice

[license-image]: https://img.shields.io/npm/l/@jswork/react-dice
[license-url]: https://github.com/afeiship/react-dice/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-dice
[size-url]: https://github.com/afeiship/react-dice/blob/master/dist/react-dice.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-dice
[download-url]: https://www.npmjs.com/package/@jswork/react-dice
