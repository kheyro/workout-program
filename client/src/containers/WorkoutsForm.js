import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getExercises } from "../actions/exercises";
import { workoutHasError } from "../actions/workouts";

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

  componentWillUnmount() {
    this.props.workoutHasError(false, [], '')
  }

  handleChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.assign({}, this.state, {program_id: this.props.programId});
    this.props.addWorkout(values).then(() => { if(!this.props.workoutHasErrorState.status) (this.setState(initialState)) })
  };

  render() {
    return (
      <div>
        <FormErrors hasError={this.props.workoutHasErrorState} />

        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-row align-items-center">

            <div className="col-auto my-1">
              <label className="sr-only" htmlFor="workout-sets">Exercise</label>
              <select className="form-control" name="exercise_id" value={this.state.exercise_id} onChange={this.handleChange}>
                {/* better to check if loading is done */}
                <option value="0">Select Exercise</option>
                {this.props.exercises && this.props.exercises.map(exercise => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)}
              </select>
            </div>

            <div className="col-auto my-1">
              <label className="sr-only" htmlFor="workout-sets">Sets</label>
              <input
                className="form-control"
                id="workout-sets"
                name="number_sets"
                onChange={this.handleChange}
                placeholder="Number of sets"
                type="text"
                value={this.state.number_sets} />
            </div>

            <div className="col-auto my-1">
              <label className="sr-only" htmlFor="workout-reps">Reps</label>
              <input
                className="form-control"
                id="workout-reps"
                name="number_reps"
                onChange={this.handleChange}
                placeholder="Number of reps"
                type="text"
                value={this.state.number_reps} />
            </div>

            <div className="col-auto my-1">
              <button type="submit" className="btn btn-info">Add Workout</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
    workoutIsLoading: state.workoutIsLoading,
    workoutHasErrorState: state.workoutHasError
  }
};

export default connect(mapStateToProps, { getExercises, workoutHasError })(WorkoutsForm);