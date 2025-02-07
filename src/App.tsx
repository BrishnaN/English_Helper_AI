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
import "./App.css";
import { useNavigate } from "react-router-dom";
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
    <Router>
      <Routes>
        <div className="body">
          {/* Navigation */}
          <nav>
            <Link to="/">Home</Link> | <Link to="/signup">Sign Up</Link> |{" "}
            <Link to="/login">Login</Link>
          </nav>

          {/* Routes */}

          <Routes>
            <Route path="English_Helper_AI/" element={<Home />} />
            <Route path="English_Helper_AI/signup" element={<SignUp />} />
            <Route path="English_Helper_AI/login" element={<Login />} />
            <Route
              path="English_Helper_AI/assessmentPage"
              element={<AssessmentPage />}
            />
            <Route
              path="English_Helper_AI/assessment"
              element={<Assessment />}
            />
            <Route
              path="English_Helper_AI/forgot-password"
              element={<ForgotPassword />}
            />
            <Route
              path="English_Helper_AI/beginnerPage"
              element={<BeginnerPage />}
            />
            <Route
              path="English_Helper_AI/lettersPage"
              element={<LettersPage />}
            />
            <Route
              path="English_Helper_AI/numbersPage"
              element={<NumbersPage />}
            />
            <Route
              path="English_Helper_AI/familyPage"
              element={<FamilyPage />}
            />
            <Route
              path="English_Helper_AI/colorsPage"
              element={<ColorsPage />}
            />
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
      </Routes>
    </Router>
  );
};

export default App;
