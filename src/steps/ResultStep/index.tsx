import { useSurveyContext } from '../../state/surveyContext';

import {
  Container,
  ContentBox,
  Title,
  Subtitle,
  InfoContainer,
  InfoBox,
  InfoLabel,
  InfoValue,
  ButtonBlock,
} from './styles';

import { questionsData } from '../../data';

import { Button } from '../../globalStyles';

const ResultStep = () => {
  const { getUnansweredQuestionsCount, returnToStart } = useSurveyContext();

  const unansweredQuestionCount = getUnansweredQuestionsCount();

  return (
    <Container>
      <ContentBox>
        <Title>Опрос завершён!</Title>
        <Subtitle>Спасибо, что поделились своим мнением.</Subtitle>
        <InfoContainer>
          <InfoBox>
            <InfoLabel>Всего вопросов:</InfoLabel>
            <InfoValue>{questionsData.length}</InfoValue>
          </InfoBox>
          <InfoBox>
            <InfoLabel>Вопросов без ответа:</InfoLabel>
            <InfoValue>{unansweredQuestionCount}</InfoValue>
          </InfoBox>
        </InfoContainer>
        <ButtonBlock>
          <Button type="button" onClick={returnToStart}>
            В начало
          </Button>
        </ButtonBlock>
      </ContentBox>
    </Container>
  );
};

export default ResultStep;
