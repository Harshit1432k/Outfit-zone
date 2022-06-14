import React from "react";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase.utils";
import "../css/Authentication.scss";

import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
