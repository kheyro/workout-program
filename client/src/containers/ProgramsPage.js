import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {connect} from "react-redux";

import { getPrograms } from "../actions/programs";

import { MainContainerLoading } from "../components/Loadings";
import ProgramsList from './ProgramsList';
import ProgramsShow from './ProgramsShow';
import ProgramWelcome from '../components/ProgramWelcome';
import ProgramsEdit from './ProgramsEdit';

class ProgramsPage extends Component {
  componentDidMount() {
    this.props.getPrograms();
  }

  render() {
    if (this.props.programIsLoading) {
      return <MainContainerLoading loading={ { message: 'Program list loading' } } />
    }
    return (
      <div className="row h-100" id="program-list">
        <div className="col-4 program-list-left-pane">
          <ProgramsList match={this.props.match} programs={this.props.programs} />
        </div>
        <div className="col-8 program-list-right-pane">
          <Switch>
            <Route path={`${this.props.match.url}/:programId`} component={ProgramsShow} />
            <Route path={`${this.props.match.url}`} component={ProgramWelcome}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    programs: state.programs,
    programIsLoading: state.programIsLoading
  }),
  { getPrograms }
)(ProgramsPage);
