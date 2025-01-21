import React from "react";

const LessonPage = () => {
  const startGame = () => {
    console.log("Game Started!");
    // Redirect to game page or start logic
  };

  return (
    <div>
      <h1>Welcome to the Game!</h1>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={startGame}
      >
        Start Game
      </button>
    </div>
  );
};

export default LessonPage;
