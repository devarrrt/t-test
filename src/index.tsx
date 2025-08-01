import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import SurveyProvider from './state/surveyContext';

import './reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <SurveyProvider>
      <App />
    </SurveyProvider>
  </React.StrictMode>,
);
