import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProgram, programHasError } from '../actions/programs'
import { FormErrors } from "../components/Errors";

const initialState = {
  name: '',
  description: '',
};

class ProgramsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
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

    this.props.addProgram(this.state).then(() => {
      if(!this.props.hasError.status) {
        this.setState(initialState);

      }
    })
  };

  render() {
    return (
      <div className="row">
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

            <button className="btn btn-secondary mr-2" onClick={() => this.props.history.push('/programs')}>Cancel</button>
            <button className="btn btn-info" type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.programIsLoading,
    hasError: state.programHasError
  }
};

export default connect(mapStateToProps, { addProgram, programHasError })(ProgramsEdit)