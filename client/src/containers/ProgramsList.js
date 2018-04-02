import React, { Component } from 'react';
import { connect } from 'react-redux'

import { removeProgram } from "../actions/programs";

import ProgramsItem from '../components/ProgramsItem';

class ProgramsList extends Component {
  render() {
    return (
      <div>
        {this.props.programs.map(program => <ProgramsItem key={program.id} removeProgram={this.props.removeProgram} program={program} />)}
      </div>
    );
  }
}

export default connect(null, { removeProgram })(ProgramsList);