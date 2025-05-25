export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  category: 'anxiety' | 'depression' | 'stress' | 'selfhelp' | 'mindfulness';
  imageUrl: string;
}

export interface Podcast {
  id: number;
  title: string;
  host: string;
  description: string;
  category: 'anxiety' | 'depression' | 'mindfulness' | 'selfhelp' | 'stories';
  imageUrl: string;
  audioUrl: string;
}

export interface Music {
  id: number;
  title: string;
  artist: string;
  description: string;
  category: 'meditation' | 'sleep' | 'focus' | 'calming' | 'nature';
  imageUrl: string;
  audioUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Anxiety and Phobia Workbook",
    author: "Edmund Bourne",
    description: "A comprehensive guide for managing anxiety and phobias, offering practical strategies and exercises based on cognitive behavioral therapy.",
    category: "anxiety",
    imageUrl: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Feeling Good: The New Mood Therapy",
    author: "David D. Burns",
    description: "A classic self-help book for depression using cognitive therapy techniques to identify and change negative thought patterns.",
    category: "depression",
    imageUrl: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Why Zebras Don't Get Ulcers",
    author: "Robert M. Sapolsky",
    description: "An exploration of how prolonged stress affects physical health, explaining stress-related diseases and effective coping strategies.",
    category: "stress",
    imageUrl: "https://images.pexels.com/photos/5486813/pexels-photo-5486813.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits and breaking bad ones, focusing on small changes that lead to remarkable results.",
    category: "selfhelp",
    imageUrl: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "The Mindful Way Through Depression",
    author: "Mark Williams, John Teasdale, Zindel Segal, and Jon Kabat-Zinn",
    description: "A guide to using mindfulness to break the cycle of depression, offering practical meditation exercises.",
    category: "mindfulness",
    imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    title: "Lost Connections",
    author: "Johann Hari",
    description: "An exploration of the underlying causes of depression and anxiety, presenting social and psychological factors that contribute to mental health issues.",
    category: "depression",
    imageUrl: "https://images.pexels.com/photos/1290376/pexels-photo-1290376.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    title: "Dare: The New Way to End Anxiety and Stop Panic Attacks",
    author: "Barry McDonagh",
    description: "A practical approach to overcoming anxiety and panic attacks using the DARE response technique.",
    category: "anxiety",
    imageUrl: "https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "A groundbreaking approach to trauma, revealing how it reshapes both body and brain and exploring innovative treatments.",
    category: "selfhelp",
    imageUrl: "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "The Anxiety Coaches Podcast",
    host: "Gina Ryan",
    description: "Weekly episodes providing insights and tools for managing anxiety, featuring discussions on mindfulness, nutrition, and cognitive approaches.",
    category: "anxiety",
    imageUrl: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=easy-lifestyle-137766.mp3"
  },
  {
    id: 2,
    title: "The Hilarious World of Depression",
    host: "John Moe",
    description: "Comedians and creative people discuss their experiences with depression, combining humor with candid conversations about mental health.",
    category: "depression",
    imageUrl: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/02/22/audio_98e215320d.mp3?filename=memories-piano-and-strings-131288.mp3"
  },
  {
    id: 3,
    title: "Ten Percent Happier",
    host: "Dan Harris",
    description: "Explores meditation and mindfulness through interviews with scientists, teachers, and celebrities, making these practices accessible.",
    category: "mindfulness",
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb4f1212a9.mp3?filename=relaxing-mountains-rivers-125569.mp3"
  },
  {
    id: 4,
    title: "The Mental Illness Happy Hour",
    host: "Paul Gilmartin",
    description: "Weekly interviews with artists, friends, and mental health professionals about mental health issues, trauma, addiction, and negative thinking.",
    category: "stories",
    imageUrl: "https://images.pexels.com/photos/3771845/pexels-photo-3771845.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2021/11/17/audio_6b21c35f8e.mp3?filename=floating-abstract-142819.mp3"
  },
  {
    id: 5,
    title: "Therapy for Black Girls",
    host: "Dr. Joy Harden Bradford",
    description: "Discussions on mental health and personal development topics relevant to Black women's well-being and growth.",
    category: "selfhelp",
    imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_fbd0d191b7.mp3?filename=piano-moment-9835.mp3"
  }
];

export const music: Music[] = [
  {
    id: 1,
    title: "Deep Sleep Journey",
    artist: "Sleep Sounds",
    description: "Gentle ambient sounds designed to help you fall into a deep, restful sleep.",
    category: "sleep",
    imageUrl: "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/30/audio_38a001d539.mp3?filename=floating-in-time-171170.mp3"
  },
  {
    id: 2,
    title: "Morning Meditation",
    artist: "Mindful Moments",
    description: "A calming track to accompany your morning meditation practice.",
    category: "meditation",
    imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b8956581.mp3?filename=atmosphere-clouds-138828.mp3"
  },
  {
    id: 3,
    title: "Focus Flow",
    artist: "Concentration Sounds",
    description: "Ambient music designed to enhance concentration and productivity.",
    category: "focus",
    imageUrl: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/09/audio_67a6dd72be.mp3?filename=deep-ambient-138199.mp3"
  },
  {
    id: 4,
    title: "Rainforest Sounds",
    artist: "Nature Recordings",
    description: "Immersive rainforest ambience to reduce stress and anxiety.",
    category: "nature",
    imageUrl: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2021/04/08/audio_610b772248.mp3?filename=light-rain-ambient-114354.mp3"
  },
  {
    id: 5,
    title: "Calm Piano",
    artist: "Relaxing Keys",
    description: "Gentle piano melodies to soothe the mind and reduce anxiety.",
    category: "calming",
    imageUrl: "https://images.pexels.com/photos/345168/pexels-photo-345168.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/20/audio_b3ddbc7724.mp3?filename=relaxing-145038.mp3"
  },
  {
    id: 6,
    title: "Ocean Waves",
    artist: "Coastal Sounds",
    description: "The rhythmic sound of ocean waves to promote relaxation and sleep.",
    category: "nature",
    imageUrl: "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c3a2dfbc10.mp3?filename=ocean-waves-112762.mp3"
  }
];