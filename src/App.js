import "bootstrap/dist/css/bootstrap.min.css";
import { ExamProvider } from "./components/context/examContext";
import MainHeader from "./components/headers/MainHeader";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exam from "./components/Exam/Exam";
import Result from "./components/Result/Result";
import NotFound from "./NotFound";
function App() {
  return (
    <ExamProvider>
      <Router>
        <div className="app">
          <MainHeader />
          <main>
            <Routes>
              <Route path="/" exact element={<Login />}></Route>
              <Route path="/exam" element={<Exam />}></Route>
              <Route path="/result" element={<Result />}></Route>
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ExamProvider>
  );
}

export default App;
