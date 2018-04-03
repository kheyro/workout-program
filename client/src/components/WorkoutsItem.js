import React from 'react';

export default ({ workout }) =>
  <li>
    Name: {workout.exercise.name}<br/>
    Description {workout.exercise.description}<br/>
    Sets: {workout.number_sets}<br/>
    Reps: {workout.number_reps}
  </li>;