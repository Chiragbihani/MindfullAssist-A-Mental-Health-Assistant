import React from 'react';
import BookList from '../components/Resources/BookList';
import { books } from '../data/resourcesData';

const ResourcesPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Mental Health Resources</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Discover books and journals to help you understand and improve your mental wellbeing.
        </p>
      </div>
      
      <BookList books={books} />
      
      <div className="mt-12 bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Journal Prompts for Mental Wellbeing</h2>
        <p className="text-gray-700 mb-4">
          Journaling can be a powerful tool for mental health. Here are some prompts to help you reflect on your thoughts and feelings:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">For Anxiety</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What's one thing that's causing me anxiety today? What's one small step I can take to address it?</li>
              <li>• When I feel anxious, what has helped calm me in the past?</li>
              <li>• What are three things within my control right now?</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">For Depression</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What's one small thing that brought me even a moment of joy today?</li>
              <li>• What's something I'm looking forward to, even if it's small?</li>
              <li>• What's one kind thing I can do for myself today?</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">For Gratitude</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What are three things I'm grateful for today?</li>
              <li>• Who is someone that has positively impacted my life? How?</li>
              <li>• What's something about my body or health that I appreciate?</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">For Self-Discovery</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What are my top five values? Am I living in alignment with them?</li>
              <li>• What would I do differently if no one else's opinion mattered?</li>
              <li>• What activities make me lose track of time in a good way?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;