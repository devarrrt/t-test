import { createContext, useContext, useState, ReactNode } from 'react';

import { Step, SurveyContextType, UserAnswers } from '../types';

import { questionsData } from '../data';

const SurveyContext = createContext<SurveyContextType | null>(null);

export default function SurveyProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [step, setStep] = useState<Step>('answers');

  const selectAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => {
      if (Array.isArray(answer) && answer.length === 0) {
        const { [questionId]: answ, ...rest } = prev;
        return rest;
      }

      return { ...prev, [questionId]: answer };
    });
  };

  const next = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep('results');
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getUnansweredQuestionsCount = (): number => {
    return questionsData.filter((q) => answers[q.id] === 'skip').length;
  };

  const returnToStart = () => {
    setStep('answers');
    setAnswers({});
    setCurrentIndex(0);
  };

  const contextValue = {
    questions: questionsData,
    currentIndex,
    answers,
    selectAnswer,
    next,
    prev,
    step,
    getUnansweredQuestionsCount,
    returnToStart,
  };

  return (
    <SurveyContext.Provider value={contextValue}>
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurveyContext must be used with SurveyProvider');
  }
  return context;
}
