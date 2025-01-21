import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to English_Helper_AI App</h1>
      <p>Click the button below to take the assessment.</p>

      {/* Button to navigate to the assessment page */}
      <a href="/assessment">
        <button>Take Assessment</button>
      </a>
    </div>
  );
}

export default Home;
