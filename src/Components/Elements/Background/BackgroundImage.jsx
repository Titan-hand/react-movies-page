import React from "react";
import classNameDetect from "../../Helpers/classNameDetect";

const BackgroundImage = (props) => {
  const bgImage = {
  	background: props.image ? `linear-gradient(180deg, rgba(0, 0, 0, 0.726), #21212178), url(${props.image})` : "transparent",
  	backgroundSize: "cover",
  	filter: "blur(0)"
  }

  return <div className={`bg${classNameDetect(props)}`} style={bgImage}></div>;
};

export default BackgroundImage;
