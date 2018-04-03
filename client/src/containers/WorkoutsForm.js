import React, { Component } from 'react';
import { connect } from 'react-redux'

class WorkoutsForm extends Component {
  constructor(){
    super();
    this.state = {
      set: 0,
      reps: 0
    }
  }

  handleChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    // action
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="workout-sets">Sets</label>
            <select name="exercise-name">
              <option value="1">Ex 1</option>
              <option value="2">Ex 2</option>
              <option value="3">Ex 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="workout-sets">Sets</label>
            <input
              id="workout-sets"
              type="text"
              value={this.state.sets}
              onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="workout-reps">Sets</label>
            <input
              id="workout-reps"
              type="text"
              value={this.state.reps}
              onChange={this.handleChange} />
          </div>

          <button type="submit">Add Workout</button>
        </form>
      </div>
    );
  }
}

export default WorkoutsForm;