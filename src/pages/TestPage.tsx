import React from 'react';
import MentalHealthTest from '../components/Test/MentalHealthTest';

const TestPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Mental Health Assessment</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Take our mental health assessment to gain insights into your wellbeing and receive personalized recommendations.
        </p>
      </div>
      
      <MentalHealthTest />
    </div>
  );
};

export default TestPage;