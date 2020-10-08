import React from "react";
import PropTypes from "prop-types";

import nameIconDetect from "../../Helpers/nameIconDetect";
import bgColorDetect from "../../Helpers/bgColorDetect";
import classNameDetect from "../../Helpers/classNameDetect";

const InputIcon = (props) => {
  return (
    <>
      <div
        className={`field-addon${classNameDetect(props)}`}
        style={bgColorDetect(props)}
      >
        <i className={`fa fa-${nameIconDetect(props)}`}></i>
      </div>
    </>
  );
};

InputIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default InputIcon;
