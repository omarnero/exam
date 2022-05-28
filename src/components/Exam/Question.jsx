import React from "react";
import { Card } from "react-bootstrap";
import classes from "./Question.module.css";
import { useContext, useEffect, useState } from "react";
import Context from "../context/examContext";
function Question(props) {
  const [rall, setRall] = useState([]);
  const { addAns, randEle } = useContext(Context);
  let allquestion = [props.q1, props.q2, props.q3, props.q4];
  useEffect(() => {
    randEle(allquestion, 3);
    setRall(allquestion);
  }, []);
  randEle(allquestion, 3);

  const [q1, q2, q3, q4] = rall;
  const radioChangeHandler = (e) => {
    // console.log(e.target.value);
    addAns(e.target.value);
  };
  console.log();
  return (
    <form>
      <Card.Body>
        <Card.Title>
          {props.index + 1}.{props.title} ?
        </Card.Title>
        <div className={classes.que} onChange={radioChangeHandler}>
          <input type="radio" id={q1} name={props.title} value={q1} />
          <label htmlFor={q1} disabled>
            {q1}
          </label>
          <br />
          <input type="radio" id={q2} name={props.title} value={q2} />
          <label htmlFor={q2}>{q2}</label>
          <br />
          <input type="radio" id={q3} name={props.title} value={q3} />
          <label htmlFor={q3}>{q3}</label>
          <br />
          <input type="radio" id={q4} name={props.title} value={q4} />
          <label htmlFor={q4}>{q4}</label>
        </div>
      </Card.Body>
    </form>
  );
}

export default Question;
