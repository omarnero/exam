import React from "react";
import Context from "../context/examContext";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
const Navigation = (props) => {
  const { res } = useContext(Context);
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/exam"
              className={classes.link}
            >
              Exam
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && res && (
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/result"
              className={classes.link}
            >
              Result
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/"
              className={classes.link}
            >
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
