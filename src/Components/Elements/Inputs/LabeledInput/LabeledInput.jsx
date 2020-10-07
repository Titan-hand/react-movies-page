import React from "react";
import PropTypes from "prop-types";
import In from "../Input";
import LabelForm from "../../LabelForm/LabelForm";
import classNameDetect from "../../../Helpers/classNameDetect";

const LabeledInput = (props) => {
  const labelProps = props["label-props"];
  const inputProps = props["input-props"];
  const isLabelFloating = inputProps.value ? " label-floating-fixed" : "";

  return (
    <div className="field">
      <In {...inputProps} />

      <LabelForm
        {...labelProps}
        className={`${classNameDetect(labelProps)}${isLabelFloating}`}
      >
        {labelProps.text}
      </LabelForm>
    </div>
  );
};

LabeledInput.propTypes = {
  "label-props": PropTypes.object.isRequired,
  "input-props": PropTypes.object.isRequired,
};
export default LabeledInput;
