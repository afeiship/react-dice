import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-dice';
const DICE_ASSESTS = [
  'https://course-assets.saybot.net/aric/assets/images/2110669-06a5cd55a35cd125.png',
  'https://course-assets.saybot.net/aric/assets/images/2110669-c7bb5fb773695de5.png',
  'https://course-assets.saybot.net/aric/assets/images/2110669-d233d140403f6ad0.png',
  'https://course-assets.saybot.net/aric/assets/images/2110669-e2f5ffb218a01506.png',
  'https://course-assets.saybot.net/aric/assets/images/2110669-fd1068db6222d78a.png',
  'https://course-assets.saybot.net/aric/assets/images/2110669-7cc2d3d4e16fdc18.png'
];

const random = () => {
  return Math.floor(Math.random() * 6);
};

export default class ReactDice extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.number,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If dice can be click.
     */
    disabled: PropTypes.bool,
    /**
     * The dice rotate speed.
     */
    duration: PropTypes.number,
    /**
     * The timeout timing.
     */
    timeout: PropTypes.number
  };

  static defaultProps = {
    value: 1,
    onChange: noop,
    disabled: false,
    duration: 500,
    timeout: 2000
  };

  get src() {
    const { value } = this.state;
    return DICE_ASSESTS[value - 1];
  }

  get running() {
    return this.state.animating && !!this.timer;
  }

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.timer = null;
    this.state = { value, animating: false };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    this.props.value !== value && this.setState({ value });
    return true;
  }

  componentWillUnmount() {
    setTimeout(this.timer);
    this.stop();
    this.timer = null;
  }

  handleClick = () => {
    const { disabled } = this.props;
    !disabled && this.start();
  };

  start() {
    const { timeout } = this.props;
    if (this.running) return;
    this.setState({ animating: true }, () => {});
    this.timer = setTimeout(() => {
      this.stop();
    }, timeout);
  }

  stop() {
    const { onChange } = this.props;
    const value = random() + 1;
    this.timer && clearTimeout(this.timer);
    this.setState({ animating: false, value });
    onChange({ target: { value } });
  }

  render() {
    const {
      className,
      duration,
      style,
      animating,
      clickable,
      ...props
    } = this.props;

    const _animating = this.state.animating;
    const _style = { animationDuration: `${duration}ms`, ...style };

    return (
      <div
        data-component={CLASS_NAME}
        style={_style}
        className={classNames(CLASS_NAME, className, {
          'is-animating': _animating
        })}
        {...props}>
        <img src={this.src} onClick={this.handleClick} />
      </div>
    );
  }
}
