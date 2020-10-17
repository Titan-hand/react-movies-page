import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";

export default function ContainerCenter({ children, ...props }) {
  return (
    <div {...props} className={`container-center${classNameDetect(props)}`}>
      {children}
    </div>
  );
}
