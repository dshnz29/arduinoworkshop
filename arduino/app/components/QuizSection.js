"use client";

import React, { useState, useEffect } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const QuizSection = ({ registrationData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [badge, setBadge] = useState('');
  
  // Example questions (you may want to fetch these from an API or from props)
  const questions = [
    {
      question: 'What does LED stand for?',
      options: ['Light Emitting Diode', 'Light Electronic Display', 'Low Energy Device', 'Light Enabling Detector'],
      correctAnswer: 0,
    },
    {
      question: 'Which of these is NOT an Arduino board?',
      options: ['Uno', 'Mega', 'Nano', 'Raspberry'],
      correctAnswer: 3,
    },
    {
      question: 'What language is primarily used to program Arduino?',
      options: ['Java', 'Python', 'C/C++', 'Assembly'],
      correctAnswer: 2,
    },
    {
      question: 'What component would you use to detect light levels?',
      options: ['Thermistor', 'Photoresistor', 'Potentiometer', 'Accelerometer'],
      correctAnswer: 1,
    },
    {
      question: 'What is the operating voltage of most Arduino boards?',
      options: ['3.3V', '5V', '9V', '12V'],
      correctAnswer: 1,
    },
  ];

  // Handle user selection
  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      // Move to next question after a slight delay
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      // End quiz and calculate score
      const totalScore = newAnswers.reduce(
        (acc, answer, index) => (answer === questions[index].correctAnswer ? acc + 1 : acc),
        0
      );
      setScore(totalScore);
      // Assign badge based on score
      if (totalScore <= 2) {
        setBadge('Beginner');
      } else if (totalScore <= 4) {
        setBadge('Intermediate');
      } else {
        setBadge('Pro');
      }
      setQuizCompleted(true);
    }
  };

  // Render the quiz question
  const renderQuiz = () => {
    const question = questions[currentQuestion];
    return (
      <div className="bg-gray-800 p-8 rounded-lg border border-blue-500/30 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-blue-400 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {Math.round((currentQuestion / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(currentQuestion / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-6 text-white">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                answers[currentQuestion] === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Render results after quiz completion
  const renderResults = () => {
    const teamColors = ['Blue', 'Green', 'Red', 'Yellow'];
    const assignedTeam = teamColors[Math.floor(Math.random() * teamColors.length)];
    return (
      <div className="bg-gray-800 p-8 rounded-lg border border-blue-500/30 max-w-2xl mx-auto text-center">
        <div
          className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
            score >= 4
              ? 'bg-green-500/20'
              : score >= 2
              ? 'bg-yellow-500/20'
              : 'bg-red-500/20'
          }`}
        >
          <span className="text-3xl font-bold">
            {score}/{questions.length}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Quiz Completed!</h3>
        <div className="mb-6">
          <span
            className={`inline-block px-4 py-2 rounded-full font-semibold ${
              badge === 'Pro'
                ? 'bg-green-500/20 text-green-300'
                : badge === 'Intermediate'
                ? 'bg-yellow-500/20 text-yellow-300'
                : 'bg-blue-500/20 text-blue-300'
            }`}
          >
            {badge} Badge Earned
          </span>
        </div>
        <p className="text-gray-300 mb-6">
          Based on your quiz results, you have been assigned to{' '}
          <strong className="text-blue-300">Team {assignedTeam}</strong>!
        </p>
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-2 text-blue-300">Your Results</h4>
          <ul className="space-y-2">
            {questions.map((question, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-400 truncate max-w-[70%]">
                  {question.question}
                </span>
                {answers[index] === question.correctAnswer ? (
                  <span className="flex items-center text-green-400">
                    <CheckIcon className="w-5 h-5 mr-1" />
                    Correct
                  </span>
                ) : (
                  <span className="flex items-center text-red-400">
                    <XIcon className="w-5 h-5 mr-1" />
                    Incorrect
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30 mb-6">
          <h4 className="text-lg font-semibold mb-2 text-blue-300">Whats Next?</h4>
          <p className="text-gray-300">
            Check your email for your ticket and additional details about the workshop. We are excited to
            see you at the event!
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
          Download Ticket
        </button>
      </div>
    );
  };

  return (
    <section className="py-20 bg-black w-full" id="quiz-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pre-Workshop Quiz
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Test your Arduino knowledge and get matched with the perfect team based on your skill level.
          </p>
        </div>
        {quizCompleted ? renderResults() : renderQuiz()}
      </div>
    </section>
  );
};

export default QuizSection;
