import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { useContext } from "react";
import Context from "../context/examContext";
const MainHeader = (props) => {
  const { login } = useContext(Context);
  return (
    <header className={classes["main-header"]}>
      <h1>Exam</h1>
      <Navigation isLoggedIn={login} onLogout={!login} />
    </header>
  );
};

export default MainHeader;
