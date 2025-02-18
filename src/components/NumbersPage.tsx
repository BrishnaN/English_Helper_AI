import React, { useState } from "react";
import "./LettersPage.css";
import { Link } from "react-router-dom"; // Import the Link component

const Numbers: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "7",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

const NumbersPage: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentLetterIndex > 0) {
      console.log("Previous button clicked");
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentLetterIndex < Numbers.length - 1) {
      console.log("Next button clicked");
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };

  const playAudio = (): void => {
    const number: string = Numbers[currentLetterIndex]; // Get the full number as a string
    const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
      number // Pass the full number
    );
    utterance.lang = "en-US"; // Adjust language if needed
    utterance.rate = 0.8; // Control the speed of the speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Learn English Letters</h1>
      <div className="frame1">
        <button onClick={playAudio} className="audioButton">
          🗣️
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentLetterIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="letterContainer">
          <span className="letter2">{Numbers[currentLetterIndex]}</span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentLetterIndex === Numbers.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>
      <Link to="/beginnerPage">Go Back to Beginner Page</Link>
    </div>
  );
};

export default NumbersPage;
