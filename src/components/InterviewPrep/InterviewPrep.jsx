import React, { useState } from 'react';

const InterviewPrep = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * questions.length);
      } while (randomIndex === currentIndex);
      return randomIndex;
    });
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Question:</h2>
          <p className="card-text">{questions[currentIndex].question}</p>
          {showAnswer ? (
            <div className="mt-3">
              <h3>Answer:</h3>
              <p>{questions[currentIndex].answer}</p>
              <button className="btn btn-secondary me-2" onClick={() => setShowAnswer(false)}>
                Hide Answer
              </button>
            </div>
          ) : (
            <button className="btn btn-primary mt-3" onClick={() => setShowAnswer(true)}>
              Show Answer
            </button>
          )}
          <button className="btn btn-success mt-3 ms-2" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
