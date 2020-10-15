import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";

export default function Container({ children, ...props }) {
  return (
    <div {...props} className={`container${classNameDetect(props)}`}>
      {children}
    </div>
  );
}
