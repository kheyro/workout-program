import React, { Component } from 'react';
import { connect } from 'react-redux'

import WorkoutsItem from '../components/WorkoutsItem'

class WorkoutsList extends Component {
  render() {
    return (
      <ul>
        {this.props.workouts.map(workout => <WorkoutsItem key={workout.id} workout={workout} />)}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.programIsLoading
  }
};

export default connect(null, null)(WorkoutsList);