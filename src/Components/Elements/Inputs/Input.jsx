import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";

const In = (props) => (
  <input {...props} className={`input${classNameDetect(props)}`} />
);

export default In;
