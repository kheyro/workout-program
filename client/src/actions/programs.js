import actionTypes from './actionTypes';
import 'isomorphic-fetch';

export function getPrograms(dispatch) {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCHING_PROGRAMS });
    return fetch('/api/programs').then(res => res.json())
      .then(data => dispatch({
        type: actionTypes.GET_PROGRAMS,
        payload: data
      }))
  }
}

export function addProgram(program) {
  return {
    type: actionTypes.ADD_PROGRAM,
    payload: program
  }
}

export function updateProgram(program) {
  return {
    type: actionTypes.UPDATE_PROGRAM,
    payload: program
  }
}

export function removeProgram(programId) {
  return {
    type: actionTypes.REMOVE_PROGRAM,
    payload: programId
  }
}