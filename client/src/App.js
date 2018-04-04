import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';
import ProgramsPage from './containers/ProgramsPage';
import ProgramsNew from "./containers/ProgramsNew";
import ProgramsEdit from './containers/ProgramsEdit';
import Welcome from './components/Welcome';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={ Welcome } />
              <Route path="/programs/:programId/edit" component={ ProgramsEdit } />
              <Route path="/programs/new" component={ ProgramsNew } />
              <Route path="/programs" component={ ProgramsPage } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
