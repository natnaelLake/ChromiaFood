import React from "react";
import Login from "./LoginComponent";
import { useNavigate } from "react-router-dom";

const LoginLoadable = () => {
  const navigate = useNavigate();
  const handleLoginLinkClick = () => {
    navigate("/register");
  };
  return <Login handleSignupLinkClick={handleLoginLinkClick} />;
};

export default LoginLoadable;
