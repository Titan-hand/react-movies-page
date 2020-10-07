import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";
const LabelForm = (props) => {
  return (
    <label {...props} className={`label-form${classNameDetect(props)}`}>
      {props.children}
    </label>
  );
};

export default LabelForm;
