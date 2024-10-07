//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"; // This is your home page component
import Assessment from "./components/Assessment"; // This is your assessment page component
import "./styles.css"; // Import the CSS file
function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home page </Link>
        {/* <Link to="/assessment">Assessment page</Link> */}
      </nav>

      {/* Routes for the different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </div>
  );
}

export default App;
