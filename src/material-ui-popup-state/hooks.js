"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopupState = usePopupState;
Object.defineProperty(exports, "anchorRef", {
  enumerable: true,
  get: function get() {
    return _core.anchorRef;
  }
});
Object.defineProperty(exports, "bindTrigger", {
  enumerable: true,
  get: function get() {
    return _core.bindTrigger;
  }
});
Object.defineProperty(exports, "bindToggle", {
  enumerable: true,
  get: function get() {
    return _core.bindToggle;
  }
});
Object.defineProperty(exports, "bindHover", {
  enumerable: true,
  get: function get() {
    return _core.bindHover;
  }
});
Object.defineProperty(exports, "bindMenu", {
  enumerable: true,
  get: function get() {
    return _core.bindMenu;
  }
});
Object.defineProperty(exports, "bindPopover", {
  enumerable: true,
  get: function get() {
    return _core.bindPopover;
  }
});
Object.defineProperty(exports, "bindPopper", {
  enumerable: true,
  get: function get() {
    return _core.bindPopper;
  }
});

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _core = require("./core");

/* eslint-env browser */
if (!_react.useState) {
  throw new Error("React.useState (added in 16.8.0) must be defined to use the hooks API");
}

function usePopupState(_ref) {
  var parentPopupState = _ref.parentPopupState,
      popupId = _ref.popupId,
      variant = _ref.variant;

  var _useState = (0, _react.useState)(_core.initCoreState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (popupId && (typeof document === "undefined" ? "undefined" : (0, _typeof2["default"])(document)) === 'object') {
      var popup = document.getElementById(popupId);
      if (popup) popup.focus();
    }
  }, [popupId, state.anchorEl]);
  return (0, _core.createPopupState)({
    state: state,
    setState: setState,
    parentPopupState: parentPopupState,
    popupId: popupId,
    variant: variant
  });
}