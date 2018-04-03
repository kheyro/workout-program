import actionTypes from './actionTypes';
import 'isomorphic-fetch';
import {programIsLoading} from "./programs";

export function getExercises() {
  return (dispatch) => {
    dispatch();
    return fetch('/url')
      .then(res => res.json())
      .then(payload => {
        dispatch(programIsLoading(false));
        return dispatch({type: actionTypes.GET_EXERCISES, payload});
      })
  }
}