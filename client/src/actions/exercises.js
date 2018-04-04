import actionTypes from './actionTypes';
import 'isomorphic-fetch';

export function getExercises() {
  return (dispatch) => {
    dispatch(exerciseIsLoading(true));
    return fetch('/api/exercises')
      .then(res => res.json())
      .then(payload => {
        dispatch(exerciseIsLoading(false));
        return dispatch({type: actionTypes.GET_EXERCISES, payload});
      })
  }
}

export function exerciseIsLoading(bool) {
  return {
    type: actionTypes.EXERCISES_IS_LOADING,
    payload: bool
  }
}