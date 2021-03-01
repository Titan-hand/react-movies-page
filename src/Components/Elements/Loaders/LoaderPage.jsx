import React from "react";
import Loader from "./Loader";
import ContainerCenter from "../Containers/ContainerCenterComponent";

const styles = {
  marginTop: "1.2rem",
  letterSpacing: "0.5px",
};

export default function LoaderPage() {
  return (
    <ContainerCenter className="loader-page">
      <Loader isopen size="90px" />
      <h4 style={styles}>Verify user token</h4>
    </ContainerCenter>
  );
}
