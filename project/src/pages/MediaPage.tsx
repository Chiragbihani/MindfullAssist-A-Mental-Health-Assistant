import React, { useState } from 'react';
import MediaPlayer from '../components/Media/MediaPlayer';
import { podcasts, music } from '../data/resourcesData';
import { Headphones, Music } from 'lucide-react';

const MediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'music'>('podcasts');
  
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Mental Health Media</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Listen to podcasts and music curated to support your mental wellbeing.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-card overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'podcasts'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('podcasts')}
            >
              <Headphones size={16} className="mr-2" />
              Podcasts
            </button>
            <button
              className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'music'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('music')}
            >
              <Music size={16} className="mr-2" />
              Music
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            {activeTab === 'podcasts'
              ? 'Explore insightful podcasts about mental health topics, featuring expert discussions and personal stories.'
              : 'Listen to soothing music designed to help with relaxation, focus, and sleep.'}
          </p>
          
          {activeTab === 'podcasts' ? (
            <MediaPlayer mediaItems={podcasts} type="podcast" />
          ) : (
            <MediaPlayer mediaItems={music} type="music" />
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">How Audio Can Support Mental Health</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">Benefits of Podcasts</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Learn new perspectives and coping strategies</li>
              <li>• Feel less alone through shared experiences</li>
              <li>• Access expert knowledge in an approachable format</li>
              <li>• Develop greater self-awareness and emotional intelligence</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">Benefits of Music</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Reduce stress and anxiety</li>
              <li>• Improve focus and concentration</li>
              <li>• Enhance mood and emotional regulation</li>
              <li>• Support better sleep quality</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-gray-700">
          <p>
            <strong>Pro Tip:</strong> Create a consistent routine incorporating audio. For example, listen to a calming playlist before bed 
            or a motivational podcast during your morning routine to establish positive mental health habits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;