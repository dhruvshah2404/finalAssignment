"use strict";

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

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let eventOrAnchorElWarned = false;
const initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: null,
  hovered: false,
  _childPopupState: null
};
exports.initCoreState = initCoreState;

function createPopupState({
  state,
  setState: _setState,
  parentPopupState,
  popupId,
  variant
}) {
  const {
    isOpen,
    setAnchorElUsed,
    anchorEl,
    hovered,
    _childPopupState
  } = state; // use lastState to workaround cases where setState is called multiple times
  // in a single render (e.g. because of refs being called multiple times)

  let lastState = state;

  const setState = nextState => {
    if (hasChanges(lastState, nextState)) {
      _setState(lastState = _objectSpread({}, lastState, {}, nextState));
    }
  };

  const setAnchorEl = _anchorEl => {
    setState({
      setAnchorElUsed: true,
      anchorEl: _anchorEl
    });
  };

  const toggle = eventOrAnchorEl => {
    if (isOpen) close();else open(eventOrAnchorEl);
  };

  const open = eventOrAnchorEl => {
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

    if (typeof document === 'object' && document.activeElement) {
      document.activeElement.blur();
    }

    const newState = {
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

  const close = () => {
    if (_childPopupState) _childPopupState.close();
    if (parentPopupState) parentPopupState._setChildPopupState(null);
    setState({
      isOpen: false,
      hovered: false
    });
  };

  const setOpen = (nextOpen, eventOrAnchorEl) => {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else close();
  };

  const onMouseLeave = event => {
    const relatedTarget = event.relatedTarget;

    if (hovered && !isElementInPopup(relatedTarget, popupState)) {
      close();
    }
  };

  const _setChildPopupState = _childPopupState => setState({
    _childPopupState
  });

  const popupState = {
    anchorEl,
    setAnchorEl,
    setAnchorElUsed,
    popupId,
    variant,
    isOpen,
    open,
    close,
    toggle,
    setOpen,
    onMouseLeave,
    _childPopupState,
    _setChildPopupState
  };
  return popupState;
}
/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function anchorRef({
  setAnchorEl
}) {
  return el => {
    if (el) setAnchorEl(el);
  };
}
/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindTrigger({
  isOpen,
  open,
  popupId,
  variant
}) {
  return {
    // $FlowFixMe
    [variant === 'popover' ? 'aria-owns' : 'aria-describedby']: isOpen ? popupId : null,
    'aria-haspopup': variant === 'popover' ? true : undefined,
    onClick: open
  };
}
/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindToggle({
  isOpen,
  toggle,
  popupId,
  variant
}) {
  return {
    // $FlowFixMe
    [variant === 'popover' ? 'aria-owns' : 'aria-describedby']: isOpen ? popupId : null,
    'aria-haspopup': variant === 'popover' ? true : undefined,
    onClick: toggle
  };
}
/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindHover({
  isOpen,
  open,
  onMouseLeave,
  popupId,
  variant
}) {
  return {
    // $FlowFixMe
    [variant === 'popover' ? 'aria-owns' : 'aria-describedby']: isOpen ? popupId : null,
    'aria-haspopup': variant === 'popover' ? true : undefined,
    onMouseEnter: open,
    onMouseLeave
  };
}
/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


function bindPopover({
  isOpen,
  anchorEl,
  close,
  popupId,
  onMouseLeave
}) {
  return {
    id: popupId,
    anchorEl,
    open: isOpen,
    onClose: close,
    onMouseLeave
  };
}
/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


const bindMenu = bindPopover;
/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

exports.bindMenu = bindMenu;

function bindPopper({
  isOpen,
  anchorEl,
  popupId
}) {
  return {
    id: popupId,
    anchorEl,
    open: isOpen
  };
}

function getPopup({
  popupId
}) {
  return popupId && typeof document !== 'undefined' ? document.getElementById(popupId) // eslint-disable-line no-undef
  : null;
}

function isElementInPopup(element, popupState) {
  const {
    anchorEl,
    _childPopupState
  } = popupState;
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
  for (let key in nextState) {
    if (state.hasOwnProperty(key) && state[key] !== nextState[key]) {
      return true;
    }
  }

  return false;
}