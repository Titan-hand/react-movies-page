import React from "react";
import PropTypes from "prop-types";
import classNameDetect from "../../Helpers/classNameDetect";

const Loader = (props) => {
  const sizeLoader = {
    width: props.size,
    height: props.size,
  };
  const border = (size) => size + "px solid #fff";
  const borderColor = "#fff transparent #fff transparent";
  return props.isopen ? (
    <div className={`lds-dual-ring${classNameDetect(props)}`}>
      <div
        style={{
          ...sizeLoader,
          border: parseInt(sizeLoader.width) <= 35 ? border(3) : border(6),
          borderColor: borderColor,
        }}
      />
    </div>
  ) : null;
};

Loader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isopen: PropTypes.bool,
};
export default Loader;
