import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mentalHealthQuestions, getResultsAnalysis, Question } from '../../data/testQuestions';
import TestReport from './TestReport';

const MentalHealthTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  
  const startTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };
  
  const handleAnswer = (questionId: number, score: number) => {
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
    
    // Move to next question or show results if completed
    if (currentQuestionIndex < mentalHealthQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateResults = () => {
    // Calculate scores for each category
    let anxietyScore = 0;
    let depressionScore = 0;
    let stressScore = 0;
    let wellbeingScore = 0;
    
    mentalHealthQuestions.forEach(question => {
      const answer = answers[question.id] || 0;
      
      switch (question.category) {
        case 'anxiety':
          anxietyScore += answer;
          break;
        case 'depression':
          depressionScore += answer;
          break;
        case 'stress':
          stressScore += answer;
          break;
        case 'wellbeing':
          wellbeingScore += answer;
          break;
      }
    });
    
    return getResultsAnalysis({
      anxiety: anxietyScore,
      depression: depressionScore,
      stress: stressScore,
      wellbeing: wellbeingScore
    });
  };
  
  const currentQuestion: Question | undefined = mentalHealthQuestions[currentQuestionIndex];
  const progress = testStarted ? 
    ((currentQuestionIndex + (showResults ? 1 : 0)) / mentalHealthQuestions.length) * 100 : 0;
  
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200">
        <div 
          className="h-full bg-primary-500 transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="p-6 md:p-8">
        {!testStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mental Health Assessment</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              This assessment consists of {mentalHealthQuestions.length} questions and takes about 5 minutes to complete. 
              Your answers will help generate personalized insights about your mental wellbeing.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 text-sm text-primary-800 mb-6 text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-2">Important:</p>
              <p>
                This test is not a diagnostic tool. If you're experiencing severe symptoms or distress, 
                please consult with a healthcare professional.
              </p>
            </div>
            <button
              onClick={startTest}
              className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              Start Assessment
            </button>
          </motion.div>
        ) : showResults ? (
          <TestReport 
            results={calculateResults()} 
            onRestart={startTest}
          />
        ) : (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm text-gray-500 mb-1">
              Question {currentQuestionIndex + 1} of {mentalHealthQuestions.length}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQuestion?.text}
            </h3>
            
            <div className="space-y-3">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.id, option.score)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {option.text}
                </button>
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-500 italic">
              Select the option that best describes your experience over the past two weeks.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthTest;