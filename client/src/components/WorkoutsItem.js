import React from 'react';

export default ({ workout, removeWorkout }) =>
  <li>
    Name: {workout.exercise.name}<br/>
    Description {workout.exercise.description}<br/>
    Sets: {workout.number_sets}<br/>
    Reps: {workout.number_reps}
    <button onClick={() => removeWorkout(workout.id)}>Delete</button>
  </li>;