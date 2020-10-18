import React from "react";

// Components
import Center from "../../../Elements/Aligns/Center";
import Background from "../../../Elements/Background/Background";
import SignupForm from "./Components/SignupForm";

// Styles
// the styles are imported in LoginComponent.jsx

const SignupComponent = (props) => {
  return (
    <>
      <Background className="bg-system-entry" />
      <Center>
        <div className="container">
          <div className="container-system-entry">
            <div className="columns columns-sm-reverse" style={{ padding: 0 }}>
              <div className="column-7 column-sm-12">
                <SignupForm {...props} />
              </div>

              <div className="column-5 column-sm-12">
                <div className="container-coverpage container-center-elements relative">
                  <div className="bg-system-entry-coverpage"></div>
                  <h1 className="title title-system-entry">
                    Signup with your account
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

export default SignupComponent;
