import React from 'react';
import { Link } from 'react-router-dom'

export default ({ match, program, removeProgram }) =>
  <div>
    <h3><Link to={`${match.url}/${program.id}`}>{program.name}</Link></h3>

    <p>{program.description}</p>

    <p># of exercises: {/* program.number_exercises */}</p>

    <div>
      <Link to={`${match.url}/${program.id}/edit`}>Edit</Link> | <button onClick={() => removeProgram(program.id)}>Delete</button>
    </div>
  </div>;
