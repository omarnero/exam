import React from "react";
import { Alert } from "react-bootstrap";
import Context from "../context/examContext";
import { useContext } from "react";
function Result() {
  const { per } = useContext(Context);
  return (
    <Alert variant="success" className="mb5">
      <Alert.Heading>{per}%</Alert.Heading>
      <p>
        We congratulate you on your success and we wish you continued
        excellence, prosperity and progress. We hope that you will achieve more
        success in your knowledge and practical life. We hope that we have
        provided you with a distinguished service
      </p>
    </Alert>
  );
}

export default Result;
