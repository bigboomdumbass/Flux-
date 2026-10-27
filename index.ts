export type Subject = 'Physics' | 'Chemistry' | 'Mathematics';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  formulaOrHint?: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null; // null if skipped
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizAttempt {
  id: string;
  date: string; // ISO string
  subject: Subject | 'Mixed';
  topic: string;
  difficulty: Difficulty | 'Mixed';
  totalQuestions: number;
  score: number; // number of correct answers
  percentage: number;
  timeSpentSeconds: number;
  userAnswers: UserAnswer[];
  questions: Question[]; // Snapshot of questions taken
  isSampleQuiz?: boolean;
  timeLimitPerQuestionSeconds?: number;
  xpEarned?: number;
}

export interface Flashcard {
  id: string;
  subject: Subject;
  topic: string;
  frontTitle: string;
  frontContent: string;
  formula?: string;
  backDefinition: string;
  backKeyPoints: string[];
  backExampleOrApplication?: string;
}

export interface QuizConfig {
  subject: Subject | 'All';
  topic: string | 'All';
  difficulty: Difficulty | 'All';
  questionCount: number;
  timeLimitPerQuestionSeconds?: number; // 0 for untimed
}

// --- GAMIFICATION, PROFILE & ACHIEVEMENTS ---

export type LevelTier = 'Beginner' | 'Learner' | 'Scholar' | 'Expert' | 'Master';

export interface LevelInfo {
  level: number;
  name: LevelTier;
  minXP: number;
  maxXP: number;
}

export interface GamificationState {
  totalXP: number;
  currentLevel: number;
  levelName: LevelTier;
  xpInCurrentLevel: number;
  xpForNextLevel: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null; // 'YYYY-MM-DD'
  awardedAttemptIds: string[]; // prevent duplicate XP farming
}

export interface UserProfile {
  id: string;
  displayName: string;
  email?: string;
  avatarColor: string;
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'quiz' | 'streak' | 'accuracy' | 'mastery';
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  unlockedAt: string | null;
}

// --- LEADERBOARD & MULTIPLAYER ---

export interface LeaderboardEntry {
  id: string;
  rank: number;
  displayName: string;
  level: number;
  levelName: LevelTier;
  totalXP: number;
  quizzesCompleted: number;
  accuracyRate: number;
  isCurrentUser?: boolean;
}

export type MultiplayerRoomStatus = 'waiting' | 'in_progress' | 'completed';

export interface MultiplayerPlayer {
  id: string;
  name: string;
  score: number;
  answers: (number | null)[];
  currentQuestionIndex: number;
  isHost: boolean;
  isReady: boolean;
}

export interface MultiplayerRoom {
  code: string;
  subject: Subject | 'All';
  topic: string;
  questionCount: number;
  timeLimitPerQuestion: number;
  questions: Question[];
  status: MultiplayerRoomStatus;
  host: MultiplayerPlayer;
  guest?: MultiplayerPlayer;
  isDemoMode: boolean;
}

// --- DAILY ENGAGEMENT & PWA NOTIFICATIONS ---

export interface DailyStudySettings {
  dailyQuestionGoal: number; // e.g. 10 questions per day
  reminderEnabled: boolean;
  reminderTime: string; // "19:00"
}

export interface DailyChallenge {
  date: string; // 'YYYY-MM-DD'
  title: string;
  subject: Subject;
  topic: string;
  questionCount: number;
  bonusXP: number;
  completed: boolean;
}

