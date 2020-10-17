import React from "react";
import Loader from "./Loader";
import ContainerCenter from "../Containers/ContainerCenterComponent";

export default function LoaderPage() {
  return (
    <ContainerCenter className="loader-page">
      <Loader isopen size="90px"/>
    </ContainerCenter>
  );
}
