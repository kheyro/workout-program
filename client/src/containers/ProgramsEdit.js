import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateProgram, programHasError } from '../actions/programs'

import { FormErrors } from "../components/Errors";

class ProgramsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.program.id,
      name: props.program.name,
      description: props.program.description
    }
  }

  componentWillUnmount() {
    this.props.programHasError(false, [], '')
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateProgram } = this.props;
    updateProgram(this.state).then(() => { if(!this.props.hasError.status) (this.setState({ name: '', description: '' })) })
  };

  render() {
    return (
      <div>
        <FormErrors hasError={this.props.hasError} />

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="name-field">Name</label>
            <input
              type="text"
              id="name-field"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name} />
          </div>

          <div>
            <label htmlFor="description-field">Description</label>
            <textarea
              id="description-field"
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description} />
          </div>

          <button onClick={this.props.history.goBack}>Cancel</button> | <button type="submit">Edit</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let program = state.programs.find( program => program.id === +ownProps.match.params.programId);
  return {
    program,
    hasError: state.programHasError,
    isLoading: state.programIsLoading
  }
};

export default connect(mapStateToProps, { updateProgram, programHasError })(ProgramsEdit)