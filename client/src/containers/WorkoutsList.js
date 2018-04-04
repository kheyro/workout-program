import React, { Component } from 'react';
import { connect } from 'react-redux'

import { removeWorkout } from "../actions/workouts";

import WorkoutsItem from '../components/WorkoutsItem'


class WorkoutsList extends Component {
  render() {

    if (this.props.isLoading) {
      return (<div>Loading...</div>)
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.program.loading
  }
};

export default connect(mapStateToProps, { removeWorkout })(WorkoutsList);