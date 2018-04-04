import actionTypes from './actionTypes';
import 'isomorphic-fetch';

export function getWorkouts() {
  return (dispatch) => {
    dispatch(workoutIsLoading(true));

    return fetch('/api/workouts')
      .then(res => res.json())
      .then(payload => {
        dispatch(workoutIsLoading(false));
        return dispatch({ type: actionTypes.GET_WORKOUTS, payload });
      })
  }
}

export function addWorkout(workout) {
  return (dispatch) => {
    dispatch(workoutIsLoading(true));

    return fetch('/api/workouts', {
      body: JSON.stringify({ workout }),
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([res, payload]) => {
        dispatch(workoutIsLoading(false));
        return (!res) ? dispatch(workoutHasError(true, payload)) : dispatch({ type: actionTypes.ADD_WORKOUT, payload })
      })

    // can also check res.ok then throw new Error which will call .catch()
  }
}

export function removeWorkout(workoutId) {
  return (dispatch) => {
    dispatch(workoutIsLoading(true));

    return fetch(`/api/workouts/${workoutId}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        dispatch(workoutIsLoading(false));
        return dispatch({ type: actionTypes.REMOVE_WORKOUT, payload: workoutId });
      })
  }
}

export function workoutIsLoading(bool) {
  return {
    type: actionTypes.WORKOUT_IS_LOADING,
    payload: bool
  }
}

export function workoutHasError(bool, errors) {
  return {
    type: actionTypes.WORKOUT_HAS_ERROR,
    payload: { status: bool, errors }
  }
}