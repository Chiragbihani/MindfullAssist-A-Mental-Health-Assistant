import React from 'react';
import ChatInterface from '../components/Chat/ChatInterface';

const ChatPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Mental Health Chat</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Chat confidentially with our assistant about your mental health concerns and receive helpful guidance and suggestions.
        </p>
      </div>
      
      <ChatInterface />
      
      <div className="mt-8 bg-primary-50 rounded-xl p-6 text-primary-900">
        <h2 className="font-semibold text-lg mb-2">Important Note</h2>
        <p>
          This chatbot is designed to provide general information and support for mental health concerns. 
          It is not a substitute for professional medical advice, diagnosis, or treatment. 
          If you're experiencing a mental health crisis or need immediate assistance, 
          please contact a mental health professional or crisis helpline.
        </p>
      </div>
    </div>
  );
};

export default ChatPage;