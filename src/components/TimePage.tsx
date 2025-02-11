import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const timePhrases = [
  {
    english: "A quarter past",
    dari: "یک ربع بعد از",
    audioEng: "audio/quarter_past_en.mp3",
    audioDari: "audio/quarter_past_dari.mp3",
  },
  {
    english: "A quarter to",
    dari: "یک ربع مانده به",
    audioEng: "audio/quarter_to_en.mp3",
    audioDari: "audio/quarter_to_dari.mp3",
  },
  {
    english: "Half past",
    dari: "نیم بعد از",
    audioEng: "audio/half_past_en.mp3",
    audioDari: "audio/half_past_dari.mp3",
  },
  {
    english: "O'clock",
    dari: "ساعت",
    audioEng: "audio/oclock_en.mp3",
    audioDari: "audio/oclock_dari.mp3",
  },
];

const TimePage = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [practiceQuestion, setPracticeQuestion] =
    useState("What time is 3:15?");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === "a quarter past three") {
      setFeedback("Correct!");
    } else {
      setFeedback("Try again!");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Learning Time in English
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {timePhrases.map((phrase, index) => (
          <Card key={index} className="p-4 text-center">
            <CardContent>
              <p className="text-lg font-semibold">
                {phrase.english} - {phrase.dari}
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <audio controls src={phrase.audioEng} />
                <audio controls src={phrase.audioDari} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded-lg">
        <h2 className="text-xl font-bold">Practice</h2>
        <p className="mt-2">{practiceQuestion}</p>
        <input
          type="text"
          className="border p-2 rounded w-full mt-2"
          placeholder="Write your answer here..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <Button onClick={checkAnswer} className="mt-2">
          Submit
        </Button>
        {feedback && <p className="mt-2 font-bold">{feedback}</p>}
      </div>
    </div>
  );
};

export default TimePage;
