import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

const AssessmentPage = () => {
  const startGame = (level: string) => {
    console.log(`${level} Level Selected!`);
    // Redirect or handle logic based on level
  };

  return (
    <div style={{ textAlign: "center", marginTop: "300px" }}>
      <h1>Welcome to English_Helper_AI App</h1>
      <p>Click the button below to take the assessment.</p>

      {/* Button to navigate to the assessment page */}
      <Link to="/assessment">
        <button>Take Assessment</button>
      </Link>
    </div>
  );
};

export default AssessmentPage;
