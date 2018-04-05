import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { removeProgram } from "../actions/programs";
import ProgramsItem from '../components/ProgramsItem';

class ProgramsList extends Component {
  constructor() {
    super();
    this.state = {
      likes: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    let likes = {}
    nextProps.programs.map( program => {
      likes = Object.assign(likes, { [program.id]: 0 })
    })
    this.setState({ likes })
  }

  likeProgram = (programId) => {
    this.setState({
      likes: Object.assign({}, this.state.likes, { [programId]: ++this.state.likes[programId] })
    })
    console.log(this.state.likes)
  }

  deleteProgram = (programId) => {
    this.props.removeProgram(programId).then(
      () => this.props.history.push('/programs')
    )
  };

  render() {
    return (
      <div>
        {this.props.programs.map(program =>
          <ProgramsItem
            key={program.id}
            match={this.props.match}
            program={program}
            removeProgram={this.deleteProgram}
            likeProgram={this.likeProgram}
            like={this.state.likes[program.id]} />
        )}
      </div>
    );
  }
}



export default
  withRouter(
    connect(
      null,
      { removeProgram }
  )(ProgramsList));
