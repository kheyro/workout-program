import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getExercises } from "../actions/exercises";
import { addWorkout, workoutIsLoading } from "../actions/workouts";

class WorkoutsForm extends Component {
  constructor(){
    super();
    this.state = {
      exercise_id: 1,
      number_sets: 0,
      number_reps: 0
    }
  }

  componentDidMount() {
    this.props.getExercises();
  }

  handleChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.assign({}, this.state, {program_id: this.props.programId});
    this.props.addWorkout(values)
  };

  render() {

    let error_messages;

    if(this.props.workoutHasError.status) {
      error_messages = this.props.workoutHasError.errors.map(error =>
        <div>{error}</div> )
    }

    return (
      <div>

        <div>
          <ul>
            {error_messages}
          </ul>
        </div>

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="workout-sets">Sets</label>
            <select name="exercise_id" value={this.state.exercise_id} onChange={this.handleChange}>
              /* better to check if loading is done */
              {this.props.exercises && this.props.exercises.map(exercise => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="workout-sets">Sets</label>
            <input
              id="workout-sets"
              type="text"
              name="number_sets"
              value={this.state.number_sets}
              onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="workout-reps">Reps</label>
            <input
              id="workout-reps"
              type="text"
              name="number_reps"
              value={this.state.number_reps}
              onChange={this.handleChange} />
          </div>

          <button type="submit">Add Workout</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
    exercisesIsLoading: state.exercisesIsLoading,
    workoutIsLoading: state.workoutIsLoading,
    workoutHasError: state.workoutHasError
  }
};

export default connect(mapStateToProps, { getExercises })(WorkoutsForm);