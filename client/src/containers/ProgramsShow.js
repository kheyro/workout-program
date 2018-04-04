import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getSingleProgram } from "../actions/programs";
import { getWorkouts,addWorkout } from "../actions/workouts";

import WorkoutsList from "./WorkoutsList";
import WorkoutsForm from "./WorkoutsForm";

class ProgramsShow extends Component {
  componentDidMount() {
    this.props.getSingleProgram(this.props.match.params.programId);
    this.props.getWorkouts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.programId !== this.props.match.params.programId) {
      this.props.getSingleProgram(nextProps.match.params.programId)
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.program.name}</h3>

        <p>{this.props.program.description}</p>

        <h4>Add a Workout</h4>

        <WorkoutsForm
          programId={this.props.program.id}
          addWorkout={this.props.addWorkout} />

        <h4>Exercises:</h4>

        <WorkoutsList workouts={this.props.workouts} />

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let workouts = state.workouts.filter( workout => workout.program_id === +ownProps.match.params.programId);
  return {
    program: state.program.program,
    workouts
  }
};

export default connect(
  mapStateToProps,
  { getSingleProgram, getWorkouts, addWorkout }
)(ProgramsShow);
