import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, DownloadCloud, RefreshCcw, AlertCircle } from 'lucide-react';

interface TestReportProps {
  results: {
    scores: {
      anxiety: number;
      depression: number;
      stress: number;
      wellbeing: number;
    };
    overallStatus: string;
    concerns: string[];
    recommendations: string[];
    bookRecommendations: string[];
  };
  onRestart: () => void;
}

const TestReport: React.FC<TestReportProps> = ({ results, onRestart }) => {
  const { scores, overallStatus, concerns, recommendations, bookRecommendations } = results;
  
  // Format a score for display
  const formatScore = (score: number) => {
    return Math.round(score);
  };
  
  // Determine color based on score value (inverted for wellbeing)
  const getScoreColor = (score: number, isWellbeing = false) => {
    if (isWellbeing) {
      if (score >= 70) return 'bg-success-500';
      if (score >= 50) return 'bg-secondary-500';
      if (score >= 30) return 'bg-warning-500';
      return 'bg-error-500';
    } else {
      if (score <= 30) return 'bg-success-500';
      if (score <= 50) return 'bg-secondary-500';
      if (score <= 70) return 'bg-warning-500';
      return 'bg-error-500';
    }
  };
  
  // Determine overall status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Flourishing': return 'text-success-500';
      case 'Maintaining': return 'text-secondary-500';
      case 'Managing': return 'text-warning-500';
      case 'Struggling': return 'text-error-500';
      default: return 'text-primary-500';
    }
  };
  
  const downloadReport = () => {
    // Create report content
    const reportContent = `
      MENTAL HEALTH ASSESSMENT REPORT
      
      Overall Status: ${overallStatus}
      
      SCORES:
      Anxiety: ${formatScore(scores.anxiety)}%
      Depression: ${formatScore(scores.depression)}%
      Stress: ${formatScore(scores.stress)}%
      Wellbeing: ${formatScore(scores.wellbeing)}%
      
      ${concerns.length > 0 ? `AREAS OF CONCERN:\n${concerns.map(c => `- ${c}`).join('\n')}` : ''}
      
      RECOMMENDATIONS:
      ${recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}
      
      SUGGESTED READING:
      ${bookRecommendations.map((b, i) => `${i + 1}. ${b}`).join('\n')}
      
      DISCLAIMER:
      This assessment is not a diagnostic tool. If you're experiencing significant distress,
      please consult with a qualified mental health professional.
    `;
    
    // Create blob and download link
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mental-health-assessment.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Assessment Results</h2>
        <p className="text-gray-600">
          Based on your responses, here's an overview of your current mental wellbeing.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Overall Status: 
          <span className={`ml-2 ${getStatusColor(overallStatus)}`}>
            {overallStatus}
          </span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {Object.entries(scores).map(([category, score]) => (
            <div key={category} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium capitalize">{category}</span>
                <span className="text-sm">{formatScore(score)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className={`h-full rounded-full ${getScoreColor(score, category === 'wellbeing')}`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {concerns.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium flex items-center text-gray-700">
              <AlertCircle size={16} className="mr-2 text-warning-500" />
              Areas that may need attention:
            </h4>
            <ul className="mt-2 space-y-1">
              {concerns.map((concern, index) => (
                <li key={index} className="text-sm text-gray-600 capitalize">
                  • {concern}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-start bg-white p-4 rounded-lg shadow-sm"
            >
              <ChevronRight size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{recommendation}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {bookRecommendations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Suggested Reading</h3>
          <div className="space-y-2">
            {bookRecommendations.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="bg-white p-3 rounded-lg shadow-sm text-gray-700"
              >
                {book}
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-primary-50 rounded-lg p-4 text-sm text-primary-800 mb-8">
        <p className="font-semibold">Important Reminder:</p>
        <p>
          This assessment is not a diagnostic tool. If you're experiencing significant distress, 
          please consult with a qualified mental health professional.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-5 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <RefreshCcw size={16} className="mr-2" /> Retake Assessment
        </button>
        <button
          onClick={downloadReport}
          className="px-5 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
        >
          <DownloadCloud size={16} className="mr-2" /> Download Report
        </button>
      </div>
    </motion.div>
  );
};

export default TestReport;