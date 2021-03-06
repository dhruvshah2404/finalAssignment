"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "anchorRef", {
  enumerable: true,
  get: function () {
    return _core.anchorRef;
  }
});
Object.defineProperty(exports, "bindTrigger", {
  enumerable: true,
  get: function () {
    return _core.bindTrigger;
  }
});
Object.defineProperty(exports, "bindToggle", {
  enumerable: true,
  get: function () {
    return _core.bindToggle;
  }
});
Object.defineProperty(exports, "bindHover", {
  enumerable: true,
  get: function () {
    return _core.bindHover;
  }
});
Object.defineProperty(exports, "bindMenu", {
  enumerable: true,
  get: function () {
    return _core.bindMenu;
  }
});
Object.defineProperty(exports, "bindPopover", {
  enumerable: true,
  get: function () {
    return _core.bindPopover;
  }
});
Object.defineProperty(exports, "bindPopper", {
  enumerable: true,
  get: function () {
    return _core.bindPopper;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PopupState extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", _core.initCoreState);

    _defineProperty(this, "_mounted", true);

    _defineProperty(this, "_setStateIfMounted", state => {
      if (this._mounted) this.setState(state);
    });
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      popupId
    } = this.props;

    if (popupId !== prevProps.popupId || this.state.anchorEl !== prevState.anchorEl) {
      if (popupId && typeof document === 'object') {
        const popup = document.getElementById(popupId);
        if (popup) popup.focus();
      }
    }
  }

  render() {
    const {
      children,
      popupId,
      variant,
      parentPopupState
    } = this.props;
    const popupState = (0, _core.createPopupState)({
      state: this.state,
      setState: this._setStateIfMounted,
      popupId,
      variant,
      parentPopupState
    });
    const result = children(popupState);
    if (result == null) return null;
    return result;
  }

}

exports.default = PopupState;

_defineProperty(PopupState, "propTypes", {
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
  children: _propTypes.default.func.isRequired,

  /**
   * The `id` property to use for the popup.  Will be passed to the render
   * function as `bindPopup.id`, and also used for the `aria-owns` property
   * passed to the trigger component via `bindTrigger`.
   */
  popupId: _propTypes.default.string,

  /**
   * Which type of popup you are controlling.  Use `'popover'` for `Popover`
   * and `Menu`; use `'popper'` for `Popper`s.  Right now this only affects
   * whether `aria-owns` or `aria-describedby` is used on the trigger
   * component.
   */
  variant: _propTypes.default.oneOf(['popover', 'popper']).isRequired,

  /**
   *
   */
  parentPopupState: _propTypes.default.object
});