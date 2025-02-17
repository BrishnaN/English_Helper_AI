import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GreetAndBasicPhrases.css";

const phrases = [
  {
    text: "Hello. / Hi. / Hey:\nThese are simple expressions commonly used when greeting someone for the first time. \"Hello\" is the most polite, \"hi\" is more casual, and \"hey\" is the most relaxed and informal.",
    persian: "این‌ها عبارات ساده‌ای هستند که معمولاً هنگام اولین دیدار با کسی استفاده می‌شوند. \"سلام\" رسمی‌ترین است، \"هی\" غیررسمی‌تر است، و \"هی\" صمیمی‌ترین و غیررسمی‌ترین حالت است.",
    examples: {
      english: [
        "\"Hello, Mr. Ahmad.\" [Formal]",
        "\"Hi, Ali.\" [Less Formal]",
        "\"Hey, Ali!\" [Informal]"
      ],
      persian: [
        "\"سلام، آقای احمد.\" [رسمی]",
        "\"هی (سلام) علی.\" [غیررسمی‌تر]",
        "\"هی (سلام) علی!\" [غیررسمی]"
      ]
    },
  },
  {
    text: "Good morning:\nThis phrase is used to say hello to someone in the morning. You can use it to start a conversation or just to be kind when you pass someone.",
    persian: "این عبارت برای گفتن سلام به کسی در صبح استفاده می‌شود. می‌توانید از آن برای شروع مکالمه یا فقط برای مهربانی وقتی از کنار کسی رد می‌شوید استفاده کنید.",
    examples: {
      english: ["\"Good morning, Pedram\""],
      persian: ["\"صبح بخیر، آقای پدرام\""]
    }
  },
  {
    "text": "Good afternoon:\nThis is a way to greet someone in the afternoon, just like how you say 'good morning' in the morning.",
    "persian": "این عبارت برای سلام دادن به کسی در عصر استفاده می‌شود، دقیقاً مثل وقتی که در صبح می‌گویید صبح بخیر.",
    "examples": {
      "english": ["\"Good afternoon, Ahmad.\""],
      "persian": ["\"عصر بخیر، احمد.\""]
    }
  },
  {
    "text": "Good evening:\nThis phrase is used to greet someone in the evening. It’s used the same way as 'good morning' and 'good afternoon.'",
    "persian": "این عبارت برای سلام کردن به کسی در شب استفاده می‌شود. همان‌طور که از عبارت‌های «صبح بخیر» یا «عصر بخیر» استفاده می‌کنید، این عبارت نیز برای شب به کار می‌رود.",
    "examples": {
      "english": ["\"Good evening, Sara.\""],
      "persian": ["\"شام بخیر، سارا.\""]
    }
  },
  {
    "text": "Nice to meet you:\nThis is a friendly expression used when you meet someone for the first time. It is usually said right after 'Hello' or after someone shares their name with you.",
    "persian": "این یک عبارت دوستانه است که وقتی برای اولین بار کسی را ملاقات می‌کنید، استفاده می‌شود. معمولاً بعد از \"سلام\" یا بعد از این‌که کسی نام خود را با شما در میان می‌گذارد، گفته می‌شود.",
    "examples": {
      "english": ["A: \"Hello, my name is Brishna.\"", "B: \"Nice to meet you.\""],
      "persian": ["الف: \"سلام، نام من برشنا است.\"", "ب: \"خوشحال شدم که با شما آشنا شدم.\""]
    }
  },
  {
    "text": "My name is ___:\nThis is an expression used to share your name with someone. In formal settings, you should say both your first name and last name. In informal or casual situations, it’s common to share just your first name or even a nickname.",
    "persian": "این یک عبارت برای معرفی نام شما به کسی است. در موقعیت‌های رسمی، بهتر است نام و نام خانوادگی خود را بگویید. در موقعیت‌های غیررسمی یا دوستانه، معمولاً فقط نام کوچک یا حتی لقب خود را معرفی می‌کنید.",
    "examples": {
      "english": [
        "\"My name is Khadija Mohammadi.\" [Formal]",
        "\"My name is Khadija.\" [Informal]"
      ],
      "persian": [
        "\"نام من خدیجه محمدی است.\" [رسمی]",
        "\"نام من خدیجه است.\" [غیررسمی]"
      ]
    }
  },
  {
    "text": "I am ___:\nThis phrase can be used in many ways. For instance, you can use it to share your age, job, personality, or how you are feeling. It’s a helpful way to describe yourself or your situation.",
    "persian": "این عبارت در موارد مختلفی استفاده می‌شود. برای مثال، می‌توان از آن برای بیان سن، شغل، ویژگی شخصیتی یا احساسات خود استفاده کرد. این یک روش مفید برای توصیف خودتان یا وضعیتتان است.",
    "examples": {
      "english": [
        "\"I am 19 years old.\" [Age]",
        "\"I am a teacher.\" [Occupation]",
        "\"I am shy.\" [Personality Trait]",
        "\"I am happy.\" [State of Being]"
      ],
      "persian": [
        "\"من ۱۹ ساله هستم.\" [سن]",
        "\"من معلم هستم.\" [شغل]",
        "\"من خجالتی هستم.\" [ویژگی شخصیتی]",
        "\"من خوشحال هستم.\" [حالت روحی]"
      ]
    }
  },
  {
    "text": "I’m from ___:\nThis expression is used to tell someone where you are originally from.",
    "persian": "این عبارت برای گفتن این است که شما اهل کجا هستید.",
    "examples": {
      "english": [
        "\"I’m from Afghanistan.\" [Country]",
        "\"I’m from England.\" [Country]",
        "\"I’m from Kabul.\" [City]",
        "\"I’m from Australia.\" [Geographic Location]"
      ],
      "persian": [
        "\"من از افغانستان هستم.\" [کشور]",
        "\"من از انگلستان هستم.\" [کشور]",
        "\"من از کابل هستم.\" [شهر]",
        "\"من از استرالیا هستم.\" [موقعیت جغرافیایی]"
      ]
    }
  },
  {
    "text": "How are you?:\nThis phrase is usually used with people you already know. It’s a kind way to show that you care about how the other person is doing.",
    "persian": "معنی: این عبارت معمولاً با افرادی که از قبل می‌شناسید استفاده می‌شود. این یک روش مؤدبانه برای نشان دادن اهمیت دادن به حال طرف مقابل است.",
    "best_practice": "Respond with 'I’m good' or 'I’m well,' and then ask the same question back to the other person.",
    "persian_best_practice": "بهترین روش: پاسخ دهید \"من خوب هستم\" یا \"من سالم هستم\" و سپس همان سؤال را از طرف مقابل بپرسید.",
    "examples": {
      "english": [
        "A: \"Hello, how are you?\"",
        "B: \"I’m good, and how are you?\""
      ],
      "persian": [
        "الف: \"سلام، حال شما چطور است؟\"",
        "ب: \"من خوب هستم، و شما چطورید؟\""
      ]
    }
  },
  {
    "text": "Goodbye. / Bye.:\nThis phrase is used when you finish a conversation and are about to leave. 'Goodbye' is slightly more formal than 'Bye.'",
    "persian": "معنی: این عبارت زمانی استفاده می‌شود که مکالمه تمام شده و شما قصد ترک کردن را دارید. \"خداحافظ\" کمی رسمی‌تر از \"بای\" است.",
    "best_practice": "You can say something like 'It was nice talking to you' before saying goodbye.",
    "persian_best_practice": "بهترین روش: قبل از خداحافظی، می‌توانید بگویید \"خوشحال شدم که با شما صحبت کردم.\"",
    "examples": {
      "english": [
        "\"It was nice talking to you. Goodbye.\""
      ],
      "persian": [
        "\"خوشحال شدم که با شما صحبت کردم. خداحافظ.\""
      ]
    }
  },
  {
    "text": "See you later.:\nThis is a more casual way to say goodbye. It’s often used in informal situations, especially when you expect to see the other person again soon.",
    "persian": "معنی: این یک روش غیررسمی‌تر برای خداحافظی است. معمولاً در موقعیت‌های دوستانه استفاده می‌شود، به‌ویژه وقتی انتظار دارید به‌زودی دوباره آن شخص را ببینید.",
    "examples": {
      "english": [
        "\"Thank you for the talk. See you later!\""
      ],
      "persian": [
        "\"ممنون از صحبت. بعداً می‌بینمت!\""
      ]
    }
  },
  {
    "text": "Please.:\nThis is a very polite expression to use whenever you request something from someone.",
    "persian": "معنی: این یک عبارت بسیار مؤدبانه است که هنگام درخواست چیزی از کسی استفاده می‌شود.",
    "examples": {
      "english": [
        "\"May I have this pen, please?\"",
        "\"Can you please bring me a glass of water?\""
      ],
      "persian": [
        "\"می‌توانم این خودکار را داشته باشم، لطفاً؟\"",
        "\"می‌توانید لطفاً یک لیوان آب بیاورید؟\""
      ]
    }
  },
  {
    "text": "Thank you. / Thanks.:\nThis phrase is used to express gratitude. “Thank you” is more formal, while “Thanks” is informal.",
    "persian": "معنی: این عبارت برای ابراز قدردانی استفاده می‌شود. \"متشکرم\" رسمی‌تر است، در حالی که \"ممنون\" غیررسمی است.",
    "examples": {
      "english": [
        "\"Thank you for your help.\" [Formal]",
        "\"Thanks for everything!\" [Informal]"
      ],
      "persian": [
        "\"متشکرم از کمک شما.\" [رسمی]",
        "\"ممنون برای همه چیز!\" [غیررسمی]"
      ]
    }
  },
  {
    "text": "You’re welcome.:\nThis phrase is used to respond when someone thanks you. It works in both formal and casual situations.",
    "persian": "معنی: این عبارت زمانی استفاده می‌شود که کسی از شما تشکر کند. در موقعیت‌های رسمی و غیررسمی کاربرد دارد.",
    "examples": {
      "english": [
        "\"A: Thanks for your help!\"",
        "\"B: You’re welcome.\""
      ],
      "persian": [
        "\"الف: ممنون از کمکت!\"",
        "\"ب: خواهش می‌کنم.\""
      ]
    }
  },
  {
    "text": "Sorry.:\nYou can use this phrase whenever you accidentally bother or inconvenience someone, like if you bump into them or step on their foot.",
    "persian": "معنی: این عبارت زمانی استفاده می‌شود که به طور تصادفی باعث ناراحتی یا زحمت کسی شوید، مثلاً اگر به کسی برخورد کنید یا روی پای او پا بگذارید.",
    "examples": {
      "english": [
        "\"Sorry! I missed your call.\""
      ],
      "persian": [
        "\"ببخشید! تماس شما را از دست دادم.\""
      ]
    }
  },
  {
    "text": "That’s okay.:\nYou can use this phrase to respond when someone apologizes. It means you are not angry or upset with them.",
    "persian": "معنی: این عبارت زمانی استفاده می‌شود که کسی از شما عذرخواهی کند. به این معنی است که از او ناراحت یا عصبانی نیستید.",
    "examples": {
      "english": [
        "\"A: Sorry! I didn’t come to your party.\"",
        "\"B: That’s okay.\""
      ],
      "persian": [
        "\"الف: ببخشید! به مهمانی شما نیامدم.\"",
        "\"ب: اشکالی ندارد.\""
      ]
    }
  }
  
  
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

  const playAudio = (phrase: string): void => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="frameContainer">
      <h1 className="heading">Basic English Phrases</h1>
      <div className="phraseText">
        <span className="phraseMainText">
          <button
            onClick={() => playAudio(phrases[currentPhraseIndex].text)}
            className="audioButtonG"
          >
            🗣️
          </button>
          {(() => {
  const [title, ...rest] = phrases[currentPhraseIndex].text.split(":\n");
  return (
    <>
      <strong>{title}:</strong>
      <br />
      {rest.join(" ")}
    </>
  );
})()}

  
        </span>
      </div>
      <br />
      <span className="phrasePersian">
        {phrases[currentPhraseIndex].persian}
      </span>
      <br />
      {/* Display Examples */}
      <div className="examples">
      <div className="example-section">
  <h4>Examples</h4>
  <div className="exampleBox">
    <button
      onClick={() => playAudio(phrases[currentPhraseIndex].examples.english.join(" "))}
      className="audioButtonInExample"
    >
      🗣️
    </button>
    <p className="exampleText">
      {phrases[currentPhraseIndex].examples.english.map((example, index) => (
        <React.Fragment key={index}>
          {example}
          {index < phrases[currentPhraseIndex].examples.english.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  </div>
</div>

        <div className="example-section">
          <h4>Persian</h4>
          <ul>
            {phrases[currentPhraseIndex].examples.persian.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Moved Navigation Buttons to the Bottom */}
      <div className="navContainer">
  {currentPhraseIndex > 0 && (
    <button onClick={handlePrevious} className="navButtonG">
      ← prev
    </button>
  )}
  {currentPhraseIndex < phrases.length - 1 && (
    <button onClick={handleNext} className="navButtonG">
      next →
    </button>
  )}
</div>

      <Link to="/beginnerPage" className="returnLink">Go Back to Beginner Page</Link>
    </div>
  );
};

export default GreetAndBasicPhrases;
