import SurveyStep from './steps/SurveyStep';

import { useSurveyContext } from './state/surveyContext';

import { MainContainer } from './globalStyles';
import ResultStep from './steps/ResultStep';

function App() {
  const { step } = useSurveyContext();

  return (
    <MainContainer>
      {step === 'answers' && <SurveyStep />}
      {step === 'results' && <ResultStep />}
    </MainContainer>
  );
}

export default App;
