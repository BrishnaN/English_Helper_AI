import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FamilyPage.css";

const familyMembers = [
  { english: "Father", persian: "پدر" },
  { english: "Mother", persian: "مادر" },
  { english: "Brother", persian: "برادر" },
  { english: "Sister", persian: "خواهر" },
  { english: "Grandfather", persian: "پدرکلان" },
  { english: "Grandmother", persian: "مادرکلان" },
  { english: "Uncle", persian: "ماما / کاکا " },
  { english: "Aunt", persian: "خاله / عمه" },
  { english: "Cousin", persian: "پسر/دخترکاکا یا ماما" },
];

const FamilyPage: React.FC = () => {
  const [currentFamilyIndex, setCurrentFamilyIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentFamilyIndex > 0) {
      setCurrentFamilyIndex(currentFamilyIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentFamilyIndex < familyMembers.length - 1) {
      setCurrentFamilyIndex(currentFamilyIndex + 1);
    }
  };

  const playAudio = (): void => {
    const familyMember = familyMembers[currentFamilyIndex].english;
    const utterance = new SpeechSynthesisUtterance(familyMember);
    utterance.lang = "en-US"; // Adjust language if needed
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Learn Family Members</h1>
      <div className="frame1">
        <button onClick={playAudio} className="audioButton">
          👂
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentFamilyIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="familyContainer">
          <span className="letter1">
            {familyMembers[currentFamilyIndex].english}
          </span>
          <br />
          <span className="letter1">
            {familyMembers[currentFamilyIndex].persian}
          </span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentFamilyIndex === familyMembers.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>
      <Link to="/beginnerPage" className="returnLink">
        Go Back to Beginner Page
      </Link>
    </div>
  );
};

export default FamilyPage;
