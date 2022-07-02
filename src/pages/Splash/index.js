import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="flex flex-1 flex-col bg-yellow-500">
      <Link to="/sign-in">sign-in</Link>
      <Link to="/sign-up">sign-up</Link>
    </div>
  );
};

export default Splash;
