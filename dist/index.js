/*!
 *  name: @jswork/react-dice
 *  description: Dice for react.
 *  homepage: https://github.com/afeiship/react-dice#readme
 *  version: 1.0.0
 *  date: 2021-03-06T14:12:34.035Z
 *  license: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactDice=e():t.ReactDice=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@jswork/noop")},function(t,e){t.exports=require("classnames")},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(3),a=n.n(i),u=n(0),c=n.n(u),s=n(1),l=n.n(s);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=["https://upload-images.jianshu.io/upload_images/2110669-06a5cd55a35cd125.png","https://upload-images.jianshu.io/upload_images/2110669-c7bb5fb773695de5.png","https://upload-images.jianshu.io/upload_images/2110669-d233d140403f6ad0.png","https://upload-images.jianshu.io/upload_images/2110669-e2f5ffb218a01506.png","https://upload-images.jianshu.io/upload_images/2110669-fd1068db6222d78a.png","https://upload-images.jianshu.io/upload_images/2110669-7cc2d3d4e16fdc18.png"],P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,r,o=g(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).handleClick=function(){!e.props.disabled&&e.start()};var n=t.value;return e.timer=null,e.state={value:n,animating:!1},e}return e=i,(n=[{key:"src",get:function(){var t=this.state.value;return j[t-1]}},{key:"running",get:function(){return this.state.animating&&!!this.timer}},{key:"shouldComponentUpdate",value:function(t){var e=t.value;return this.props.value!==e&&this.setState({value:e}),!0}},{key:"componentWillUnmount",value:function(){setTimeout(this.timer),this.stop(),this.timer=null}},{key:"start",value:function(){var t=this,e=this.props.timeout;this.running||(this.setState({animating:!0},(function(){})),this.timer=setTimeout((function(){t.stop()}),e))}},{key:"stop",value:function(){var t=this.props.onChange,e=Math.floor(6*Math.random())+1;this.timer&&clearTimeout(this.timer),this.setState({animating:!1,value:e}),t({target:{value:e}})}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.duration,r=t.style,o=(t.animating,t.clickable,b(t,["className","duration","style","animating","clickable"])),i=this.state.animating,u=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({animationDuration:"".concat(n,"ms")},r);return l.a.createElement("div",p({"data-component":"react-dice",style:u,className:a()("react-dice",e,{"is-animating":i})},o),l.a.createElement("img",{src:this.src,onClick:this.handleClick}))}}])&&m(e.prototype,n),r&&m(e,r),i}(s.Component);P.displayName="react-dice",P.version="1.0.0",P.propTypes={className:c.a.string,value:c.a.number,onChange:c.a.func,disabled:c.a.bool,duration:c.a.number,timeout:c.a.number},P.defaultProps={value:1,onChange:o.a,disabled:!1,duration:500,timeout:2e3};e.default=P}])}));
//# sourceMappingURL=index.js.map