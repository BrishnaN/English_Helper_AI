import React, { useState } from "react";
import "./LettersPage.css";

const letters: string[] = [
  "A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", 
  "K k", "L l", "M m", "N n", "O o", "P p", "Q q", "R r", "S s", "T t", 
  "U u", "V v", "W w", "X x", "Y y", "Z z"
];

const LettersPage: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentLetterIndex > 0) {
      console.log("Previous button clicked");
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentLetterIndex < letters.length - 1) {
      console.log("Next button clicked");
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };

  const playAudio = (): void => {
    const letter: string = letters[currentLetterIndex][0]; // Extract the uppercase letter
    const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(letter.toLowerCase());
    utterance.lang = "en-US"; // Adjust language if needed
    utterance.rate = 0.8; // Control the speed of the speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Learn English Letters</h1>
      <div className="frame">
        <button onClick={playAudio} className="audioButton">
          👂
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentLetterIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="letterContainer">
          <span className="letter">{letters[currentLetterIndex]}</span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentLetterIndex === letters.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LettersPage;
