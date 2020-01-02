import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import QuizStartScreen from './Components/QuizStartScreen';
import QuizScreen from './Components/QuizScreen';
import QuizsolveScreen from './Components/QuizsolveScreen';
import QuizLevelone from './Components/QuizLevelone';
import QuizLeveltwo from './Components/QuizLeveltwo';
import QuizLevelthree from './Components/QuizLevelthree';

function App() {
  return (
    <div>
      <Route path="/" component={QuizStartScreen} exact={true} />
      <Route path="/login" component={QuizScreen} />
      <Route path="/quiz" component={QuizsolveScreen} />
      <Route path="/level1" component={QuizLevelone} />
      <Route path="/level2" component={QuizLeveltwo} />
      <Route path="/level3" component={QuizLevelthree} />
    </div>
  );
}

export default App;
