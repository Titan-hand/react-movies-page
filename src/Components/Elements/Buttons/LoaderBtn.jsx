import React from "react";
import PropTypes from "prop-types";
import classNameDetect from "../../Helpers/classNameDetect";
import Loader from "../Loaders/Loader";

const LoaderBtn = (props) => {
  const propsButton = props["button-props"];
  return (
    <button
      {...propsButton}
      className={`button button-primary${classNameDetect(propsButton)}`}
    >
      {props.isopen ? <Loader isopen size="25px" /> : propsButton.value}
    </button>
  );
};

LoaderBtn.propTypes = {
  "button-props": PropTypes.object.isRequired,
  isopen: PropTypes.bool,
};

export default LoaderBtn;
