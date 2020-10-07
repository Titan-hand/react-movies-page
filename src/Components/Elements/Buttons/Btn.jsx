import React from "react";
import PropTypes from "prop-types";
import classNameDetect from "../../Helpers/classNameDetect";

const Btn = (props) => {
  return (
    <button
      type={props.type || "button"}
      {...props}
      className={`button button-primary${classNameDetect(props)}`}
    >
      {props.value}
    </button>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Btn;
