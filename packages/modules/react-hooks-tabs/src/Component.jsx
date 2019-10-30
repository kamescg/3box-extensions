import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Component = ({
  isOpen,
  close,
  Content,
  className,
  activeClassName,
  backgroundClassName,
  label,

  labelssss,
  layoutDefault,
  position,
  positionStyle,
  styled,
  styledBackground,
  styledModal,
  ...props
}) => {

  return (
    <>

    </>
  )
};

Component.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  open: PropTypes.func,
  Content: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  backgroundClassName: PropTypes.string
};

export default Component;
