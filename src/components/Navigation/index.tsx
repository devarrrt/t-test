import { useSurveyContext } from '../../state/surveyContext';

import { questionsData } from '../../data';

import { Container } from './styles';
import { Button } from '../../globalStyles';

export const Navigation = () => {
  const { currentIndex, next, prev, selectAnswer, answers } = useSurveyContext();

  const isFirst = currentIndex === 0;
  const isLast = questionsData[questionsData.length - 1];
  const currentId = questionsData[currentIndex]?.id;

  return (
    <Container>
      <Button type="button" onClick={prev} disabled={isFirst} color="#ffc688">
        Назад
      </Button>
      <Button
        type="button"
        onClick={() => {
          selectAnswer(currentId, 'skip');
          next();
        }}
      >
        Затрудняюсь ответить/Не помню
      </Button>
      <Button
        type="button"
        onClick={next}
        color="#72c48b"
        disabled={!answers[currentId]}
      >
        {isLast.id === currentId ? 'Завершить' : 'Далее'}
      </Button>
    </Container>
  );
};
