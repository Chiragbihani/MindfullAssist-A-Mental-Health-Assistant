export interface Question {
  id: number;
  text: string;
  category: 'anxiety' | 'depression' | 'stress' | 'wellbeing';
  options: {
    text: string;
    score: number;
  }[];
}

export const mentalHealthQuestions: Question[] = [
  // Anxiety questions
  {
    id: 1,
    text: "How often do you find yourself feeling nervous, anxious, or on edge?",
    category: "anxiety",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 2,
    text: "How often do you find it difficult to control worrying?",
    category: "anxiety",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 3,
    text: "How often do you experience physical symptoms of anxiety (racing heart, sweating, trembling)?",
    category: "anxiety",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  
  // Depression questions
  {
    id: 4,
    text: "How often have you felt down, depressed, or hopeless?",
    category: "depression",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 5,
    text: "How often do you experience little interest or pleasure in doing things you used to enjoy?",
    category: "depression",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 6,
    text: "How often do you experience trouble falling or staying asleep, or sleeping too much?",
    category: "depression",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  
  // Stress questions
  {
    id: 7,
    text: "How often have you felt that you were unable to control the important things in your life?",
    category: "stress",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 8,
    text: "How often have you felt that things were piling up so high that you could not overcome them?",
    category: "stress",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: 9,
    text: "How often have you found yourself getting irritated or annoyed by small things?",
    category: "stress",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  
  // General wellbeing questions
  {
    id: 10,
    text: "How often do you make time for activities that you genuinely enjoy?",
    category: "wellbeing",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Once in a while", score: 1 },
      { text: "Several times a week", score: 2 },
      { text: "Daily", score: 3 }
    ]
  },
  {
    id: 11,
    text: "How would you rate your overall physical health at present?",
    category: "wellbeing",
    options: [
      { text: "Poor", score: 0 },
      { text: "Fair", score: 1 },
      { text: "Good", score: 2 },
      { text: "Excellent", score: 3 }
    ]
  },
  {
    id: 12,
    text: "How often do you feel connected to others (friends, family, community)?",
    category: "wellbeing",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Once in a while", score: 1 },
      { text: "Several times a week", score: 2 },
      { text: "Daily", score: 3 }
    ]
  }
];

export const getResultsAnalysis = (scores: {
  anxiety: number;
  depression: number;
  stress: number;
  wellbeing: number;
}) => {
  // Convert scores to percentages for consistency
  const maxCategoryScore = 9; // 3 questions per category * max score of 3
  const maxWellbeingScore = 9; // 3 questions * max score of 3
  
  const anxietyPercent = (scores.anxiety / maxCategoryScore) * 100;
  const depressionPercent = (scores.depression / maxCategoryScore) * 100;
  const stressPercent = (scores.stress / maxCategoryScore) * 100;
  const wellbeingPercent = (scores.wellbeing / maxWellbeingScore) * 100;
  
  // Overall mental health status
  let overallStatus: string;
  const combinedNegative = (anxietyPercent + depressionPercent + stressPercent) / 3;
  
  if (combinedNegative < 25 && wellbeingPercent > 70) {
    overallStatus = "Flourishing";
  } else if (combinedNegative < 40 && wellbeingPercent > 50) {
    overallStatus = "Maintaining";
  } else if (combinedNegative < 60) {
    overallStatus = "Managing";
  } else {
    overallStatus = "Struggling";
  }
  
  // Areas of concern
  const concerns: string[] = [];
  if (anxietyPercent > 50) concerns.push("anxiety");
  if (depressionPercent > 50) concerns.push("depression");
  if (stressPercent > 50) concerns.push("stress");
  if (wellbeingPercent < 40) concerns.push("general wellbeing");
  
  // Recommendations based on results
  const recommendations: string[] = [];
  
  if (anxietyPercent > 50) {
    recommendations.push("Practice deep breathing exercises for 5 minutes daily");
    recommendations.push("Try mindfulness meditation to help manage anxious thoughts");
    recommendations.push("Consider limiting caffeine and alcohol which can worsen anxiety");
  }
  
  if (depressionPercent > 50) {
    recommendations.push("Establish a consistent sleep schedule to help stabilize mood");
    recommendations.push("Try to get 15-30 minutes of sunlight daily when possible");
    recommendations.push("Set very small, achievable goals to build momentum");
  }
  
  if (stressPercent > 50) {
    recommendations.push("Identify key stressors in your life and develop specific strategies for each");
    recommendations.push("Practice progressive muscle relaxation to release physical tension");
    recommendations.push("Consider time management techniques to reduce feeling overwhelmed");
  }
  
  if (wellbeingPercent < 50) {
    recommendations.push("Incorporate activities that bring you joy, even briefly");
    recommendations.push("Strengthen social connections - reach out to one person regularly");
    recommendations.push("Develop a simple self-care routine for physical and emotional health");
  }
  
  // Book recommendations based on results
  const bookRecommendations: string[] = [];
  
  if (anxietyPercent > 40) {
    bookRecommendations.push("'Dare: The New Way to End Anxiety and Stop Panic Attacks' by Barry McDonagh");
    bookRecommendations.push("'The Anxiety and Phobia Workbook' by Edmund Bourne");
  }
  
  if (depressionPercent > 40) {
    bookRecommendations.push("'Feeling Good: The New Mood Therapy' by David D. Burns");
    bookRecommendations.push("'The Upward Spiral' by Alex Korb");
  }
  
  if (stressPercent > 40) {
    bookRecommendations.push("'Why Zebras Don't Get Ulcers' by Robert Sapolsky");
    bookRecommendations.push("'Burnout: The Secret to Unlocking the Stress Cycle' by Emily Nagoski");
  }
  
  if (wellbeingPercent < 60) {
    bookRecommendations.push("'Atomic Habits' by James Clear");
    bookRecommendations.push("'The How of Happiness' by Sonja Lyubomirsky");
  }
  
  return {
    scores: {
      anxiety: anxietyPercent,
      depression: depressionPercent,
      stress: stressPercent,
      wellbeing: wellbeingPercent
    },
    overallStatus,
    concerns,
    recommendations,
    bookRecommendations
  };
};