import React, { useState } from "react";
import "./WeMoPage.css";
import { Link } from "react-router-dom";

const daysOfWeek: { english: string; persian: string }[] = [
  { english: "Sunday", persian: "یکشنبه" },
  { english: "Monday", persian: "دوشنبه" },
  { english: "Tuesday", persian: "سه‌شنبه" },
  { english: "Wednesday", persian: "چهارشنبه" },
  { english: "Thursday", persian: "پنج‌شنبه" },
  { english: "Friday", persian: "جمعه" },
  { english: "Saturday", persian: "شنبه" },
];

const monthsOfYear: { english: string; persian: string }[] = [
  { english: "January", persian: "ژانویه" },
  { english: "February", persian: "فوریه" },
  { english: "March", persian: "مارس" },
  { english: "April", persian: "آوریل" },
  { english: "May", persian: "مه" },
  { english: "June", persian: "ژوئن" },
  { english: "July", persian: "ژوئیه" },
  { english: "August", persian: "اوت" },
  { english: "September", persian: "سپتامبر" },
  { english: "October", persian: "اکتبر" },
  { english: "November", persian: "نوامبر" },
  { english: "December", persian: "دسامبر" },
];

const WeekMonthPage: React.FC = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);

  const handlePreviousDay = (): void => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const handleNextDay = (): void => {
    if (currentDayIndex < daysOfWeek.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const handlePreviousMonth = (): void => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = (): void => {
    if (currentMonthIndex < monthsOfYear.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const playAudio = (text: string): void => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const currentDay = daysOfWeek[currentDayIndex];
  const currentMonth = monthsOfYear[currentMonthIndex];

  return (
    <div>
      <h1 className="heading">Learn Days and Months!</h1>
      <div>
        {/* Days of the Week Box */}
        <div className="frame1">
          <button
            onClick={() => playAudio(currentDay.english)}
            className="audioButton"
          >
            🗣️
          </button>
          <button
            onClick={handlePreviousDay}
            className={`navButton ${currentDayIndex === 0 ? "hidden" : ""}`}
          >
            ←
          </button>
          <div className="daysOfWeek">
            <span className="english">{currentDay.english}</span>
            <span className="persian">{currentDay.persian}</span>
          </div>
          <button
            onClick={handleNextDay}
            className={`navButton ${
              currentDayIndex === daysOfWeek.length - 1 ? "hidden" : ""
            }`}
          >
            →
          </button>
        </div>

        {/* Months of the Year Box */}
        <div className="frame1">
          <button
            onClick={() => playAudio(currentMonth.english)}
            className="audioButton"
          >
            🗣️
          </button>
          <button
            onClick={handlePreviousMonth}
            className={`navButton ${currentMonthIndex === 0 ? "hidden" : ""}`}
          >
            ←
          </button>
          <div className="monthsOfYear">
            <span className="english">{currentMonth.english}</span>
            <span className="persian">{currentMonth.persian}</span>
          </div>
          <button
            onClick={handleNextMonth}
            className={`navButton ${
              currentMonthIndex === monthsOfYear.length - 1 ? "hidden" : ""
            }`}
          >
            →
          </button>
        </div>
      </div>
      <Link to="/beginnerPage">Go Back to Beginner Page</Link>
    </div>
  );
};

export default WeekMonthPage;
