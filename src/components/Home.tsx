import React from "react";
import "./BeginnerPage.css";
function Home() {
  const startGame = (level: string) => {
    console.log(`${level} Level Selected!`);
    // Redirect or handle logic based on level
  };
  return (
    <div className="lesson-page">
      <h1 className="lesson-title"> 📚 Welcome to English Helper AI 📚</h1>
      <p className="lesson-description">
        Learn English at your pace. Select your desired level and begin your
        journey!
      </p>
      <div className="lesson-levels">
        <div
          className="lesson-card beginner"
          onClick={() => startGame("Beginner")}
        >
          <h3>Beginner</h3>
          <p>
            Start with the basics of English: vocabulary, speaking, and grammar.
          </p>
        </div>
        <div
          className="lesson-card intermediate"
          onClick={() => startGame("Intermediate")}
        >
          <h3>Intermediate</h3>
          <p>
            Build upon your skills with reading, listening, and advanced
            grammar.
          </p>
        </div>
        <div
          className="lesson-card advanced"
          onClick={() => startGame("Advanced")}
        >
          <h3>Advanced</h3>
          <p>
            Master English with complex speaking, writing, and comprehension
            lessons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
