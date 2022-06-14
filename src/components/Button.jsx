import React from "react";
import "../css/Button.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../css/Button.jsx";

export const BUTTON_TYPES_CALSSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CALSSES.base) =>
  ({
    [BUTTON_TYPES_CALSSES.base]: BaseButton,
    [BUTTON_TYPES_CALSSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CALSSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...others }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...others}>{children}</CustomButton>;
};

export default Button;
