import React from "react";

// Components
import Center from "../../../Elements/Aligns/Center";
import Background from "../../../Elements/Background/Background";
import LoginForm from "./Elements/LoginForm";

// Styles
import "../Styles/styles.css";

const LoginComponent = (props) => {
  return (
    <>
      <Background className="bg-system-entry" />
      <Center>
        <div className="container">
          <div className="container-system-entry">
            <div className="columns columns-sm-reverse" style={{ padding: 0 }}>
              <div className="column-7 column-sm-12">
                <LoginForm {...props} />
              </div>

              <div className="column-5 column-sm-12">
                <div className="container-coverpage container-center-elements relative">
                  <div className="bg-system-entry-coverpage"></div>
                  <h1 className="title title-system-entry">
                    Login with your account
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
};

export default LoginComponent;
