import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { removeProgram } from "../actions/programs";
import ProgramsItem from '../components/ProgramsItem';

class ProgramsList extends Component {
  deleteProgram = (programId) => {
    this.props.removeProgram(programId).then(
      () => this.props.history.push('/programs')
    )
  };

  render() {
    return (
      <div>
        {this.props.programs.map(program =>
          <ProgramsItem
            key={program.id}
            match={this.props.match}
            program={program}
            removeProgram={this.deleteProgram} />
        )}
      </div>
    );
  }
}

export default
  withRouter(
    connect(
      null,
      { removeProgram }
  )(ProgramsList));