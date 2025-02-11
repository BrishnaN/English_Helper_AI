import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Assessment: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          marginTop: "200px",
          width: "600px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Card.Body>
          <h1 className="mb-3">📚 Assessment Test</h1>
          <p className="mb-4">
            Welcome! This assessment will help us understand your current
            English proficiency level. Right now, we are focusing on the
            **Beginner Level**, but intermediate and advanced lessons will be
            available soon! 🎉
          </p>
          <p className="text-muted">
            Click **"Start Your Lesson!"** to begin your first lesson.
          </p>

          {/* Button to start the beginner lesson */}
          <Link to="/beginnerPage">
            <Button variant="primary" size="lg">
              Start Your Lesson 🚀
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Assessment;
