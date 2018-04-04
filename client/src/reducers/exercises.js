import actionTypes from '../actions/actionTypes';

export function exercises(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_EXERCISES:
      return action.payload;
    default:
      return state
  }
}

export function exercisesIsLoading(state = false, action) {
  switch(action.type) {
    case actionTypes.EXERCISES_IS_LOADING:
      return action.payload;
    default:
      return state
  }
}