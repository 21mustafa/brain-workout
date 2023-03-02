import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router";

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
export const Quiz = () => {
  const { category } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [wrongCount, setWrongCounter] = useState<number>(0);
  const [correctCount, setCorrectCounter] = useState<number>(0);
  // const { data, isLoading, error } = useFetch<Object>(
  //     'https://the-trivia-api.com/api/questions?limit=20&categories=science,history'
  // );

  const getQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <div>
        <h2>{question.question}</h2>
        <div>
          <button
            onClick={() => {
              setCurrentQuestion((prevVal) => prevVal + 1);
              setCorrectCounter((prevVal) => prevVal + 1);
            }}
          >
            {question.correctAnswer}
          </button>
          {question.incorrectAnswers.map((incorrectAnswer) => (
            <button
              onClick={() => {
                setCurrentQuestion((prevVal) => prevVal + 1);
                setWrongCounter((prevVal) => prevVal + 1);
              }}
            >
              {incorrectAnswer}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const getResults = () => {
    return (
        <div>
            <h2>Results</h2>
            <div>Wrong Answers: {wrongCount}</div>
            <div>Correct Answers: {correctCount}</div>
        </div>
    )
  }

  return <>{currentQuestion === 10 ? getResults() : getQuestion()}</>;
};
