/* eslint no-unused-vars:0 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var BoilerplateComponent = _reactAddons2["default"].createClass({
  displayName: "BoilerplateComponent",

  render: function render() {
    return _reactAddons2["default"].createElement(
      "div",
      null,
      "Edit me in src/boilerplate-component.js"
    );
  }
});

exports["default"] = BoilerplateComponent;
module.exports = exports["default"];