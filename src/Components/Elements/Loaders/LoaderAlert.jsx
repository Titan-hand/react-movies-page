import React from "react";
import Loader from "./Loader";

function LoaderAlert({ text }) {
  return (
    <div className="loader-alert">
      <h3 className="loader-alert-text">{text}</h3>
      <Loader isopen size="50px" />
    </div>
  );
}

export default LoaderAlert;
