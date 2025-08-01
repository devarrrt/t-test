import { FC } from 'react';

import { useSurveyContext } from '../../state/surveyContext';

import { Question } from '../../types';

import {
  CustomCheckbox,
  HiddenInput,
  Label,
  QuestionContainer,
  TextQuestion,
  Title,
} from './styles';

interface QuestionsBlockType {
  data: Question[];
}

export const QuestionsBlock: FC<QuestionsBlockType> = ({ data }) => {
  const { currentIndex, answers, selectAnswer } = useSurveyContext();
  const currentQuestion = data[currentIndex];

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
      <Title>Вопрос: {currentQuestion?.id}</Title>
      <TextQuestion> {currentQuestion?.title} </TextQuestion>
      {currentQuestion?.options?.map((option) => (
        <Label key={option.id}>
          <span>{option.text}</span>
          <HiddenInput
            type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
            name={currentQuestion.id}
            value={option.id}
            checked={isChecked(option.id)}
            onChange={() => handleChange(option.id)}
            id={`option_${option.id}`}
          />
          <CustomCheckbox
            checked={isChecked(option.id)}
            type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
          />
        </Label>
      ))}
    </QuestionContainer>
  );
};
