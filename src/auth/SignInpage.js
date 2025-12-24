import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const getSignInErrorMessage = (error) => {
  switch (error.code) {
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Invalid email or password.";

    case "auth/network-request-failed":
      return "Network error. Please check your connection.";

    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";

    default:
      return "Something went wrong. Please try again.";
  }
};

export const SignInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signInError, setSignInError] = useState("");

  const navigate = useNavigate();

  const onClickSignIn = async () => {
    try {
      setSignInError("");
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      navigate("/");
    } catch (error) {
            setSignInError(getSignInErrorMessage(error));
        }
  };

  return (
    <div className="full-height-page">
      <div className="centered-container space-before">
        {signInError && (
          <div className="error-message">{signInError}</div>
        )}

        <input
          type="email"
          value={emailValue}
          placeholder="Email address"
          className="full-width space-after"
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <input
          type="password"
          value={passwordValue}
          placeholder="Password"
          className="full-width space-after"
          onChange={(e) => setPasswordValue(e.target.value)}
        />

        <button
          className="full-width"
          onClick={onClickSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
