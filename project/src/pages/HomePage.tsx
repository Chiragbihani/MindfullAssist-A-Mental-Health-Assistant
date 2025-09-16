import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ClipboardCheck, BookOpen, Music, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, to, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white rounded-xl shadow-card p-6 hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
      >
        Get Started <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

const HomePage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Mental Health Chat',
      description: 'Have a confidential conversation about your mental wellbeing and get personalized suggestions.',
      to: '/chat',
      delay: 0.1,
    },
    {
      icon: ClipboardCheck,
      title: 'Wellness Assessment',
      description: 'Take our comprehensive mental health test to receive insights about your current state.',
      to: '/test',
      delay: 0.2,
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Discover curated books and journals to support your mental health journey.',
      to: '/resources',
      delay: 0.3,
    },
    {
      icon: Music,
      title: 'Podcasts & Music',
      description: 'Listen to calming music and insightful mental health podcasts to improve your mood.',
      to: '/media',
      delay: 0.4,
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
          Your Mental Wellbeing
          <span className="block text-primary-600">Starts Here</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          MindfulAssist helps you understand, track, and improve your mental health with personalized tools and resources.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white shadow-lg"
      >
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-2">Ready to begin your journey?</h2>
            <p className="text-primary-50">
              Start with a friendly chat or take our assessment to get personalized insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/chat"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Chatting <MessageSquare size={16} className="ml-2" />
            </Link>
            <Link
              to="/test"
              className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors inline-flex items-center justify-center"
            >
              Take Assessment <ClipboardCheck size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;