import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeWorkout } from "../actions/workouts";
import WorkoutsItem from '../components/WorkoutsItem'
import { SubSectionLoading } from "../components/Loadings";

class WorkoutsList extends Component {
  render() {

    if (this.props.workoutIsLoading) {
      return <SubSectionLoading loading={ { message: 'Workouts list is loading' } } />
    }

    return (
      <ul>
        {this.props.workouts && this.props.workouts.map(workout =>
          <WorkoutsItem key={workout.id} workout={workout} removeWorkout={this.props.removeWorkout}/>
        )}
      </ul>
    );
  }
}

export default connect(
  state => ({ workoutIsLoading: state.workoutIsLoading }),
  { removeWorkout }
)(WorkoutsList);