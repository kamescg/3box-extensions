const PortalEffects = (callUseEffect, state, dispatch) => {

  /**
   * @function OpenModal
   */
  callUseEffect( () => {
    document.body.classList.add("portal-attached")
    return state.isBodyOverflowHidden
    ? state.isActive
      ? document.body.classList.add("overflowHidden")
      : document.body.classList.remove("overflowHidden")
    : null
  }, [])

}

export default PortalEffects