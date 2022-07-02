import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col">
      <Link to="/splash">splash screen</Link>
      <Link to="/sign-up">sign-up screen</Link>
    </div>
  );
};

export default SignIn;
