import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Home from "./components/Home.tsx";
import Assessment from "./components/Assessment.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";
import AssessmentPage from "./components/AssessmentPage.tsx";
import ForgotPassword from "./components/ForgotPassword.tsx";
import BeginnerPage from "./components/BeginnerPage.tsx";
import LettersPage from "./components/LettersPage.tsx";
import NumbersPage from "./components/NumbersPage.tsx";
import FamilyPage from "./components/FamilyPage.tsx";
import ColorsPage from "./components/ColorsPage.tsx";
import "./App.css";

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
        <Link to="/english_helper_ai/">Home</Link> |{" "}
        <Link to="/english_helper_ai/signup">Sign Up</Link> |{" "}
        <Link to="/english_helper_ai/login">Login</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/english_helper_ai/" element={<Home />} />
        <Route path="/english_helper_ai/signup" element={<SignUp />} />
        <Route path="/english_helper_ai/login" element={<Login />} />
        <Route
          path="/english_helper_ai/assessmentPage"
          element={<AssessmentPage />}
        />
        <Route path="/english_helper_ai/assessment" element={<Assessment />} />
        <Route
          path="/english_helper_ai/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/english_helper_ai/beginnerPage"
          element={<BeginnerPage />}
        />
        <Route
          path="/english_helper_ai/lettersPage"
          element={<LettersPage />}
        />
        <Route
          path="/english_helper_ai/numbersPage"
          element={<NumbersPage />}
        />
        <Route path="/english_helper_ai/familyPage" element={<FamilyPage />} />
        <Route path="/english_helper_ai/colorsPage" element={<ColorsPage />} />
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
git;
