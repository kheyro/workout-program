import React, { Component } from 'react';
import { connect } from 'react-redux'

import { removeProgram } from "../actions/programs";

import ProgramsItem from '../components/ProgramsItem';

class ProgramsList extends Component {
  render() {

    if (this.props.isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        {this.props.programs.map(program => <ProgramsItem key={program.id} removeProgram={this.props.removeProgram} program={program} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.programIsLoading
  }
};

export default connect(mapStateToProps, { removeProgram })(ProgramsList);