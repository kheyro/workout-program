import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateProgram } from '../actions/programs'

class ProgramsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.program.id,
      title: props.program.title,
      description: props.program.description
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProgram(this.state)
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

          <button>Cancel</button> | <button type="submit">Edit</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let program = state.programs.find( program => program.id === +ownProps.match.params.programId);
  return { program }
};

export default connect(mapStateToProps, { updateProgram })(ProgramsEdit)