import React from "react";
import { FormInputLabel, Group, Input } from "../css/FormInput";

const FormInput = ({ label, ...others }) => {
  return (
    <Group>
      <Input {...others} />
      {label && (
        <FormInputLabel shrink={others.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
