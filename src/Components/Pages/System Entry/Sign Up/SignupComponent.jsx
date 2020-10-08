import React from "react";

// Components
import Center from "../../../Elements/Aligns/Center";
import LoaderBtn from "../../../Elements/Buttons/LoaderBtn";
import LabeledInput from "../../../Elements/Inputs/LabeledInput/LabeledInput";
import Background from "../../../Elements/Background/Background";

// Styles
// the styles are imported in LoginComponent.jsx

const SignupComponent = ({
  onChangeCredentials,
  onSubmitForm,
  username,
  email,
  password,
  isLoading,
}) => {
  return (
    <>
      <Background className="bg-system-entry" />
      <Center>
        <div className="container">
          <div className="container-system-entry">
            <div className="columns columns-sm-reverse" style={{ padding: 0 }}>
              <div className="column-7 column-sm-12">
                <form className="form-system-entry" onSubmit={onSubmitForm}>
                  <LabeledInput
                    input-props={{
                      type: "text",
                      id: "username",
                      name: "username",
                      className: "input-form-system-entry",
                      minLength: "1",
                      autoComplete: "off",
                      onChange: onChangeCredentials,
                      value: username,
                      required: true,
                    }}
                    label-props={{
                      htmlFor: "username",
                      className: "label-floating label-form-system-entry",
                      text: "Username:",
                    }}
                  />
                  <LabeledInput
                    input-props={{
                      type: "email",
                      id: "email",
                      name: "email",
                      className: "input-form-system-entry",
                      minLength: "1",
                      autoComplete: "off",
                      onChange: onChangeCredentials,
                      value: email,
                      required: true,
                    }}
                    label-props={{
                      htmlFor: "email",
                      className: "label-floating label-form-system-entry",
                      text: "Email:",
                    }}
                  />
                  <LabeledInput
                    input-props={{
                      type: "password",
                      id: "password",
                      name: "password",
                      className: "input-form-system-entry",
                      minLength: "8",
                      autoComplete: "off",
                      onChange: onChangeCredentials,
                      value: password,
                      required: true,
                    }}
                    label-props={{
                      htmlFor: "email",
                      className: "label-floating label-form-system-entry",
                      text: "Password:",
                    }}
                  />

                  <div className="field field-system-entry">
                    <LoaderBtn
                      button-props={{
                        type: "submit",
                        value: "Signup now",
                        className: `button-outline button-rounded button-block${
                          isLoading ? " disabled" : ""
                        } text-upper text-bold`,
                        disabled: isLoading,
                      }}
                      isopen={isLoading}
                    />
                  </div>
                </form>
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
