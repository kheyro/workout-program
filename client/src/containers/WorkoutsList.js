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
      <div id="workouts-list">
        <div className="row workout-list-header align-items-center">
          <div className="col">Exercise</div>
          <div className="col">Description</div>
          <div className="col text-center"># of Sets</div>
          <div className="col text-center"># of Reps</div>
          <div className="col text-center"></div>
        </div>
        {this.props.workouts && this.props.workouts.map(workout =>
          <WorkoutsItem key={workout.id} workout={workout} removeWorkout={this.props.removeWorkout}/>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ workoutIsLoading: state.workoutIsLoading }),
  { removeWorkout }
)(WorkoutsList);