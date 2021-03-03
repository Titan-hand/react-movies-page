import React from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../../../../Elements/Inputs/LabeledInput/LabeledInput";
import LoaderBtn from "../../../../Elements/Buttons/LoaderBtn";

export default function SignupForm({
  onChangeCredentials,
  onSubmitForm,
  username,
  email,
  password,
  isLoading,
}) {
  return (
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
          placeholder: "Username",
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
            value: "Signup now",
            className: `button-outline button-rounded button-block${
              isLoading ? " disabled" : ""
            } text-upper text-bold`,
            disabled: isLoading,
          }}
          isopen={isLoading}
        />
        <Link to="/login" className="link-system-entry">
          <small>Do you already have an account?</small>
          <i className="fa fa-arrow-right" />
        </Link>
      </div>
    </form>
  );
}
