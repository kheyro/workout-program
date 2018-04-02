import React from 'react';
import { Link } from 'react-router-dom'

const ProgramsItem = (props) =>
  <div>
    <h3>{props.program.name}</h3>

    <p>{props.program.description}</p>

    <p># of exercises: {/* props.program.number_exercises */}</p>
    <p>Duration: {/* props.program.duration */} min</p>

    <div>
      <Link to={`/programs/${props.program.id}/edit`}>Edit</Link> | <button onClick={() => props.removeProgram(props.program.id)}>Delete</button>
    </div>
  </div>;

export default ProgramsItem;