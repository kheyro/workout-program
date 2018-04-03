import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {connect} from "react-redux";

import { getPrograms } from "../actions/programs";

import ProgramsList from './ProgramsList';
import ProgramsNew from './ProgramsNew';
import ProgramsShow from './ProgramsShow';


class ProgramsPage extends Component {
  componentDidMount() {
    this.props.getPrograms();
  }
//<ProgramsList programs={this.props.programs} />
  render() {
    return (
      <div>
        <ProgramsList programs={this.props.programs} />
        <Switch>
          <Route path={`${this.props.match.url}/:programId`} component={ProgramsShow} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
};

export default connect(mapStateToProps, { getPrograms })(ProgramsPage);