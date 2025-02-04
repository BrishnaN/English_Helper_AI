import React, { useState } from "react";
import "./ColorsPage.css";
import { Link } from "react-router-dom"; // Import the Link component

const Numbers: string[] = [
    "Red = سرخ",
    "Blue = آبی",
    "Green = سبز",
    "Yellow = زرد",
    "Black = سیاه",
    "White = سفید",
    "Pink = گلابی",
    "Purple = بنفش",
    "Orange = نارنجی",
    "Brown = قهوه‌ای",
    "Gray = خاکی",
    "Silver = نقره‌ای",
];

const colorMap: { [key: string]: string } = {
    "Red": "#ff0000", // Red
    "Blue": "#1569c7", // Blue (adjusted to true blue)
    "Green": "#0b6623", // Green
    "Yellow": "#fff200", // Yellow
    "Black": "#000000", // Black
    "White": "#ffffff", // White
    "Pink": "#ff69b4", // Pink
    "Purple": "#800080", // Purple
    "Orange": "#ffa500", // Orange
    "Brown": "#7c4700", // Brown (adjusted to a more classic brown)
    "Gray": "#808080", // Gray
    "Silver": "#c0c0c0", // Silver
};

const NumbersPage: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentLetterIndex < Numbers.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };

  const playAudio = (): void => {
    const number: string = Numbers[currentLetterIndex]; // Get the full color as a string
    const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(number); 
    utterance.lang = "en-US"; 
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  // Extract the color name from the current string
  const currentColorWord = Numbers[currentLetterIndex].split(" = ")[0];
  const frameColor = colorMap[currentColorWord] || "#ffffff"; // Default to white if color is not in map
  const arrowColor = frameColor; // Use the same color for the arrows

  return (
    <div className="container">
      <h1 className="heading">Learn Colors!</h1>
      <div
        className="frame"
        style={{ backgroundColor: frameColor }} // Dynamically change the background color
      >
        <button onClick={playAudio} className="audioButton">
          👂
        </button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentLetterIndex === 0 ? "hidden" : ""}`}
          style={{
            backgroundColor: arrowColor, // Set background color of arrows
            color: "#17edd0", // Ensure text color is white for visibility
          }}
        >
          ←
        </button>
        <div className="letterContainer">
          <span className="letter">{Numbers[currentLetterIndex]}</span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentLetterIndex === Numbers.length - 1 ? "hidden" : ""
          }`}
          style={{
            backgroundColor: arrowColor, // Set background color of arrows
            color: "#17edd0", // Ensure text color is white for visibility
          }}
        >
          →
        </button>
      </div>
      <Link to="/beginnerPage">Go Back to Beginner Page</Link>
    </div>
  );
};

export default NumbersPage;
