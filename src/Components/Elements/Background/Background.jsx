import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";

const Background = (props) => {
  return <div className={`bg${classNameDetect(props)}`}></div>;
};

export default Background;
