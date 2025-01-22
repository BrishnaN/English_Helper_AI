import React from "react";
import { Button, Form } from "react-bootstrap";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

const AssessmentPage = () => {
  const startGame = (level: string) => {
    console.log(`${level} Level Selected!`);
    // Redirect or handle logic based on level
  };

  return (
    <div>
      <h1>Welcome to English_Helper_AI App</h1>
      <p>Click the button below to take the assessment.</p>

      {/* Button to navigate to the assessment page */}
      <a href="/assessment">
        <button>Take Assessment</button>
      </a>
    </div>
  );
};

export default AssessmentPage;
