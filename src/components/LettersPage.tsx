import React, { useState } from "react";
import "./LettersPage.css";

const letters: string[] = ["A a", "B b", "C c", "D d", "E e", "F f", "G g"]; // Add more letter pairs as needed

const LettersPage: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentLetterIndex < letters.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };

  const playAudio = (): void => {
    const letter = letters[currentLetterIndex][0]; // Extract the uppercase letter
    const utterance = new SpeechSynthesisUtterance(letter.toLowerCase()); // Use lowercase for pronunciation
    utterance.lang = "en-US"; // Adjust language if needed
    utterance.rate = 0.8; // Control the speed of the speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Learn English Letters</h1>
      <div className="frame">
        <button
          onClick={handlePrevious}
          className={`navButton ${currentLetterIndex === 0 ? "hidden" : ""}`}
        >
          &lt;
        </button>
        <div className="letterContainer">
          <span className="letter">{letters[currentLetterIndex]}</span>
          <button onClick={playAudio}>🔊</button>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentLetterIndex === letters.length - 1 ? "hidden" : ""
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default LettersPage;
