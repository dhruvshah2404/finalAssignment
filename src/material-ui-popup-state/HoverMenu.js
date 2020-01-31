"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _hoverWorkaround = _interopRequireDefault(require("./hoverWorkaround"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

/**
 * 
 * @prettier
 */
var _default = (0, _hoverWorkaround["default"])(_Menu["default"]);

exports["default"] = _default;