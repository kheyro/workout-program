import React, { Component } from 'react';
import { connect } from 'react-redux'
import WorkoutsList from "./WorkoutsList";
import WorkoutsForm from "./WorkoutsForm";

class ProgramsShow extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.program.name}</h3>

        <p>{this.props.program.description}</p>

        <h4>Add a Workout</h4>
        <WorkoutsForm />

        <h4>Exercises:</h4>
        <WorkoutsList workouts={this.props.program.workouts} />

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let program = state.programs.find( program => program.id === +ownProps.match.params.programId);
  return { program }
};

export default connect(mapStateToProps)(ProgramsShow);
