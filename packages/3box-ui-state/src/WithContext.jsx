import React from "react";
import Context from "./Context";

const withContext = ({ children }) => (
  <Context.Consumer>{children}</Context.Consumer>
);

export default withContext;
