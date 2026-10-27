import { 
  QuizAttempt, 
  Question, 
  Subject, 
  UserProfile, 
  GamificationState, 
  Achievement, 
  LeaderboardEntry,
  DailyStudySettings,
  DailyChallenge
} from '../types';
import { 
  computeGamificationState, 
  INITIAL_ACHIEVEMENTS, 
  evaluateAchievements, 
  updateStreak 
} from './gamification';

const STORAGE_KEY_ATTEMPTS = 'quizforge_attempts_v1';
const STORAGE_KEY_MASTERED_FC = 'quizforge_mastered_fc_v1';
const STORAGE_KEY_PROFILE = 'quizforge_user_profile_v1';
const STORAGE_KEY_GAMIFICATION = 'quizforge_gamification_v1';
const STORAGE_KEY_ACHIEVEMENTS = 'quizforge_achievements_v1';
const STORAGE_KEY_WELCOME_DISMISSED = 'quizforge_welcome_dismissed_v1';

// --- QUIZ ATTEMPTS ---

export function getQuizAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ATTEMPTS);
    if (!raw) return [];
    return JSON.parse(raw) as QuizAttempt[];
  } catch (e) {
    console.error('Error reading quiz attempts from localStorage', e);
    return [];
  }
}

export function saveQuizAttempt(attempt: QuizAttempt): void {
  try {
    const current = getQuizAttempts();
    // Cap at most 50 recent attempts to prevent browser storage quota overflow
    const updated = [attempt, ...current].slice(0, 50);
    localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving quiz attempt to localStorage', e);
  }
}

export function clearQuizAttempts(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_ATTEMPTS);
  } catch (e) {
    console.error('Error clearing quiz attempts', e);
  }
}

// --- MASTERED FLASHCARDS ---

export function getMasteredFlashcardIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MASTERED_FC);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch (e) {
    console.error('Error reading mastered flashcards from localStorage', e);
    return [];
  }
}

export function toggleMasteredFlashcard(id: string): boolean {
  try {
    const current = getMasteredFlashcardIds();
    let updated: string[];
    let isMastered: boolean;
    if (current.includes(id)) {
      updated = current.filter(item => item !== id);
      isMastered = false;
    } else {
      updated = [...current, id];
      isMastered = true;
    }
    localStorage.setItem(STORAGE_KEY_MASTERED_FC, JSON.stringify(updated));
    return isMastered;
  } catch (e) {
    console.error('Error toggling flashcard mastery', e);
    return false;
  }
}

// --- USER PROFILE ---

export function getUserProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (raw) return JSON.parse(raw) as UserProfile;
  } catch (e) {
    console.error('Error reading user profile', e);
  }

  const defaultProfile: UserProfile = {
    id: `usr-${Date.now()}`,
    displayName: 'Student',
    avatarColor: 'indigo',
    createdAt: new Date().toISOString()
  };
  saveUserProfile(defaultProfile);
  return defaultProfile;
}

export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Error saving user profile', e);
  }
}

// --- GAMIFICATION & XP ---

export function getGamificationState(): GamificationState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_GAMIFICATION);
    if (raw) {
      const parsed = JSON.parse(raw);
      return computeGamificationState(
        parsed.totalXP || 0,
        parsed.currentStreak || 0,
        parsed.longestStreak || 0,
        parsed.lastStudyDate || null,
        parsed.awardedAttemptIds || []
      );
    }
  } catch (e) {
    console.error('Error reading gamification state', e);
  }

  const initial = computeGamificationState(0, 0, 0, null, []);
  saveGamificationState(initial);
  return initial;
}

export function saveGamificationState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY_GAMIFICATION, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving gamification state', e);
  }
}

export function awardXPForAttempt(
  attemptId: string,
  xpEarned: number
): { state: GamificationState; xpAwarded: number } {
  const current = getGamificationState();

  // Anti-farming check: prevent duplicate XP for the same attempt ID
  if (current.awardedAttemptIds.includes(attemptId)) {
    return { state: current, xpAwarded: 0 };
  }

  const streakUpdate = updateStreak(current.currentStreak, current.longestStreak, current.lastStudyDate);
  const newTotalXP = current.totalXP + xpEarned;
  const newAwarded = [attemptId, ...current.awardedAttemptIds].slice(0, 100);

  const updatedState = computeGamificationState(
    newTotalXP,
    streakUpdate.newStreak,
    streakUpdate.newLongestStreak,
    new Date().toISOString().split('T')[0],
    newAwarded
  );

  saveGamificationState(updatedState);
  return { state: updatedState, xpAwarded: xpEarned };
}

// --- ACHIEVEMENTS ---

export function getAchievements(): Achievement[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS);
    if (raw) return JSON.parse(raw) as Achievement[];
  } catch (e) {
    console.error('Error reading achievements', e);
  }
  saveAchievements(INITIAL_ACHIEVEMENTS);
  return INITIAL_ACHIEVEMENTS;
}

export function saveAchievements(achievements: Achievement[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(achievements));
  } catch (e) {
    console.error('Error saving achievements', e);
  }
}

export function syncAchievements(
  attempts: QuizAttempt[],
  masteredCardsCount: number,
  streak: number
): { achievements: Achievement[]; newlyUnlocked: Achievement[] } {
  const current = getAchievements();
  const result = evaluateAchievements(current, attempts, masteredCardsCount, streak);
  if (result.newlyUnlocked.length > 0) {
    saveAchievements(result.achievements);
  }
  return result;
}

// --- FIRST-VISIT WELCOME BANNER ---

export function isWelcomeBannerDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY_WELCOME_DISMISSED) === 'true';
  } catch {
    return false;
  }
}

export function setWelcomeBannerDismissed(): void {
  try {
    localStorage.setItem(STORAGE_KEY_WELCOME_DISMISSED, 'true');
  } catch (e) {
    console.error('Error saving welcome banner dismissed state', e);
  }
}

// --- LEADERBOARD DEMO DATA ---

export const DEMO_LEADERBOARD_ROSTER: LeaderboardEntry[] = [
  { id: 'lb-1', rank: 1, displayName: 'Aarav Sharma', level: 5, levelName: 'Master', totalXP: 2450, quizzesCompleted: 28, accuracyRate: 94 },
  { id: 'lb-2', rank: 2, displayName: 'Priya Patel', level: 4, levelName: 'Expert', totalXP: 1820, quizzesCompleted: 22, accuracyRate: 91 },
  { id: 'lb-3', rank: 3, displayName: 'Rohan Verma', level: 4, levelName: 'Expert', totalXP: 1640, quizzesCompleted: 19, accuracyRate: 88 },
  { id: 'lb-4', rank: 4, displayName: 'Ananya Iyer', level: 3, levelName: 'Scholar', totalXP: 980, quizzesCompleted: 14, accuracyRate: 86 },
  { id: 'lb-5', rank: 5, displayName: 'Vikram Joshi', level: 3, levelName: 'Scholar', totalXP: 820, quizzesCompleted: 11, accuracyRate: 82 },
  { id: 'lb-6', rank: 6, displayName: 'Neha Gupta', level: 2, levelName: 'Learner', totalXP: 450, quizzesCompleted: 6, accuracyRate: 79 },
  { id: 'lb-7', rank: 7, displayName: 'Siddharth Rao', level: 2, levelName: 'Learner', totalXP: 320, quizzesCompleted: 5, accuracyRate: 75 }
];

export function buildLeaderboard(
  currentUser: UserProfile,
  gamification: GamificationState,
  attempts: QuizAttempt[],
  includeDemo = true
): { leaderboard: LeaderboardEntry[]; userRank: number } {
  const userQuizzes = attempts.length;
  const totalCorrect = attempts.reduce((acc, a) => acc + a.score, 0);
  const totalQuestions = attempts.reduce((acc, a) => acc + a.totalQuestions, 0);
  const userAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const currentEntry: LeaderboardEntry = {
    id: currentUser.id,
    rank: 1,
    displayName: currentUser.displayName || 'You',
    level: gamification.currentLevel,
    levelName: gamification.levelName,
    totalXP: gamification.totalXP,
    quizzesCompleted: userQuizzes,
    accuracyRate: userAccuracy,
    isCurrentUser: true
  };

  const pool = includeDemo ? [...DEMO_LEADERBOARD_ROSTER, currentEntry] : [currentEntry];

  // Sort descending by totalXP, then by accuracyRate
  pool.sort((a, b) => {
    if (b.totalXP !== a.totalXP) return b.totalXP - a.totalXP;
    return b.accuracyRate - a.accuracyRate;
  });

  // Assign ranks
  const ranked = pool.map((entry, index) => ({
    ...entry,
    rank: index + 1
  }));

  const userRank = ranked.find(e => e.isCurrentUser)?.rank || 1;
  return { leaderboard: ranked, userRank };
}

// --- STATS COMPUTATION ---

export interface SubjectStats {
  quizzesTaken: number;
  totalQuestions: number;
  totalCorrect: number;
  averageScorePercentage: number;
}

export interface OverallStats {
  totalQuizzes: number;
  averageScore: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  accuracyRate: number;
  masteredFlashcardsCount: number;
  subjectStats: Record<Subject, SubjectStats>;
}

export function computeUserStats(attempts: QuizAttempt[], masteredCount: number): OverallStats {
  if (!Array.isArray(attempts) || attempts.length === 0) {
    return {
      totalQuizzes: 0,
      averageScore: 0,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      accuracyRate: 0,
      masteredFlashcardsCount: masteredCount,
      subjectStats: {
        Physics: { quizzesTaken: 0, totalQuestions: 0, totalCorrect: 0, averageScorePercentage: 0 },
        Chemistry: { quizzesTaken: 0, totalQuestions: 0, totalCorrect: 0, averageScorePercentage: 0 },
        Mathematics: { quizzesTaken: 0, totalQuestions: 0, totalCorrect: 0, averageScorePercentage: 0 }
      }
    };
  }

  const totalQuizzes = attempts.length;
  let totalScoreSum = 0;
  let totalQuestionsAnswered = 0;
  let totalCorrectAnswers = 0;

  const subjectData: Record<Subject, { quizzes: number; questions: number; correct: number }> = {
    Physics: { quizzes: 0, questions: 0, correct: 0 },
    Chemistry: { quizzes: 0, questions: 0, correct: 0 },
    Mathematics: { quizzes: 0, questions: 0, correct: 0 }
  };

  attempts.forEach(attempt => {
    if (!attempt) return;
    totalScoreSum += attempt.percentage || 0;
    totalQuestionsAnswered += attempt.totalQuestions || 0;
    totalCorrectAnswers += attempt.score || 0;

    const subjectsInThisQuiz = new Set<Subject>();

    if (Array.isArray(attempt.questions)) {
      attempt.questions.forEach((q, idx) => {
        if (!q) return;
        const ua = Array.isArray(attempt.userAnswers)
          ? (attempt.userAnswers.find(a => a && a.questionId === q.id) || attempt.userAnswers[idx])
          : undefined;

        if (subjectData[q.subject]) {
          subjectData[q.subject].questions += 1;
          subjectsInThisQuiz.add(q.subject);
          if (ua && ua.isCorrect) {
            subjectData[q.subject].correct += 1;
          }
        }
      });
    }

    subjectsInThisQuiz.forEach(subj => {
      subjectData[subj].quizzes += 1;
    });
  });

  const subjectStats: Record<Subject, SubjectStats> = {
    Physics: {
      quizzesTaken: subjectData.Physics.quizzes,
      totalQuestions: subjectData.Physics.questions,
      totalCorrect: subjectData.Physics.correct,
      averageScorePercentage: subjectData.Physics.questions > 0
        ? Math.round((subjectData.Physics.correct / subjectData.Physics.questions) * 100)
        : 0
    },
    Chemistry: {
      quizzesTaken: subjectData.Chemistry.quizzes,
      totalQuestions: subjectData.Chemistry.questions,
      totalCorrect: subjectData.Chemistry.correct,
      averageScorePercentage: subjectData.Chemistry.questions > 0
        ? Math.round((subjectData.Chemistry.correct / subjectData.Chemistry.questions) * 100)
        : 0
    },
    Mathematics: {
      quizzesTaken: subjectData.Mathematics.quizzes,
      totalQuestions: subjectData.Mathematics.questions,
      totalCorrect: subjectData.Mathematics.correct,
      averageScorePercentage: subjectData.Mathematics.questions > 0
        ? Math.round((subjectData.Mathematics.correct / subjectData.Mathematics.questions) * 100)
        : 0
    }
  };

  const averageScore = totalQuizzes > 0 ? Math.round(totalScoreSum / totalQuizzes) : 0;
  const accuracyRate = totalQuestionsAnswered > 0
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100)
    : 0;

  return {
    totalQuizzes,
    averageScore,
    totalQuestionsAnswered,
    totalCorrectAnswers,
    accuracyRate,
    masteredFlashcardsCount: masteredCount,
    subjectStats
  };
}

export interface MistakeItem {
  question: Question;
  lastSelectedOptionIndex: number | null;
  attemptDate: string;
  quizId: string;
}

export function getAllMistakes(attempts: QuizAttempt[]): MistakeItem[] {
  const mistakesMap = new Map<string, MistakeItem>();
  if (!Array.isArray(attempts)) return [];

  const sorted = [...attempts].reverse();

  sorted.forEach(attempt => {
    if (!attempt || !Array.isArray(attempt.questions)) return;

    attempt.questions.forEach((q, idx) => {
      if (!q) return;
      const ua = Array.isArray(attempt.userAnswers)
        ? (attempt.userAnswers.find(a => a && a.questionId === q.id) || attempt.userAnswers[idx])
        : undefined;

      if (ua && !ua.isCorrect) {
        mistakesMap.set(q.id, {
          question: q,
          lastSelectedOptionIndex: ua.selectedOptionIndex,
          attemptDate: attempt.date,
          quizId: attempt.id
        });
      } else if (ua && ua.isCorrect) {
        mistakesMap.delete(q.id);
      }
    });
  });

  return Array.from(mistakesMap.values());
}

// --- DAILY ENGAGEMENT & PWA NOTIFICATIONS ---

const STORAGE_KEY_DAILY_SETTINGS = 'quizforge_daily_settings_v1';
const STORAGE_KEY_DAILY_CHALLENGE = 'quizforge_daily_challenge_v1';

export function getDailyStudySettings(): DailyStudySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DAILY_SETTINGS);
    if (raw) return JSON.parse(raw) as DailyStudySettings;
  } catch (e) {
    console.error('Error reading daily study settings', e);
  }
  const defaultSettings: DailyStudySettings = {
    dailyQuestionGoal: 10,
    reminderEnabled: false,
    reminderTime: '19:00'
  };
  saveDailyStudySettings(defaultSettings);
  return defaultSettings;
}

export function saveDailyStudySettings(settings: DailyStudySettings): void {
  try {
    localStorage.setItem(STORAGE_KEY_DAILY_SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving daily study settings', e);
  }
}

export function getTodayQuestionsAnswered(attempts: QuizAttempt[]): { answered: number; correct: number } {
  const today = new Date().toISOString().split('T')[0];
  let answered = 0;
  let correct = 0;

  if (Array.isArray(attempts)) {
    attempts.forEach(attempt => {
      if (attempt.date && attempt.date.startsWith(today)) {
        answered += attempt.totalQuestions || 0;
        correct += attempt.score || 0;
      }
    });
  }

  return { answered, correct };
}

const DAILY_CHALLENGE_ROSTER: { title: string; subject: Subject; topic: string; questionCount: number; bonusXP: number }[] = [
  { title: "Newton's Laws & Kinematics Sprint", subject: 'Physics', topic: 'Kinematics', questionCount: 5, bonusXP: 50 },
  { title: "Atomic Structure & Orbitals", subject: 'Chemistry', topic: 'Structure of Atom', questionCount: 5, bonusXP: 50 },
  { title: "Trigonometric Precision Drill", subject: 'Mathematics', topic: 'Trigonometric Functions', questionCount: 5, bonusXP: 50 },
  { title: "Laws of Motion & Friction", subject: 'Physics', topic: 'Laws of Motion', questionCount: 5, bonusXP: 50 },
  { title: "Thermodynamics & Heat", subject: 'Physics', topic: 'Thermodynamics', questionCount: 5, bonusXP: 50 },
  { title: "Chemical Bonding & Shapes", subject: 'Chemistry', topic: 'Chemical Bonding and Molecular Structure', questionCount: 5, bonusXP: 50 },
  { title: "Permutations & Combinations", subject: 'Mathematics', topic: 'Permutations and Combinations', questionCount: 5, bonusXP: 50 }
];

export function getDailyChallenge(): DailyChallenge {
  const today = new Date().toISOString().split('T')[0];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DAILY_CHALLENGE);
    if (raw) {
      const parsed = JSON.parse(raw) as DailyChallenge;
      if (parsed.date === today) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading daily challenge', e);
  }

  // Deterministic daily challenge based on day number
  const dayOfYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const template = DAILY_CHALLENGE_ROSTER[Math.abs(dayOfYear) % DAILY_CHALLENGE_ROSTER.length];

  const newChallenge: DailyChallenge = {
    date: today,
    title: template.title,
    subject: template.subject,
    topic: template.topic,
    questionCount: template.questionCount,
    bonusXP: template.bonusXP,
    completed: false
  };

  saveDailyChallenge(newChallenge);
  return newChallenge;
}

export function saveDailyChallenge(challenge: DailyChallenge): void {
  try {
    localStorage.setItem(STORAGE_KEY_DAILY_CHALLENGE, JSON.stringify(challenge));
  } catch (e) {
    console.error('Error saving daily challenge', e);
  }
}

