import React from "react";
import nameIconDetect from "../../Helpers/nameIconDetect";
import bgColorDetect from "../../Helpers/bgColorDetect";

const InputIcon = (props) => {
  return (
    <>
      <div className="field-addon" style={bgColorDetect(props)}>
        <i className={`fa fa-${nameIconDetect(props)}`}></i>
      </div>
    </>
  );
};

export default InputIcon;
