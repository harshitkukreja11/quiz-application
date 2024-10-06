import { useEffect, useState } from "react";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setup = JSON.parse(localStorage.getItem("quizSetup"));
    const { category, difficulty, numQuestions } = setup;

    fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
        setLoading(false);
      });

    const difficultyTimes = { easy: 20, medium: 15, hard: 10 };
    setTimer(difficultyTimes[difficulty]);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    } else if (questions.length > 0 && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetTimer();
    }
  }, [timer]);

  const resetTimer = () => {
    const setup = JSON.parse(localStorage.getItem("quizSetup"));
    const difficultyTimes = { easy: 20, medium: 15, hard: 10 };
    setTimer(difficultyTimes[setup.difficulty]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetTimer();
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</p>
      <p>{timer} seconds remaining</p>
      <p>{questions[currentQuestionIndex].question}</p>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
}

export default QuizPage;
