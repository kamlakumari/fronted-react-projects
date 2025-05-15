import React from 'react';

const QuestionList = ({ question, options, handleClick, currentAnswer }) => {
  return (
    <div className="bg-gray-500 text-white  p-8 m-7 rounded justify-center">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={`cursor-pointer p-2 rounded mb-2 ${
              currentAnswer === option ? 'bg-yellow-200 text-black' : 'bg-gray-700'
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;

