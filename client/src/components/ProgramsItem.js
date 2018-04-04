import React from 'react';
import { Link } from 'react-router-dom'

export default ({ match, program, removeProgram }) =>
  <div className="row program-list-item">
    <div className="col">
      <h5><Link to={`${match.url}/${program.id}`}>{program.name}</Link></h5>

      <p>{program.description}</p>

      <div>
        <Link className="btn btn-sm btn-secondary mr-1" to={`${match.url}/${program.id}/edit`}>Edit</Link>
        <button className="btn btn-sm btn-info" onClick={() => removeProgram(program.id)}>Delete</button>
      </div>
    </div>
  </div>;
