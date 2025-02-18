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
      <h1> 📚 Welcome to English Helper AI App 📚</h1>
      <p>Click the button below to take the assessment.</p>

      {/* Button to navigate to the assessment page */}
      <Link to="/assessment">
        <button
          style={{
            background: "#79e8e8",
            color: "black",
            borderRadius: "30px",
          }}
        >
          Take Assessment
        </button>
      </Link>
    </div>
  );
};

export default AssessmentPage;
