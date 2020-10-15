import React from "react";
import Layout from "../../../../../Elements/Layout/LayoutComponent";
import Container from "../../../../../Elements/Containers/ContainerComponent";
import NavbarLinks from "../../NavbarLinks";


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
    </Layout>
  );
};

export default DashboardComponent;
