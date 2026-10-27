import { 
  GamificationState, 
  LevelInfo, 
  LevelTier, 
  QuizAttempt, 
  Achievement 
} from '../types';

export const LEVEL_TIERS: LevelInfo[] = [
  { level: 1, name: 'Beginner', minXP: 0, maxXP: 199 },
  { level: 2, name: 'Learner', minXP: 200, maxXP: 499 },
  { level: 3, name: 'Scholar', minXP: 500, maxXP: 999 },
  { level: 4, name: 'Expert', minXP: 1000, maxXP: 1999 },
  { level: 5, name: 'Master', minXP: 2000, maxXP: Infinity }
];

export function getLevelForXP(totalXP: number): LevelInfo {
  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_TIERS[i].minXP) {
      return LEVEL_TIERS[i];
    }
  }
  return LEVEL_TIERS[0];
}

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function calculateQuizXP(attempt: QuizAttempt): { totalEarned: number; breakdown: { base: number; correct: number; performance: number } } {
  const base = 40; // Base completion XP
  const correct = attempt.score * 10; // 10 XP per correct answer
  let performance = 0;

  if (attempt.percentage === 100 && attempt.totalQuestions >= 5) {
    performance = 60; // Perfect score bonus
  } else if (attempt.percentage >= 80) {
    performance = 30; // High score bonus
  } else if (attempt.percentage >= 60) {
    performance = 15; // Merit bonus
  }

  const totalEarned = base + correct + performance;
  return {
    totalEarned,
    breakdown: { base, correct, performance }
  };
}

export function updateStreak(currentStreak: number, longestStreak: number, lastStudyDate: string | null): { newStreak: number; newLongestStreak: number; updatedToday: boolean } {
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  if (!lastStudyDate) {
    return { newStreak: 1, newLongestStreak: Math.max(longestStreak, 1), updatedToday: true };
  }

  if (lastStudyDate === today) {
    // Already studied today
    return { newStreak: currentStreak, newLongestStreak: longestStreak, updatedToday: false };
  }

  if (lastStudyDate === yesterday) {
    // Studied yesterday, increment streak
    const nextStreak = currentStreak + 1;
    return { newStreak: nextStreak, newLongestStreak: Math.max(longestStreak, nextStreak), updatedToday: true };
  }

  // Broken streak (> 1 day gap)
  return { newStreak: 1, newLongestStreak: longestStreak, updatedToday: true };
}

export function computeGamificationState(totalXP: number, streak: number, longestStreak: number, lastDate: string | null, awardedIds: string[]): GamificationState {
  const currentTier = getLevelForXP(totalXP);
  const nextTier = LEVEL_TIERS.find(t => t.level === currentTier.level + 1);

  const xpInCurrentLevel = totalXP - currentTier.minXP;
  const xpForNextLevel = nextTier ? nextTier.minXP - currentTier.minXP : 0;

  return {
    totalXP,
    currentLevel: currentTier.level,
    levelName: currentTier.name,
    xpInCurrentLevel,
    xpForNextLevel,
    currentStreak: streak,
    longestStreak,
    lastStudyDate: lastDate,
    awardedAttemptIds: awardedIds
  };
}

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_quiz',
    title: 'First Step',
    description: 'Complete your first quiz session',
    iconName: 'Sparkles',
    category: 'quiz',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'perfect_score',
    title: 'Precision Master',
    description: 'Achieve 100% accuracy on any quiz with at least 5 questions',
    iconName: 'Award',
    category: 'accuracy',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'five_quizzes',
    title: 'Consistent Learner',
    description: 'Complete 5 quiz sessions across any subject',
    iconName: 'BookOpen',
    category: 'quiz',
    progress: 0,
    maxProgress: 5,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'streak_3',
    title: 'Study Habit',
    description: 'Maintain a 3-day daily study streak',
    iconName: 'Flame',
    category: 'streak',
    progress: 0,
    maxProgress: 3,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'streak_7',
    title: 'Dedicated Scholar',
    description: 'Maintain a 7-day daily study streak',
    iconName: 'Flame',
    category: 'streak',
    progress: 0,
    maxProgress: 7,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'master_cards_10',
    title: 'Memory Champion',
    description: 'Commit 10 or more revision flashcards to memory',
    iconName: 'Layers',
    category: 'mastery',
    progress: 0,
    maxProgress: 10,
    isUnlocked: false,
    unlockedAt: null
  },
  {
    id: 'subject_trio',
    title: 'All-Rounder',
    description: 'Complete at least one quiz in Physics, Chemistry, and Mathematics',
    iconName: 'Compass',
    category: 'quiz',
    progress: 0,
    maxProgress: 3,
    isUnlocked: false,
    unlockedAt: null
  }
];

export function evaluateAchievements(
  currentAchievements: Achievement[],
  attempts: QuizAttempt[],
  masteredCardsCount: number,
  currentStreak: number
): { achievements: Achievement[]; newlyUnlocked: Achievement[] } {
  const newlyUnlocked: Achievement[] = [];
  const nowISO = new Date().toISOString();

  // Pre-calculate aggregate metrics from actual user attempts
  const totalQuizzes = attempts.length;
  const hasPerfect = attempts.some(a => a.percentage === 100 && a.totalQuestions >= 5);
  const subjectsCovered = new Set<string>();
  attempts.forEach(a => {
    if (a.subject !== 'Mixed') {
      subjectsCovered.add(a.subject);
    } else {
      a.questions.forEach(q => subjectsCovered.add(q.subject));
    }
  });

  const updated = currentAchievements.map(ach => {
    let progress = ach.progress;
    let unlocked = ach.isUnlocked;

    switch (ach.id) {
      case 'first_quiz':
        progress = Math.min(1, totalQuizzes);
        break;
      case 'perfect_score':
        progress = hasPerfect ? 1 : 0;
        break;
      case 'five_quizzes':
        progress = Math.min(5, totalQuizzes);
        break;
      case 'streak_3':
        progress = Math.min(3, currentStreak);
        break;
      case 'streak_7':
        progress = Math.min(7, currentStreak);
        break;
      case 'master_cards_10':
        progress = Math.min(10, masteredCardsCount);
        break;
      case 'subject_trio': {
        const count = ['Physics', 'Chemistry', 'Mathematics'].filter(s => subjectsCovered.has(s)).length;
        progress = Math.min(3, count);
        break;
      }
    }

    const shouldUnlock = progress >= ach.maxProgress;
    if (shouldUnlock && !unlocked) {
      unlocked = true;
      const unlockedItem = { ...ach, progress, isUnlocked: true, unlockedAt: nowISO };
      newlyUnlocked.push(unlockedItem);
      return unlockedItem;
    }

    return { ...ach, progress, isUnlocked: unlocked };
  });

  return { achievements: updated, newlyUnlocked };
}
