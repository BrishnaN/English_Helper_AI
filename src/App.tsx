import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import GreetAndBasicPhrases from "./components/GreetAndBasicPhrases.tsx";
import "./App.css";
//import "./styles.css";
import FeelingsPage from "./components/FeelingsPage.tsx";
import WeekMonthPage from "./components/WeMoPage.tsx";
import TimePage from "./components/TimePage.tsx";

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
          <Route path="/assessmentPage" element={<AssessmentPage />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/beginnerPage" element={<BeginnerPage />} />
          <Route path="/lettersPage" element={<LettersPage />} />
          <Route path="/numbersPage" element={<NumbersPage />} />
          <Route path="/familyPage" element={<FamilyPage />} />
          <Route path="/colorsPage" element={<ColorsPage />} />
          <Route path="/feelingsPage" element={<FeelingsPage />} />
          <Route path="/WeekMonthPage" element={<WeekMonthPage />} />
          <Route path="/timePage" element={<TimePage />} />
          <Route path="/GreetAndBasicPhrases" element={<GreetAndBasicPhrases />} />
        </Routes>
        {/* API Key Form */}
        <div className="form-container">
          <Form.Control
            type="password"
            placeholder="Insert API Key Here"
            onChange={changeKey}
            style={{ width: "300px", background: "#79e8e8", color: "black" }}
          />
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Router>
  );
};

export default App;