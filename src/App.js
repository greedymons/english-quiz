import './App.css';

import { MainPage, QuizPage, FinalPage, About } from './routers/index'
import Path from './routers/path'
import React, { useEffect } from 'react'
import NavBar from './components/navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    localStorage.setItem('quiz', JSON.stringify({status:"start","currentQuestion":1}))
    e.returnValue = "";
  };

  return (
    <Router>
      <div id="App">
        <NavBar/>
        <Switch>
          <Route exact path={Path.home}>
            <MainPage />
          </Route>
          <Route exact path={Path.about}>
            <About />
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
