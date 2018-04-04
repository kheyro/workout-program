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
      <div className="col-4 offset-md-4">
        <FormErrors hasError={this.props.hasError} />

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name-field">Program name</label>
            <input
              className="form-control"
              id="name-field"
              name="name"
              onChange={this.handleInputChange}
              type="text"
              value={this.state.name} />
          </div>

          <div className="form-group">
            <label htmlFor="description-field">Description</label>
            <textarea
              className="form-control"
              id="description-field"
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description} />
          </div>

          <button className="btn btn-secondary mr-2" onClick={this.props.history.goBack}>Cancel</button>
          <button className="btn btn-info" type="submit">Save</button>

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