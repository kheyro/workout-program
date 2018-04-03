import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addProgram, programHasError } from '../actions/programs'

class ProgramsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  componentWillUnmount() {
    this.props.programHasError(false, [])
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addProgram, history } = this.props;

    addProgram(this.state).then(() => {
      if(!this.props.hasError.status) {
        this.setState({
          name: '',
          description: ''
        })
        // history.push('/programs');
      }
    })

  };

  render() {
    let error_messages;

    if(this.props.hasError.status) {
      error_messages = this.props.hasError.errors.map(error =>
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
            <label htmlFor="title-field">Title</label>
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

          <button onClick={() => this.props.history.push('/programs')}>Cancel</button> <button type="submit">Add</button>

        </form>
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