import { combineReducers } from 'redux';
import { programs, programIsLoading, programHasError, getSingleProgram } from './programs';
import { exercises, exercisesIsLoading } from './exercises';
import { workoutIsLoading, workouts, workoutHasError } from './workouts';

const rootReducer = combineReducers({
  programs,
  programIsLoading,
  programHasError,
  program: getSingleProgram,
  exercises,
  exercisesIsLoading,
  workouts,
  workoutIsLoading,
  workoutHasError
});

export default rootReducer