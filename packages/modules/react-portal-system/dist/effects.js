"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var PortalEffects = (callUseEffect, state, dispatch) => {
  /**
   * @function OpenModal
   */
  callUseEffect(() => {
    document.body.classList.add("portal-attached");
    return state.isBodyOverflowHidden ? state.isActive ? document.body.classList.add("overflowHidden") : document.body.classList.remove("overflowHidden") : null;
  }, []);
};

var _default = PortalEffects;
exports.default = _default;