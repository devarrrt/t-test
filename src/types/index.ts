export type AnswerOption = {
  id: string;
  text: string;
};

type QuestionType = 'single' | 'multiple';

export type Question = {
  id: string;
  title: string;
  type: QuestionType;
  options: AnswerOption[];
};

export type Survey = Question[];

export const STEPS = ['answers', 'results'] as const;
export type Step = (typeof STEPS)[number];

export type UserAnswers = {
  [questionId: string]: string | string[];
};
export type SurveyContextType = {
  questions: Question[];
  currentIndex: number;
  answers: UserAnswers;
  selectAnswer: (questionId: string, answer: string | string[]) => void;
  next: () => void;
  prev: () => void;
  step: Step;
  getUnansweredQuestionsCount: () => number;
  returnToStart: () => void;
};
