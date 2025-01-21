import React from "react";
import { useNavigate } from "react-router-dom"; // To navigate to other pages
import "./LessonPage.css";

const LessonPage = () => {
  const navigate = useNavigate();

  // Function to start the game or lesson
  const startGame = () => {
    console.log("Game Started!");
    // Redirect to the game or lesson page
    navigate("/game"); // Example: Redirecting to the game page
  };

  // Function to handle level selection
  const handleLevelSelect = (level: string) => {
    console.log(`${level} level selected`);
    // Navigate to the lessons page for the selected level
    navigate(`/level/${level}`);
  };

  return (
    <div className="lesson-page">
      <h1 className="page-title">
        Welcome to the English_Helper_AI Lesson Page!
      </h1>

      <div className="buttons-container">
        <button
          className="level-button beginner"
          onClick={() => handleLevelSelect("beginner")}
        >
          Beginner
        </button>
        <button
          className="level-button intermediate"
          onClick={() => handleLevelSelect("intermediate")}
        >
          Intermediate
        </button>
        <button
          className="level-button advanced"
          onClick={() => handleLevelSelect("advanced")}
        >
          Advanced
        </button>
      </div>

      <button className="start-button" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default LessonPage;
