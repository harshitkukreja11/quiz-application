import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizSetup from "./components/QuizSetup";
import QuizPage from "./components/QuizPage";
import Leaderboard from "./components/Leaderboard";







function App(){
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizSetup />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

