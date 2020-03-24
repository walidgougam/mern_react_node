import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CreateExercice} from './component/CreateExercice';
import {EditExercice} from './component/EditExercice';
import {ExerciceList} from './component/ExerciceList';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Route exact path="/" component={ExerciceList} />
          <Route path="/edit" component={EditExercice} />
          <Route path="/create" component={CreateExercice} />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
