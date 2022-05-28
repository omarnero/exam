import { createContext, useState, useEffect } from "react";
const Context = createContext();
export const ExamProvider = ({ children }) => {
  let [arr, setArr] = useState([]);
  let [login, setLogin] = useState(false);
  let [res, setRes] = useState(false);
  const correct = [
    "cairo",
    "corona",
    "green",
    "mesaspy",
    "mosocow",
    "tranmb",
    "moktam",
  ];
  useEffect(() => {
    let val = localStorage.getItem("login");
    if (val) {
      setLogin(true);
    }
  }, [login]);

  let result = 0;
  arr.forEach((item) => {
    correct.forEach((cor) => {
      if (item === cor) result++;
    });
  });
  let per = ((result / 7) * 100).toFixed(1);
  const addAns = (item) => {
    setArr([item, ...arr]);
  };
  const randEle = (allquestion, num) => {
    let rand = Math.ceil(Math.random() * num);
    for (let i = 0; i < allquestion.length; i++) {
      let temp = allquestion[i];
      allquestion[i] = allquestion[rand];
      allquestion[rand] = temp;
    }
  };
  return (
    <Context.Provider
      value={{
        addAns,
        randEle,
        arr,
        setLogin,
        login,
        res,
        setLogin,
        setRes,
        per,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Context;
