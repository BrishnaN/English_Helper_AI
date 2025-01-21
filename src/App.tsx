import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Home from "./components/Home.tsx";
import Assessment from "./components/Assessment.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";
import LessonPage from "./components/LessonPage.tsx";
import "./App.css";
//import "./styles.css";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

const App: React.FC = () => {
  const [key, setKey] = useState<string>(keyData);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="body">
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Sign Up</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lessonPage" element={<LessonPage />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>

      {/* API Key Form */}
      <div className="form-container">
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
          style={{ width: "300px" }}
        />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
