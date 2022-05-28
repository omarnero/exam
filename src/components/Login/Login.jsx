import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import Context from "../context/examContext";
function Login() {
  const { setLogin } = useContext(Context);
  const name = useRef("");
  const [vname, setVname] = useState(true);
  const email = useRef("");
  const [vemail, setVEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [vpassword, setVpassword] = useState(true);
  const [enable, setEnable] = useState(true);
  setLogin(false);
  localStorage.removeItem("login");
  const nameHandler = () => {
    let nname = name.current.value;
    setVname(false);
    if (nname.trim().length >= 8) {
      setVname(true);
    }
  };
  const emailHandler = (e) => {
    let nemail = email.current.value;
    setVEmail(false);
    if (nemail.trim().includes("@")) {
      setVEmail(true);
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setVpassword(false);
    if (password.length > 4) {
      setVpassword(true);
    }
  };
  useEffect(() => {
    if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
      if (vname && vemail && vpassword) {
        setEnable(false);
      }
    }
  }, [vname, vemail, vpassword, enable]);
  const sumbitHandler = () => {
    localStorage.setItem("login", "1");
    setLogin(true);
  };

  setTimeout(() => {
    setPassword("");
    email.current.value = "";
    name.current.value = "";
  }, 60000);
  return (
    <div className={classes.form}>
      <form>
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John mead"
            onChange={nameHandler}
            ref={name}
          />
          {!vname && <p>The name must be at least eight characters long</p>}
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input
            type="Email"
            id="email"
            placeholder="johnmead@exam.eu"
            onChange={emailHandler}
            ref={email}
          />
          {!vemail && <p>The email must contain the @ symbol</p>}
        </div>
        <div className={classes.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="123456"
            onChange={passwordHandler}
            value={password}
          />
          {!vpassword && <p>Password must contain at least 6 characters</p>}
        </div>

        {!enable && (
          <button className={classes.btn} onClick={sumbitHandler}>
            <Link to="/exam" className={classes.link}>
              Go to exam
            </Link>
          </button>
        )}
      </form>
    </div>
  );
}
export default Login;
