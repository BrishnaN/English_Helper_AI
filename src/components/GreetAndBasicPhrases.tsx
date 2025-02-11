import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GreetAndBasicPhrases.css";

const phrases = [

    { 
      text: "Hello. / Hi. / Hey: These are simple expressions commonly used when greeting someone for the first time. (Hello) is the most polite, (hi) is more casual, and (hey) is the most relaxed and informal.", 
      persian: "این‌ها عبارات ساده‌ای هستند که معمولاً هنگام اولین دیدار با کسی استفاده می‌شوند. 'سلام' رسمی‌ترین است، 'های' غیررسمی‌تر است، و 'هی' صمیمی‌ترین و غیررسمی‌ترین حالت است." 
    },

  
  { text: "Good morning", persian: "صبح بخیر" },
  { text: "Good afternoon", persian: "بعد از چاشت بخیر" },
  { text: "Good evening", persian: "عصر بخیر" },
  { text: "How are you?", persian: "چه حال دارید؟" },
  { text: "I'm fine, thank you.", persian: "من خوبم، تشکر." },
  { text: "What's your name?", persian: "نام شما چیست؟" },
  { text: "My name is...", persian: "نام من ... است" },
  { text: "Nice to meet you.", persian: "خوشحالم از ملاقات با شما." },
  { text: "Please", persian: "لطفا" },
  { text: "Thank you", persian: "تشکر" },
  { text: "You're welcome", persian: "خواهش میکنم" },
  { text: "Excuse me", persian: "ببخشید" },
  { text: "I'm sorry", persian: "متاسفم" },
  { text: "Goodbye", persian: "خداحافظ" },
];

const GreetAndBasicPhrases: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    if (currentPhraseIndex > 0) {
      setCurrentPhraseIndex(currentPhraseIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPhraseIndex < phrases.length - 1) {
      setCurrentPhraseIndex(currentPhraseIndex + 1);
    }
  };

  const playAudio = (): void => {
    const phrase = phrases[currentPhraseIndex].text;
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="heading">Basic English Phrases</h1>
      <div className="frame">
        <button onClick={playAudio} className="audioButton">👂</button>
        <button
          onClick={handlePrevious}
          className={`navButton ${currentPhraseIndex === 0 ? "hidden" : ""}`}
        >
          ←
        </button>
        <div className="phraseContainer">
          <span className="phraseText">{phrases[currentPhraseIndex].text}</span>
          <br />
          <span className="phrasePersian">{phrases[currentPhraseIndex].persian}</span>
        </div>
        <button
          onClick={handleNext}
          className={`navButton ${
            currentPhraseIndex === phrases.length - 1 ? "hidden" : ""
          }`}
        >
          →
        </button>
      </div>
      <Link to="/beginnerPage" className="returnLink">Go Back to Beginner Page</Link>
    </div>
  );
};

export default GreetAndBasicPhrases;
