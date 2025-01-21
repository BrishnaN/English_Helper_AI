import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Home from "./components/Home";
import Assessment from "./components/Assessment";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LessonPage from "./components/LessonPage";
import "./App.css";
import "./styles.css";

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
    <Router>
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
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert API Key Here"
            onChange={changeKey}
          />
          <br />
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </Router>
  );
};

export default App;
