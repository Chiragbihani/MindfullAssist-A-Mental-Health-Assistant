// This file contains mental health chatbot responses

interface ResponseData {
  keywords: string[];
  response: string;
}

export const generalResponses: ResponseData[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hi there! I'm really glad you reached out. How are you feeling right now?"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'talk later'],
    response: "Take care! I'm always here if you need someone to talk to again."
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're very welcome. It’s strong of you to take steps toward better mental health."
  },
  {
    keywords: ['test', 'assessment', 'evaluate', 'quiz'],
    response: "You can take a mental health assessment on our Test page. It might offer you helpful insights."
  },
  {
    keywords: ['resources', 'books', 'articles', 'support'],
    response: "You can find helpful articles, books, and support links on our Resources page to guide you on your journey."
  },
  {
    keywords: ['stress', 'stressed', 'overwhelmed'],
    response: "Stress can be tough. Try taking deep breaths or a short break. Would you like some relaxation exercises?"
  },
  {
    keywords: ['anxiety', 'anxious', 'nervous'],
    response: "Feeling anxious is okay. You're not alone. Do you want to talk about what's making you anxious?"
  },
  {
    keywords: ['depressed', 'sad', 'down', 'hopeless'],
    response: "I'm sorry you're feeling this way. You're not alone, and it's okay to ask for help. Talking can be a good first step."
  },
  {
    keywords: ['lonely', 'alone', 'isolated'],
    response: "Loneliness is something many people experience. I'm here to talk. Want to chat about how you're feeling?"
  },
  {
    keywords: ['motivation', 'lazy', 'unmotivated'],
    response: "It's hard to stay motivated all the time. Want to explore small steps to get started again?"
  },
  {
    keywords: ['sleep', 'insomnia', 'can’t sleep'],
    response: "Good sleep is important. Would you like some tips on relaxing before bed or creating a sleep routine?"
  },
  {
    keywords: ['panic', 'panic attack', 'heart racing'],
    response: "It sounds like you're experiencing intense anxiety. Try grounding techniques—can I guide you through one?"
  },
  {
    keywords: ['help', 'support', 'need help'],
    response: "I'm here for you. Do you want to talk about what you're going through or find support options?"
  },

  {
    keywords: ['angry', 'frustrated', 'irritated'],
    response: "It's okay to feel angry or frustrated sometimes. Want to talk about what's causing these feelings?"
  },
  {
    keywords: ['burnout', 'exhausted', 'tired of everything'],
    response: "Burnout can really drain you. Let's talk about what's been going on and how you can take care of yourself."
  },
  {
    keywords: ['suicidal', 'give up', 'end it all'],
    response: "I'm really sorry you're feeling this way. You're not alone. Please consider talking to a mental health professional or calling a crisis line in your area."
  },
  {
    keywords: ['happy', 'good', 'feeling great'],
    response: "That's wonderful to hear! I'm glad you're feeling good. Want to share what's making your day better?"
  },
  {
    keywords: ['bored', 'nothing to do'],
    response: "Boredom can be tough. Would you like suggestions for relaxing activities or something fun to lift your mood?"
  },
  {
    keywords: ['talk', 'chat', 'listen'],
    response: "I'm here for you. Tell me what's on your mind—I'm listening."
  },
  {
    keywords: ['friend', 'relationships', 'social'],
    response: "Navigating relationships can be tricky. Want to talk about something that’s been bothering you?"
  },
  {
    keywords: ['self-esteem', 'worthless', 'not good enough'],
    response: "You matter, and your feelings are valid. Let’s talk about what’s been affecting your self-esteem."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I'm here to chat about mental health and wellbeing. How are you feeling today?"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'talk later'],
    response: "Thank you for chatting with me today. Remember, taking care of your mental health is a journey. I'm here whenever you need to talk again."
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! I'm glad I could help. Remember that seeking support is a sign of strength, not weakness."
  },
  {
    keywords: ['test', 'assessment', 'evaluate', 'quiz'],
    response: "If you'd like to take a mental health assessment, please visit our Test page. It can help provide insights into your current mental wellbeing."
  },
  {
    keywords: ['resources', 'books', 'journals', 'read', 'learning'],
    response: "We have a curated collection of books and journals on our Resources page that can provide valuable insights and support for your mental health journey."
  },
  {
    keywords: ['music', 'podcast', 'listen', 'audio', 'meditation'],
    response: "Music and podcasts can be powerful tools for mental wellbeing. Check out our Media page for soothing music and insightful podcasts designed to support your mental health."
  }
];

export const anxietyResponses: ResponseData[] = [
  {
    keywords: ['anxious', 'anxiety', 'worry', 'worried', 'panic', 'stress', 'stressed'],
    response: "I understand anxiety can be challenging. Some helpful strategies include deep breathing exercises, mindfulness meditation, and focusing on what you can control. Would you like to know more about any of these techniques?"
  },
  {
    keywords: ['breathing', 'breath', 'deep breath'],
    response: "Deep breathing is a powerful tool for anxiety. Try this: Breathe in slowly through your nose for 4 counts, hold for 2, then exhale through your mouth for 6 counts. Repeat this 5-10 times, focusing solely on your breath."
  },
  {
    keywords: ['mindful', 'mindfulness', 'present', 'meditation', 'meditate'],
    response: "Mindfulness involves paying attention to the present moment without judgment. Try focusing on one of your senses for a minute - what can you see, hear, or feel right now? This can help ground you when anxiety feels overwhelming."
  },
  {
    keywords: ['overthinking', 'thoughts', 'thinking too much', 'ruminating', 'rumination'],
    response: "Overthinking is common with anxiety. Try writing down your thoughts to externalize them, scheduling a specific 'worry time' each day, or practicing thought-stopping techniques by saying 'stop' when you notice unproductive thoughts."
  }
];

export const depressionResponses: ResponseData[] = [
  {
    keywords: ['depress', 'sad', 'down', 'hopeless', 'unmotivated', 'tired', 'exhausted', 'empty'],
    response: "I'm sorry you're feeling this way. Depression can make even simple tasks feel difficult. Small steps like getting some sunlight, light physical activity, and maintaining social connections can help. Would you like to know more about strategies that might help?"
  },
  {
    keywords: ['motivation', 'energy', 'lazy', 'can\'t do anything', 'no energy'],
    response: "When depression affects motivation, try breaking tasks into tiny steps. Even small accomplishments matter. Set very modest goals like 'I'll wash one dish' or 'I'll step outside for 2 minutes.' Be gentle with yourself during this process."
  },
  {
    keywords: ['sleep', 'insomnia', 'can\'t sleep', 'tired', 'fatigue'],
    response: "Sleep problems often accompany depression. Try establishing a consistent sleep schedule, creating a calming bedtime routine, limiting screen time before bed, and making your sleep environment comfortable. These small changes can significantly improve sleep quality."
  },
  {
    keywords: ['meaning', 'purpose', 'point', 'why bother', 'what\'s the point'],
    response: "Questioning meaning and purpose can be part of depression. Finding small sources of meaning - helping others, connecting with nature, creative expression, or learning something new - can help rebuild a sense of purpose. These moments matter, even when they seem small."
  }
];

export const selfCareResponses: ResponseData[] = [
  {
    keywords: ['self-care', 'selfcare', 'take care', 'help myself', 'routine'],
    response: "Self-care is essential for mental wellbeing. This includes basics like adequate sleep, nutrition, and movement, as well as activities that bring you joy and relaxation. What self-care activities have worked for you in the past?"
  },
  {
    keywords: ['exercise', 'physical', 'workout', 'move', 'movement'],
    response: "Physical activity is powerful for mental health. Even 10 minutes of walking or gentle stretching can release endorphins and improve mood. The best exercise is one you enjoy enough to do regularly - could be dancing, gardening, yoga, or any movement that feels good."
  },
  {
    keywords: ['food', 'eat', 'nutrition', 'diet', 'appetite'],
    response: "Nutrition affects mental health significantly. Focus on adding nutritious foods rather than restricting - more fruits, vegetables, whole grains, and proteins. Staying hydrated and eating regularly can help stabilize mood and energy levels."
  },
  {
    keywords: ['routine', 'schedule', 'structure', 'habit', 'daily'],
    response: "Creating structure through daily routines can provide stability for mental health. Start with consistent wake and sleep times, regular meals, and small rituals that mark transitions in your day. Predictability can create a sense of safety and control."
  }
];

export const socialResponses: ResponseData[] = [
  {
    keywords: ['lonely', 'alone', 'isolated', 'no friends', 'isolation'],
    response: "Loneliness can significantly impact mental health. Consider reaching out to one person today, joining community groups (online or in-person), volunteering, or using technology to connect. Would you like to explore strategies for building meaningful connections?"
  },
  {
    keywords: ['relationship', 'friend', 'family', 'social', 'connect', 'connection'],
    response: "Healthy relationships are vital for wellbeing. Quality matters more than quantity. Focus on nurturing connections that feel supportive and reciprocal, and consider how you might gradually expand your social circle in ways that feel comfortable for you."
  },
  {
    keywords: ['conflict', 'argument', 'fighting', 'disagreement'],
    response: "Relationship conflicts can be stressful. Using 'I' statements, active listening, taking breaks when emotions run high, and focusing on understanding rather than 'winning' can help navigate disagreements more effectively."
  }
];

export const professionalHelpResponses: ResponseData[] = [
  {
    keywords: ['therapy', 'therapist', 'counseling', 'counselor', 'professional', 'psychologist', 'psychiatrist'],
    response: "Seeking professional support is a courageous step. Therapists, counselors, psychologists, and psychiatrists have different specialties and approaches. Would you like to know more about these differences or how to find the right professional for you?"
  },
  {
    keywords: ['medication', 'meds', 'pills', 'medicine', 'drug'],
    response: "Medication can be helpful for many mental health conditions when prescribed and monitored by a healthcare provider. It often works best when combined with therapy and lifestyle approaches. This is something to discuss with a healthcare professional who knows your specific situation."
  },
  {
    keywords: ['cost', 'afford', 'expensive', 'insurance', 'money', 'price'],
    response: "Cost can be a barrier to mental healthcare. Options to explore include insurance coverage, sliding scale fees, community mental health centers, university training clinics, employee assistance programs, or telehealth options which may be more affordable."
  },
  {
    keywords: ['crisis', 'emergency', 'suicidal', 'kill myself', 'harm', 'hurt myself', 'die'],
    response: "If you're experiencing a mental health crisis or having thoughts of harming yourself, please reach out to a crisis service immediately. In the US, call or text 988 for the Suicide & Crisis Lifeline, available 24/7. Your life matters, and help is available."
  }
];

// Combine all response categories
export const allResponses = [
  ...generalResponses,
  ...anxietyResponses,
  ...depressionResponses,
  ...selfCareResponses,
  ...socialResponses,
  ...professionalHelpResponses
];

// Fallback responses when no keywords match
export const fallbackResponses = [
  "I'm here to listen and support you. Could you tell me more about what you're experiencing?",
  "That's an important concern. Would you like to explore some strategies that might help with this?",
  "Thank you for sharing that with me. What kind of support would be most helpful for you right now?",
  "I understand this is challenging. Have you considered how self-care practices might help in this situation?",
  "It sounds like you're going through a lot. Remember that seeking support is a sign of strength, not weakness."
];