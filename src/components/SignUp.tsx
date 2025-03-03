import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = () => {
    if (!name || !username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Store the user's credentials in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log("Account Created:", { name, username, email, password });
    alert("Account successfully created!");

    // Clear the form
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    // Navigate to the login page after successful signup
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px", color:"black"}}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            border:"none",
            width: "250px",
            marginBottom: "10px",
            backgroundColor: "#79e8e8",
            borderRadius: "30px"
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            border:"none",
            width: "250px",
            marginBottom: "10px",
            backgroundColor: "#79e8e8",
            borderRadius: "30px"
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            border:"none",
            width: "250px",
            marginBottom: "10px",
            backgroundColor: "#79e8e8",
            borderRadius: "30px"
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "250px", backgroundColor: "#79e8e8", color:"black", borderRadius: "30px", border: "none"}}
        />
      </div>
      <button
        onClick={handleSignUp}
        style={{
          padding: "10px 20px",
          backgroundColor: "#79e8e8",
          color: "black",
          border: "none",
          cursor: "pointer",
          borderRadius: "30px",
          marginBottom: "15px",
        }}
      >
        Create Account
      </button>
      <p style={{ marginTop: "20px", color: "black"}}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "black", textDecoration: "none", }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
