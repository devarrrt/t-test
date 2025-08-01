import { useSurveyContext } from '../../state/surveyContext';

import { questionsData } from '../../data';

import { Container } from './styles';
import { Button } from '../../globalStyles';

export const Navigation = () => {
  const { currentIndex, next, prev, selectAnswer, answers } = useSurveyContext();

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questionsData.length - 1;
  const currentId = questionsData[currentIndex]?.id;

  const handleSkip = () => {
    selectAnswer(currentId, 'skip');
    next();
  };

  return (
    <Container>
      <Button type="button" onClick={prev} disabled={isFirst} color="#ffc688">
        Назад
      </Button>
      <Button type="button" onClick={handleSkip}>
        Затрудняюсь ответить/Не помню
      </Button>
      <Button
        type="button"
        onClick={next}
        color="#72c48b"
        disabled={!answers[currentId]}
      >
        {isLast ? 'Завершить' : 'Далее'}
      </Button>
    </Container>
  );
};
