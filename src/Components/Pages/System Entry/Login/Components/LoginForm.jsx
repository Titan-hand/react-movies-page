import React from "react";
import { Link } from "react-router-dom";
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
          placeholder: "Email",
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
          placeholder: "Password",
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
        <Link to="/signup" className="link-system-entry">
          <small>Sign up here</small>
          <i className="fa fa-arrow-right" />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
