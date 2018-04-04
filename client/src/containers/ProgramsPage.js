import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {connect} from "react-redux";

import { getPrograms } from "../actions/programs";

import ProgramsList from './ProgramsList';
import ProgramsShow from './ProgramsShow';


class ProgramsPage extends Component {
  componentDidMount() {
    this.props.getPrograms();
  }

  render() {
    if (this.props.programIsLoading) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <ProgramsList match={this.props.match} programs={this.props.programs} />
        <Switch>
          <Route path={`${this.props.match.url}/:programId`} component={ProgramsShow} />
        </Switch>
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