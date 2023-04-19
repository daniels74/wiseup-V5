//import { Box } from "@mui/material";
import React from "react";

//Components
import Login from "../../../components/Authentication/Login"
import Register from "../../../components/Authentication/Register"

const LoginRegister = ({t, setAuth, toggleLoginReg}) => {
  return (
    <>
      {t ? (
        <Login setAuth={setAuth} toggleLoginReg={toggleLoginReg} />
      ) : (
        <Register setAuth={setAuth} toggleLoginReg={toggleLoginReg} />
      )}
    </>
  );
};

export default LoginRegister;
