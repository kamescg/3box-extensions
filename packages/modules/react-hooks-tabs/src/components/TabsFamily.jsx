import { useContext, useEffect } from "react";
import Context from "../Context";

export default ({
  children,
  tabGroup,
  ...props
}) => {
  const state = useContext(Context)

  /**
   * @function TemplateLoader
   * @description Load global tabs templates.
   */
  useEffect( () => {
    state.dispatch({
      type: 'registerTabsFamily',
      tabGroup: tabGroup
    })
  }, [state.dispatch])

  return children
};

