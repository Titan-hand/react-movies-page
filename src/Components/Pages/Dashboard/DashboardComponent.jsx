import React from "react";

import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import NavbarLinks from "./Elements/NavbarLinks";
import Routers from "./Elements/Routers";

const DashboardComponent = () => {
  return (
    <Layout>
      <Container className="dashboard-container">
        <NavbarLinks />
        <div className="columns">
          <div className="column-5"></div>
          <div className="column-7"></div>
        </div>
      </Container>

      <Routers />
    </Layout>
  );
};

export default DashboardComponent;
