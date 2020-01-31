"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPopupState = createPopupState;
exports.anchorRef = anchorRef;
exports.bindTrigger = bindTrigger;
exports.bindToggle = bindToggle;
exports.bindHover = bindHover;
exports.bindPopover = bindPopover;
exports.bindPopper = bindPopper;
exports.bindMenu = exports.initCoreState = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var eventOrAnchorElWarned = false;
var initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: null,
  hovered: false,
  _childPopupState: null
};
exports.initCoreState = initCoreState;

function createPopupState(_ref) {
  var state = _ref.state,
      _setState = _ref.setState,
      parentPopupState = _ref.parentPopupState,
      popupId = _ref.popupId,
      variant = _ref.variant;
  var isOpen = state.isOpen,
      setAnchorElUsed = state.setAnchorElUsed,
      anchorEl = state.anchorEl,
      hovered = state.hovered,
      _childPopupState = state._childPopupState; // use lastState to workaround cases where setState is called multiple times
  // in a single render (e.g. because of refs being called multiple times)

  var lastState = state;

  var setState = function setState(nextState) {
    if (hasChanges(lastState, nextState)) {
      _setState(lastState = _objectSpread({}, lastState, {}, nextState));
    }
  };

  var setAnchorEl = function setAnchorEl(_anchorEl) {
    setState({
      setAnchorElUsed: true,
      anchorEl: _anchorEl
    });
  };

  var toggle = function toggle(eventOrAnchorEl) {
    if (isOpen) close();else open(eventOrAnchorEl);
  };

  var open = function open(eventOrAnchorEl) {
    if (!eventOrAnchorElWarned && !eventOrAnchorEl && !setAnchorElUsed) {
      eventOrAnchorElWarned = true;
      /* eslint-disable no-console */

      console.error('eventOrAnchorEl should be defined if setAnchorEl is not used');
      /* eslint-enable no-console */
    }

    if (parentPopupState) {
      if (!parentPopupState.isOpen) return;

      parentPopupState._setChildPopupState(popupState);
    }

    if ((typeof document === "undefined" ? "undefined" : (0, _typeof2["default"])(document)) === 'object' && document.activeElement) {
      document.activeElement.blur();
    }

    var newState = {
      isOpen: true,
      hovered: eventOrAnchorEl && eventOrAnchorEl.type === 'mouseenter'
    };

    if (eventOrAnchorEl && eventOrAnchorEl.currentTarget) {
      if (!setAnchorElUsed) {
        newState.anchorEl = eventOrAnchorEl.currentTarget;
      }
    } else if (eventOrAnchorEl) {
      newState.anchorEl = eventOrAnchorEl;
    }

    setState(newState);
  };

  var close = function close() {
    if (_childPopupState) _childPopupState.close();
    if (parentPopupState) parentPopupState._setChildPopupState(null);
    setState({
      isOpen: false,
      hovered: false
    });
  };

  var setOpen = function setOpen(nextOpen, eventOrAnchorEl) {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else close();
  };

  var onMouseLeave = function onMouseLeave(event) {
    var relatedTarget = event.relatedTarget;

    if (hovered && !isElementInPopup(relatedTarget, popupState)) {
      close();
    }
  };

  var _setChildPopupState = function _setChildPopupState(_childPopupState) {
    return setState({
      _childPopupState: _childPopupState
    });
  };

  var popupState = {
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    setAnchorElUsed: setAnchorElUsed,
    popupId: popupId,
    variant: variant,
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle,
    setOpen: setOpen,
    onMouseLeave: onMouseLeave,
    _childPopupState: _childPopupState,
    _setChildPopupState: _setChildPopupState
  };
  return popupState;
}
/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function anchorRef(_ref2) {
  var setAnchorEl = _ref2.setAnchorEl;
  return function (el) {
    if (el) setAnchorEl(el);
  };
}
/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindTrigger(_ref3) {
  var _ref4;

  var isOpen = _ref3.isOpen,
      open = _ref3.open,
      popupId = _ref3.popupId,
      variant = _ref3.variant;
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, variant === 'popover' ? 'aria-owns' : 'aria-describedby', isOpen ? popupId : null), (0, _defineProperty2["default"])(_ref4, 'aria-haspopup', variant === 'popover' ? true : undefined), (0, _defineProperty2["default"])(_ref4, "onClick", open), _ref4;
}
/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindToggle(_ref5) {
  var _ref6;

  var isOpen = _ref5.isOpen,
      toggle = _ref5.toggle,
      popupId = _ref5.popupId,
      variant = _ref5.variant;
  return _ref6 = {}, (0, _defineProperty2["default"])(_ref6, variant === 'popover' ? 'aria-owns' : 'aria-describedby', isOpen ? popupId : null), (0, _defineProperty2["default"])(_ref6, 'aria-haspopup', variant === 'popover' ? true : undefined), (0, _defineProperty2["default"])(_ref6, "onClick", toggle), _ref6;
}
/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindHover(_ref7) {
  var _ref8;

  var isOpen = _ref7.isOpen,
      open = _ref7.open,
      onMouseLeave = _ref7.onMouseLeave,
      popupId = _ref7.popupId,
      variant = _ref7.variant;
  return _ref8 = {}, (0, _defineProperty2["default"])(_ref8, variant === 'popover' ? 'aria-owns' : 'aria-describedby', isOpen ? popupId : null), (0, _defineProperty2["default"])(_ref8, 'aria-haspopup', variant === 'popover' ? true : undefined), (0, _defineProperty2["default"])(_ref8, "onMouseEnter", open), (0, _defineProperty2["default"])(_ref8, "onMouseLeave", onMouseLeave), _ref8;
}
/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindPopover(_ref9) {
  var isOpen = _ref9.isOpen,
      anchorEl = _ref9.anchorEl,
      close = _ref9.close,
      popupId = _ref9.popupId,
      onMouseLeave = _ref9.onMouseLeave;
  return {
    id: popupId,
    anchorEl: anchorEl,
    open: isOpen,
    onClose: close,
    onMouseLeave: onMouseLeave
  };
}
/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindMenu = bindPopover;
/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

exports.bindMenu = bindMenu;

function bindPopper(_ref10) {
  var isOpen = _ref10.isOpen,
      anchorEl = _ref10.anchorEl,
      popupId = _ref10.popupId;
  return {
    id: popupId,
    anchorEl: anchorEl,
    open: isOpen
  };
}

function getPopup(_ref11) {
  var popupId = _ref11.popupId;
  return popupId && typeof document !== 'undefined' ? document.getElementById(popupId) // eslint-disable-line no-undef
  : null;
}

function isElementInPopup(element, popupState) {
  var anchorEl = popupState.anchorEl,
      _childPopupState = popupState._childPopupState;
  return isAncestor(anchorEl, element) || isAncestor(getPopup(popupState), element) || _childPopupState != null && isElementInPopup(element, _childPopupState);
}

function isAncestor(parent, child) {
  if (!parent) return false;

  while (child) {
    if (child === parent) return true;
    child = child.parentElement;
  }

  return false;
}

function hasChanges(state, nextState) {
  for (var key in nextState) {
    if (state.hasOwnProperty(key) && state[key] !== nextState[key]) {
      return true;
    }
  }

  return false;
}