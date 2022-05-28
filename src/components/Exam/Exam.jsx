import { Card, Button, Alert } from "react-bootstrap";
import React from "react";
import classes from "./Exam.module.css";
import Question from "./Question";
import questions from "./data";
import { useContext, useEffect, useState } from "react";
import Context from "../context/examContext";
function Exam() {
  const { arr, randEle, setRes, res, per, login } = useContext(Context);

  const [valid, setValid] = useState(true);
  const [rall, setRall] = useState([]);
  let allquestion = questions;
  useEffect(() => {
    randEle(allquestion, 6);
    setRall(allquestion);
  }, []);
  useEffect(() => {
    if (arr.length > 6) {
      setValid(false);
    }
  }, [arr, valid]);

  const clickHandler = () => {
    setRes(true);
  };
  if (login) {
    if (rall.length === 0) {
      return <p>looading</p>;
    } else {
      return (
        <>
          <Card className="mb5">
            <Card.Header className={classes.exam} as="h5">
              Exam
            </Card.Header>
            <Question
              title={rall[0].title}
              q1={rall[0].data[0]}
              q2={rall[0].data[1]}
              q3={rall[0].data[2]}
              q4={rall[0].data[3]}
              index={0}
            />
            {arr.length > 0 && (
              <Question
                title={rall[1].title}
                q1={rall[1].data[0]}
                q2={rall[1].data[1]}
                q3={rall[1].data[2]}
                q4={rall[1].data[3]}
                index={1}
              />
            )}
            {arr.length > 1 && (
              <Question
                title={rall[2].title}
                q1={rall[2].data[0]}
                q2={rall[2].data[1]}
                q3={rall[2].data[2]}
                q4={rall[2].data[3]}
                index={2}
              />
            )}
            {arr.length > 2 && (
              <Question
                title={rall[3].title}
                q1={rall[3].data[0]}
                q2={rall[3].data[1]}
                q3={rall[3].data[2]}
                q4={rall[3].data[3]}
                index={3}
              />
            )}
            {arr.length > 3 && (
              <Question
                title={rall[4].title}
                q1={rall[4].data[0]}
                q2={rall[4].data[1]}
                q3={rall[4].data[2]}
                q4={rall[4].data[3]}
                index={4}
              />
            )}
            {arr.length > 4 && (
              <Question
                title={rall[5].title}
                q1={rall[5].data[0]}
                q2={rall[5].data[1]}
                q3={rall[5].data[2]}
                q4={rall[5].data[3]}
                index={5}
              />
            )}
            {arr.length > 5 && (
              <Question
                title={rall[6].title}
                q1={rall[6].data[0]}
                q2={rall[6].data[1]}
                q3={rall[6].data[2]}
                q4={rall[6].data[3]}
                index={6}
              />
            )}
          </Card>
          {res && (
            <Alert variant="success" className={classes.mt2}>
              This is a <bold>{per} %</bold> grade
            </Alert>
          )}
          <Button
            className={classes.btn}
            size="lg"
            disabled={valid}
            onClick={clickHandler}
          >
            send answer
          </Button>
        </>
      );
    }
  } else {
    <p>loading</p>;
  }
}
export default Exam;
