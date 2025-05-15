import React, { useState } from 'react';
import QuestionList from './QuestionList';

const Quiz = () => {
  const reactQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of React?",
      options: [
        "Server-side rendering",
        "Building user interfaces",
        "Database management",
        "Styling web pages"
      ],
      answer: "Building user interfaces"
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        "A templating engine",
        "A CSS preprocessor",
        "A syntax extension for JavaScript",
        "A type of database"
      ],
      answer: "A syntax extension for JavaScript"
    },
    {
      id: 3,
      question: "Which hook is used to manage state in a functional component?",
      options: [
        "useEffect",
        "useState",
        "useReducer",
        "useContext"
      ],
      answer: "useState"
    },
    {
      id: 4,
      question: "What is the correct way to pass data to a child component?",
      options: [
        "Using useState",
        "Using Redux",
        "Using props",
        "Using useEffect"
      ],
      answer: "Using props"
    },
    {
      id: 5,
      question: "What does the `useEffect` hook do?",
      options: [
        "Manages component styling",
        "Handles side effects like API calls",
        "Updates state variables",
        "Fetches props"
      ],
      answer: "Handles side effects like API calls"
    },
    {
      id: 6,
      question: "Which keyword is used to create a component in React?",
      options: [
        "class",
        "function",
        "both class and function",
        "component"
      ],
      answer: "both class and function"
    },
    {
      id: 7,
      question: "How do you handle events in React?",
      options: [
        "Inline JavaScript only",
        "Using traditional HTML event handlers",
        "Using camelCase syntax like onClick",
        "With jQuery"
      ],
      answer: "Using camelCase syntax like onClick"
    },
    {
      id: 8,
      question: "Which tool is used to create a new React project quickly?",
      options: [
        "Webpack",
        "Babel",
        "Vite or Create React App (CRA)",
        "Node.js"
      ],
      answer: "Vite or Create React App (CRA)"
    },
    {
      id: 9,
      question: "What is the virtual DOM?",
      options: [
        "A backup of the real DOM",
        "A copy of the website",
        "An in-memory representation of the real DOM",
        "An actual browser window"
      ],
      answer: "An in-memory representation of the real DOM"
    },
    {
      id: 10,
      question: "What happens when state changes in a React component?",
      options: [
        "Only the changed state is logged",
        "The whole component re-renders",
        "The page refreshes",
        "A new tab opens"
      ],
      answer: "The whole component re-renders"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  

  const handleClick = (option) => {
    setCurrentAnswer(option);

    const correctAnswer = reactQuestions[currentQuestionIndex].answer;
    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  
  const handleNext = () => {
    if (currentQuestionIndex < reactQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null); // Reset selection for next question
    } else {
      setShowResult(true);
    }
  };


  return (
    <div className="flex flex-col items-center mt-10">
      {showResult ? (
        <div className="text-2xl font-bold text-green-600">
           You scored {score} out of {reactQuestions.length}
        </div>
      ) : (
        <>
          <QuestionList
            question={reactQuestions[currentQuestionIndex].question}
            options={reactQuestions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            onClick={handleNext}
            className="bg-green-500 h-[50px] w-[150px] text-white mt-4 rounded"
          >
            {currentQuestionIndex === reactQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;