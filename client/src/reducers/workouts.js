import actionTypes from '../actions/actionTypes';

export function workouts(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_WORKOUTS:
      return action.payload;
    case actionTypes.ADD_WORKOUT:
      return [].concat(state, action.payload);
    case actionTypes.REMOVE_WORKOUT:
      return state.filter(workout => workout.id !== action.payload);
    default:
      return state
  }
}

export function workoutIsLoading(state = false, action) {
  switch (action.type) {
    case actionTypes.WORKOUT_IS_LOADING:
      return action.payload;
    default:
      return state
  }
}

export function workoutHasError(state = { status: false, errors: [], success_message: '' }, action) {
  switch(action.type) {
    case actionTypes.WORKOUT_HAS_ERROR:
      return action.payload;
    default:
      return state
  }
}