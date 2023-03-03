import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import mapIcon from "../assets/map.png";
import musicIcon from "../assets/music.png";
import popcornIcon from "../assets/popcorn.png";
import questionMarkIcon from "../assets/question-mark.png";
import skiiIcon from "../assets/skii.png";
import retryIcon from "../assets/retry.png";

const questions = [
  {
    category: "Geography",
    id: "622a1c357cc59eab6f94ff86",
    correctAnswer: "Ulaanbaatar",
    incorrectAnswers: ["Uliastai", "Khovd", "Ulaangom"],
    question: "What is the capital of Mongolia?",
    tags: ["capital_cities", "geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "622a1c357cc59eab6f94ffbd",
    correctAnswer: "Malabo",
    incorrectAnswers: ["Yaonde", "Luanda", "Bissau"],
    question: "What is the capital of Equatorial Guinea?",
    tags: ["capital_cities", "geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "62374273cb85f7ce9e949dce",
    correctAnswer: "Paramaribo",
    incorrectAnswers: ["Havana", "Manila", "Sarajevo"],
    question: "What is the capital city of Suriname?",
    tags: ["capital_cities", "central_america", "geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "622a1c387cc59eab6f950860",
    correctAnswer: "Italy",
    incorrectAnswers: ["Slovenia", "Croatia", "Liechtenstein"],
    question: "Which of these countries borders San Marino?",
    tags: ["geography"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "623385f162eaad73716a8ca2",
    correctAnswer: "Peru",
    incorrectAnswers: ["Algeria", "Papua New Guinea", "Finland"],
    question: "Where are the Nazca Lines?",
    tags: ["geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "625e9f9a796f721e95543fa9",
    correctAnswer: "Pakistan",
    incorrectAnswers: ["Nigeria", "Switzerland", "Vietnam"],
    question:
      "Which country's flag can be described as 'Green with a vertical white band on the left side. The green section contains a white crescent and star.'?",
    tags: ["flags", "geography"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "623742dbcb85f7ce9e949df8",
    correctAnswer: "Montevideo",
    incorrectAnswers: ["Bogotá", "Zagreb", "Bandar Seri Begawan"],
    question: "What is the capital city of Uruguay?",
    tags: ["geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "622a1c387cc59eab6f950ae1",
    correctAnswer: "Pakistan",
    incorrectAnswers: ["Bangladesh", "Thailand", "Cambodia"],
    question: "Which of these countries borders People's Republic of China?",
    tags: ["china", "geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "622a1c357cc59eab6f94ff94",
    correctAnswer: "Prague",
    incorrectAnswers: ["Vienna", "Oxford", "Budapest"],
    question: "Which European city is nicknamed the city of a hundred spires?",
    tags: ["europe", "cities", "nicknames", "geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Geography",
    id: "6233893b0161109f922aacd6",
    correctAnswer: "Boston",
    incorrectAnswers: ["New York", "Philadelphia", "Miami"],
    question: "Which U.S. city is known as Beantown?",
    tags: ["geography"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
];

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const Quiz = () => {
  const { category } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [wrongCount, setWrongCounter] = useState<number>(0);
  const [correctCount, setCorrectCounter] = useState<number>(0); 
  const query = category === "Random" ? `https://the-trivia-api.com/api/questions?limit=20` : `https://the-trivia-api.com/api/questions?limit=20&categories=${category}`
  const { data, isLoading, error } = useFetch<Array<any>>(
    query
  );

  const getQuestion = () => {
    if(!data) return null;
    const question = data ? (data as Array<any>)[currentQuestion] : [];

    const answers = shuffle([
      { isCorrect: true, option: question.correctAnswer },
      ...question.incorrectAnswers.map((answer: any) => ({
        isCorrect: false,
        option: answer,
      })),
    ]);
    return (
      <div className="quiz">
        <div className="meter nostripes">
          <span
            className="meter-c"
            style={{
              width: ((wrongCount + correctCount + 1) / 10) * 100 + "%",
            }}
          ></span>
        </div>
        <div className="iconContainer top-icon">
          <img className="q-icon" src={mapIcon} />
          <img className="q-icon" src={musicIcon} />
        </div>

        <div className="quiz-section">
          <h2 className="quiz-question">{question.question}</h2>
          <div className="quiz-options">
            {answers.map((option) => (
              <button
                className="quiz-option"
                onClick={() => {
                  setCurrentQuestion((prevVal) => prevVal + 1);
                  if (option.isCorrect) {
                    setCorrectCounter((prevVal) => prevVal + 1);
                  } else {
                    setWrongCounter((prevVal) => prevVal + 1);
                  }
                }}
              >
                {option.option}
              </button>
            ))}
          </div>
        </div>
        <div className="iconContainer bottom-icon">
          <img className="q-icon" src={popcornIcon} />
          <img className="q-icon" src={skiiIcon} />
        </div>
      </div>
    );
  };

  const getResults = () => {
    return (
      <div className="results">
        <h2 className="results-header">Results</h2>
        <div className="result-section">
          <div className="result-wrong">Wrong Answers: {wrongCount}
         </div>
          <div className="result-right">Correct Answers: {correctCount}</div>
        </div>
        <Link className="retry" to={"/"}><img className="retry-icon" src={retryIcon} /></Link>
      </div>
    );
  };

  return <>{currentQuestion === 10 ? getResults() : getQuestion()}</>;
};
