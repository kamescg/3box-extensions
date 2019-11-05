/* --- Global --- */
import React from "react";
import { PortalContext } from 'react-portal-system'

export default ({portal, children, ...props }) =>(
<PortalContext>
{portal => (
  <span onClick={() => portal.openPanel({ ...props })}>
    {children}
  </span>
)}
</PortalContext>
)