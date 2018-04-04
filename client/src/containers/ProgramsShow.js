import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getWorkouts,addWorkout } from "../actions/workouts";

import { SubSectionLoading } from '../components/Loadings'
import WorkoutsList from "./WorkoutsList";
import WorkoutsForm from "./WorkoutsForm";

class ProgramsShow extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  /*componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.programId !== this.props.match.params.programId) {
      this.forceUpdate()
    }
  }*/

  render() {
    if (!this.props.program) {
      return <SubSectionLoading loading={ { message: 'Workouts list is loading' } } />
    }

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
  let workouts = state.workouts.filter(workout => workout.program_id === +ownProps.match.params.programId);
  let program = state.programs.filter(program => program.id === +ownProps.match.params.programId);
  return {
    programIsLoading: state.programIsLoading,
    program: program[0],
    workouts
  }
};

export default connect(
  mapStateToProps,
  { getWorkouts, addWorkout }
)(ProgramsShow);
