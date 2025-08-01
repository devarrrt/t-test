import { FC, useMemo } from 'react';

import { Option } from './Option';

import { Question } from '../../types';

import { useSurveyContext } from '../../state/surveyContext';

import { QuestionContainer, Title, TextQuestion } from './styles';

interface QuestionsBlockProps {
  data: Question[];
}

export const QuestionsBlock: FC<QuestionsBlockProps> = ({ data }) => {
  const { currentIndex, answers, selectAnswer } = useSurveyContext();

  const currentQuestion = useMemo(
    () => data[currentIndex],
    [data, currentIndex],
  );

  const handleChange = (optionId: string) => {
    if (currentQuestion.type === 'single') {
      selectAnswer(currentQuestion.id, optionId);
    } else {
      const prev = (answers[currentQuestion.id] as string[]) || [];

      const selectedOptions = prev.includes(optionId)
        ? prev.filter((v) => v !== optionId)
        : [...prev, optionId];

      selectAnswer(currentQuestion.id, selectedOptions);
    }
  };

  const isChecked = (optionId: string): boolean => {
    const value = answers[currentQuestion.id];
    return currentQuestion.type === 'single'
      ? value === optionId
      : Array.isArray(value) && value.includes(optionId);
  };

  return (
    <QuestionContainer>
      <Title>Вопрос: {currentQuestion.id}</Title>
      <TextQuestion>{currentQuestion.title}</TextQuestion>
      {currentQuestion.options.map((option) => (
        <Option
          key={option.id}
          id={option.id}
          text={option.text}
          isChecked={isChecked}
          type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
          questionId={currentQuestion.id}
          handleChange={handleChange}
        />
      ))}
    </QuestionContainer>
  );
};
