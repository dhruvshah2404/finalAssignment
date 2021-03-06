"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("./core");

/* eslint-env browser */
var PopupState =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PopupState, _React$Component);

  function PopupState() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PopupState);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PopupState)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", _core.initCoreState);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_mounted", true);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setStateIfMounted", function (state) {
      if (_this._mounted) _this.setState(state);
    });
    return _this;
  }

  (0, _createClass2["default"])(PopupState, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var popupId = this.props.popupId;

      if (popupId !== prevProps.popupId || this.state.anchorEl !== prevState.anchorEl) {
        if (popupId && (typeof document === "undefined" ? "undefined" : (0, _typeof2["default"])(document)) === 'object') {
          var popup = document.getElementById(popupId);
          if (popup) popup.focus();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          popupId = _this$props.popupId,
          variant = _this$props.variant,
          parentPopupState = _this$props.parentPopupState;
      var popupState = (0, _core.createPopupState)({
        state: this.state,
        setState: this._setStateIfMounted,
        popupId: popupId,
        variant: variant,
        parentPopupState: parentPopupState
      });
      var result = children(popupState);
      if (result == null) return null;
      return result;
    }
  }]);
  return PopupState;
}(React.Component);

exports["default"] = PopupState;
(0, _defineProperty2["default"])(PopupState, "propTypes", {
  /**
   * The render function.
   *
   * @param {object} props the properties injected by `PopupState`:
   * <ul>
   *   <li>`open(eventOrAnchorEl)`: opens the popup</li>
   *   <li>`close()`: closes the popup</li>
   *   <li>`toggle(eventOrAnchorEl)`: opens the popup if it is closed, or
   *     closes the popup if it is open.
   *   </li>
   *   <li>`setOpen(open, [eventOrAnchorEl])`: sets whether the popup is open.
   *     `eventOrAnchorEl` is required if `open` is truthy.
   *   </li>
   *   <li>`isOpen`: `true`/`false` if the popup is open/closed</li>
   *   <li>`anchorEl`: the current anchor element (`null` the popup is closed)</li>
   *   <li>`popupId`: the `popupId` prop you passed</li>
   * </ul>
   *
   * @returns {React.Node} the content to display
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * The `id` property to use for the popup.  Will be passed to the render
   * function as `bindPopup.id`, and also used for the `aria-owns` property
   * passed to the trigger component via `bindTrigger`.
   */
  popupId: _propTypes["default"].string,

  /**
   * Which type of popup you are controlling.  Use `'popover'` for `Popover`
   * and `Menu`; use `'popper'` for `Popper`s.  Right now this only affects
   * whether `aria-owns` or `aria-describedby` is used on the trigger
   * component.
   */
  variant: _propTypes["default"].oneOf(['popover', 'popper']).isRequired,

  /**
   *
   */
  parentPopupState: _propTypes["default"].object
});