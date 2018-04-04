import React from 'react';

export default ({ workout, removeWorkout }) =>
  <div>
    <div className="row align-items-center workout-list-item">
      <div className="col">{workout.exercise.name}</div>
      <div className="col">{workout.exercise.description}</div>
      <div className="col text-center">{workout.number_sets}</div>
      <div className="col text-center">{workout.number_reps}</div>
      <div className="col text-center">
        <button className="btn btn-sm btn-warning" onClick={() => removeWorkout(workout.id)}>Delete</button>
      </div>
    </div>
  </div>;