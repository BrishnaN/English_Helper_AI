import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./BeginnerPage.css"; // Custom styles for extra beauty

const BeginnerPage: React.FC = () => {
  return (
    <Container>
      <h1 className="title">🌟 Beginner Lessons 🌟</h1>
      <p className="subtitle">Choose a lesson to start learning!</p>
      <div className="button-grid">
        {[
          { name: "Letters", path: "/lettersPage" },
          { name: "Numbers", path: "/NumbersPage" },
          { name: "Family", path: "/FamilyPage" },
          { name: "Colors", path: "/ColorsPage" },
          { name: "Feelings", path: "/feelingsPage" },
          { name: "Days/Months", path: "/WeekMonthPage" },
          { name: "Time", path: "/timePage" },
        ].map((item, index) => (
          <Link to={item.path} key={index} className="button-link">
            <Button className="lesson-button">{item.name}</Button>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BeginnerPage;
