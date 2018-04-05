import React from 'react';
import { Link } from 'react-router-dom'

export default ({ match, program, removeProgram, likeProgram, like }) =>
  <div className="row program-list-item">
    <div className="col">
      <h5><Link to={`${match.url}/${program.id}`}>{program.name}</Link></h5>

      <p>{program.description}</p>

      <div>
        <Link className="btn btn-sm btn-secondary mr-1" to={`${match.url}/${program.id}/edit`}>Edit</Link>
        <button className="btn btn-sm btn-info mr-1" onClick={() => removeProgram(program.id)}>Delete</button>
        <button className="btn btn-sm btn-warning" onClick={() => likeProgram(program.id)}>Like {like}</button>
      </div>
    </div>
  </div>;
