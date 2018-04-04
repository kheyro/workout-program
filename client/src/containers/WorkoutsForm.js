import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getExercises } from "../actions/exercises";

import { FormErrors } from "../components/Errors";

const initialState = {
  exercise_id: 0,
  number_sets: '',
  number_reps: ''
};

class WorkoutsForm extends Component {

  constructor(){
    super();
    this.state = initialState;
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
    this.props.addWorkout(values).then(() =>
      this.setState(initialState)
    )
  };

  render() {
    return (
      <div>
        <FormErrors hasError={this.props.workoutHasError} />

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="workout-sets">Choose Exercise</label>
            <select name="exercise_id" value={this.state.exercise_id} onChange={this.handleChange}>
              {/* better to check if loading is done */}
              <option value="0">Select</option>
              {this.props.exercises && this.props.exercises.map(exercise => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="workout-sets">Sets</label>
            <input
              id="workout-sets"
              name="number_sets"
              onChange={this.handleChange}
              placeholder="0"
              type="text"
              value={this.state.number_sets} />
          </div>

          <div>
            <label htmlFor="workout-reps">Reps</label>
            <input
              id="workout-reps"
              name="number_reps"
              onChange={this.handleChange}
              placeholder="0"
              type="text"
              value={this.state.number_reps} />
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
    workoutIsLoading: state.workoutIsLoading,
    workoutHasError: state.workoutHasError
  }
};

export default connect(mapStateToProps, { getExercises })(WorkoutsForm);