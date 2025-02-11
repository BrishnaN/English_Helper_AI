import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TimePage.css";

// Time-related vocabulary (10 key time questions)
const timeVocabulary = [
  { time: "3:00", phrase: "It's 3 o'clock" },
  { time: "3:15", phrase: "It's quarter past 3" },
  { time: "3:30", phrase: "It's half past 3" },
  { time: "3:45", phrase: "It's quarter to 4" },
  { time: "4:00", phrase: "It's 4 o'clock" },
  { time: "5:00", phrase: "It's 5 o'clock" },
  { time: "6:30", phrase: "It's half past 6" },
  { time: "7:15", phrase: "It's quarter past 7" },
  { time: "8:45", phrase: "It's quarter to 9" },
  { time: "9:00", phrase: "It's 9 o'clock" },
];

// Function to shuffle the answers randomly
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Quiz component to display a random time and four answer options
const TimeQuiz: React.FC = () => {
  // Randomly select a time question
  const randomIndex = Math.floor(Math.random() * timeVocabulary.length);
  const correctTime = timeVocabulary[randomIndex];

  // Select three incorrect answers randomly from the list
  const incorrectAnswers = timeVocabulary
    .filter((item) => item.time !== correctTime.time)
    .slice(0, 3);

  // Combine the correct answer with the incorrect ones and shuffle them
  const options = shuffleArray([
    correctTime.phrase,
    ...incorrectAnswers.map((item) => item.phrase),
  ]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [selectedOptionColor, setSelectedOptionColor] = useState<string | null>(
    null
  );

  const handleAnswerSelection = (answer: string): void => {
    setSelectedAnswer(answer);
    if (answer === correctTime.phrase) {
      setQuizResult("Correct!");
      setSelectedOptionColor("green"); // Set correct answer color
    } else {
      setQuizResult("Incorrect! Try again.");
      setSelectedOptionColor("red"); // Set incorrect answer color
    }
  };

  const [nextButtonVisible, setNextButtonVisible] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setNextButtonVisible(false); // Hide the Next button again after moving to next question
    setSelectedAnswer(null); // Reset answer selection
    setQuizResult(null); // Reset result
    setSelectedOptionColor(null); // Reset color
  };

  const handleEnableNextButton = () => {
    setNextButtonVisible(true); // Show Next button after answering
  };

  return (
    <div className="quizContainer">
      <h2>Quiz: What time is this?</h2>
      <div className="clockVisual">
        <p>Time to guess: {correctTime.time}</p>
        {/* Optionally, add an image or other representation of the time */}
      </div>
      <div className="quizOptions">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              handleAnswerSelection(option);
              handleEnableNextButton(); // Enable next question button after selection
            }}
            className={`quizButton ${
              selectedAnswer === option ? "selected" : ""
            }`}
            style={{
              backgroundColor:
                selectedAnswer === option ? selectedOptionColor : "",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {quizResult && <p className="quizResult">{quizResult}</p>}
      {nextButtonVisible && (
        <button className="nextButton" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

// Time Learning Page
const TimePage: React.FC = () => {
  const [currentTimeIndex, setCurrentTimeIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentTimeIndex > 0) {
      setCurrentTimeIndex(currentTimeIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentTimeIndex < timeVocabulary.length - 1) {
      setCurrentTimeIndex(currentTimeIndex + 1);
    }
  };

  const playAudio = (): void => {
    const timePhrase = timeVocabulary[currentTimeIndex].phrase;
    const utterance = new SpeechSynthesisUtterance(timePhrase);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Learn Time!</h1>
      <div className="frame1">
        <button onClick={playAudio} className="audioButton">
          👂
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentTimeIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="timeContainer">
          <span className="timeEnglish">
            {timeVocabulary[currentTimeIndex].phrase}
          </span>
          <br />
          <span className="timeNumber">
            {/* Display the numerical time */}
            {timeVocabulary[currentTimeIndex].time}
          </span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentTimeIndex === timeVocabulary.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>

      <div className="quizSection">
        <TimeQuiz />
      </div>

      <Link to="/beginnerPage" className="returnLink">
        Go Back to Beginner Page
      </Link>
    </div>
  );
};

export default TimePage;
