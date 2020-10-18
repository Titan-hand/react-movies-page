import React from "react";

import LoaderBtn from "../../../../Elements/Buttons/LoaderBtn";
import LabeledInput from "../../../../Elements/Inputs/LabeledInput/LabeledInput";

const LoginForm = ({
  onChangeCredentials,
  onSubmitForm,
  email,
  password,
  isLoading,
}) => {
  return (
    <form className="form-system-entry" onSubmit={onSubmitForm}>
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
          htmlFor: "password",
          className: "label-floating label-form-system-entry",
          text: "Password:",
        }}
      />

      <div className="field field-system-entry">
        <LoaderBtn
          button-props={{
            type: "submit",
            value: "Login now",
            className: `button-outline button-rounded button-block${
              isLoading ? " disabled" : ""
            } text-upper text-bold`,
            disabled: isLoading,
          }}
          isopen={isLoading}
        />
      </div>
    </form>
  );
};

export default LoginForm;
