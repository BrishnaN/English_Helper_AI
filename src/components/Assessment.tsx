import React from "react";
import { Button, Form } from "react-bootstrap";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

function Assessment() {
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  return (
    <div>
      <h1>Assessment Test</h1>
      <p>Here is where the assessment content will go.</p>
      {/* You can add your assessment questions or functionality here */}
      {/* Button to navigate to the assessment page */}
      <a href="/beginnerPage">
        <button>Start your lesson!</button>
      </a>
    </div>
  );
}

export default Assessment;
