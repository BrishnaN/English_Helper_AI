import React, { useState } from "react";
import "./FeelingsPage.css";
import { Link } from "react-router-dom";

const Feelings: { english: string; persian: string }[] = [
  { english: "Happy", persian: "خوشحال" },
  { english: "Sad", persian: "غمگین" },
  { english: "Angry", persian: "عصبانی" },
  { english: "Surprised", persian: "متعجب" },
  { english: "Scared", persian: "ترسیده" },
  { english: "Confused", persian: "گیج" },
  { english: "Excited", persian: "هیجان‌زده" },
  { english: "Tired", persian: "خسته" },
  { english: "Bored", persian: "بی‌حوصله" },
  { english: "Shy", persian: "خجالتی" },
];

const feelingImages: { [key: string]: string } = {
  Happy: "😊",
  Sad: "😢",
  Angry: "😡",
  Surprised: "😲",
  Scared: "😨",
  Confused: "😕",
  Excited: "🤩",
  Tired: "😴",
  Bored: "🥱",
  Shy: "😳",
};

const FeelingsPage: React.FC = () => {
  const [currentFeelingIndex, setCurrentFeelingIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentFeelingIndex > 0) {
      setCurrentFeelingIndex(currentFeelingIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentFeelingIndex < Feelings.length - 1) {
      setCurrentFeelingIndex(currentFeelingIndex + 1);
    }
  };

  const playAudio = (): void => {
    const feeling = Feelings[currentFeelingIndex].english;
    const utterance = new SpeechSynthesisUtterance(feeling);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const currentFeeling = Feelings[currentFeelingIndex];
  const currentEmoji = feelingImages[currentFeeling.english] || "❓";

  return (
    <div className="container">
      <h1 className="heading">Learn Feelings!</h1>
      <div className="frame1">
        <button onClick={playAudio} className="audioButton">
          🗣️
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentFeelingIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="feelings">
          <span className="emoji">{currentEmoji}</span>
          <div className="feeling">
            <span className="english">{currentFeeling.english}</span>
            <span className="persian">{currentFeeling.persian}</span>
          </div>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentFeelingIndex === Feelings.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>
      <Link to="/beginnerPage">Go Back to Beginner Page</Link>
    </div>
  );
};

export default FeelingsPage;
