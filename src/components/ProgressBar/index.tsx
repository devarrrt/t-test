import { FC } from 'react';

import { useSurveyContext } from '../../state/surveyContext';
import { Question } from '../../types';

import { Bar, Container, Fill } from './styles';

interface QuestionsBlockType {
  data: Question[];
}

export const ProgressBar: FC<QuestionsBlockType> = ({ data }) => {
  const { currentIndex } = useSurveyContext();

  const percent = ((currentIndex + 1) / data.length) * 100;

  return (
    <Container>
      <Bar>
        <Fill style={{ width: `${percent}%` }} />
      </Bar>
    </Container>
  );
};
