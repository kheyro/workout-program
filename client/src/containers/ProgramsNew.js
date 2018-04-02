import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addProgram } from '../actions/programs'

class ProgramsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addProgram, history } = this.props;
    addProgram(this.state);
    history.push('/programs');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="title-field">Title</label>
            <input
              type="text"
              id="title-field"
              onChange={this.handleInputChange}
              name="title"
              value={this.state.title} />
          </div>

          <div>
            <label htmlFor="description-field">Description</label>
            <textarea
              id="description-field"
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description} />
          </div>

          <button onClick={() => this.props.history.push('/programs')}>Cancel</button> <button type="submit">Add</button>

        </form>
      </div>
    )
  }
}

export default connect(null, { addProgram })(ProgramsEdit)