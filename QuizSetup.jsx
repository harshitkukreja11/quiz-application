import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizSetup() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(5);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Save quiz setup to localStorage or context
    localStorage.setItem("quizSetup", JSON.stringify({ name, category, difficulty, numQuestions }));
    navigate("/quiz");
  };

  return (
    <div>
      <h1>Set Up Quiz</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="9">General Knowledge</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
      </select>

      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <input type="number" min="1" max="20" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default QuizSetup;
