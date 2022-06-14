import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase.utils";
import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import "../css/SignInForm.scss";
import Button, { BUTTON_TYPES_CALSSES } from "./Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email");
      }
      if (error.code === "auth/user-not-found") {
        alert("User not found");
      }
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <h1>Sign-in with your email and password.</h1>
      <form>
        <FormInput
          type="email"
          label="Email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="Password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPES_CALSSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
