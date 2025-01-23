import React from "react";
import { Button, Form } from "react-bootstrap";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

const BeginnerPage = () => {
  const startGame = (level: string) => {
    console.log(`${level} Level Selected!`);
    // Redirect or handle logic based on level
  };
  return (
    <div>
      <h1> Beginner Page!</h1>
      {/* Button to navigate to the letters page */}
      <a href="/lettersPage">
        <button>Letters</button>
      </a>
    </div>
  );
};

export default BeginnerPage;
