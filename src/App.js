import './App.css';

import { MainPage, QuizPage, FinalPage } from './routers/index'
import Path from './routers/path'

import NavBar from './components/navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="App">
        <NavBar/>
        <Switch>
          <Route exact path={Path.home}>
            <MainPage />
          </Route>
          <Route exact path={Path.quiz}>
            <QuizPage />
          </Route>
          <Route exact path={Path.final}>
            <FinalPage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
