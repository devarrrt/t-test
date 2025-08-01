import { QuestionsBlock, ProgressBar, Navigation } from '../../components';

import { questionsData } from '../../data';

const SurveyStep = () => {
  return (
    <>
      <QuestionsBlock data={questionsData} />
      <Navigation />
      <ProgressBar data={questionsData} />
    </>
  );
};

export default SurveyStep;
