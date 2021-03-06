import actionTypes from './actionTypes';
import 'isomorphic-fetch';

export function getPrograms() {
  return (dispatch) => {
    dispatch(programIsLoading(true));

    return fetch('/api/programs')
      .then(res => res.json())
      .then(payload => {
        dispatch(programIsLoading(false));
        return dispatch({ type: actionTypes.GET_PROGRAMS, payload });
      })
  }
}

export function getSingleProgram(programId) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_SINGLE_PROGRAM,
      payload: { program: {}, loading: true }
    });

    return fetch(`/api/programs/${programId}`)
      .then(res => res.json())
      .then(payload => {
        return dispatch({
          type: actionTypes.GET_SINGLE_PROGRAM,
          payload: { program: payload, loading: false }
        });
      })
  }
}

export function addProgram(program) {
  return (dispatch) => {
    dispatch(programIsLoading(true));

    return fetch('/api/programs', {
        body: JSON.stringify({ program }),
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([res, payload]) => {
        dispatch(programIsLoading(false));
        if (!res) {
          return dispatch(programHasError(true, payload))
        } else {
          dispatch(programHasError(false, [], 'Program successfully added!'));
          return dispatch({ type: actionTypes.ADD_PROGRAM, payload });
        }
      })

    // can also check res.ok then throw new Error which will call .catch()
  }
}

export function removeProgram(programId) {
  return (dispatch) => {
    dispatch(programIsLoading(true));

    return fetch(`/api/programs/${programId}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        dispatch(programIsLoading(false));
        return dispatch({ type: actionTypes.REMOVE_PROGRAM, payload: programId });
      })
  }
}

export function updateProgram(program) {
  return (dispatch) => {
    dispatch(programIsLoading(true));

    return fetch(`/api/programs/${program.id}`, {
        body: JSON.stringify({ program }),
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([res, payload]) => {
        dispatch(programIsLoading(false));
        if (!res) {
          return dispatch(programHasError(true, payload))
        } else {
          dispatch(programHasError(false, [], 'Program successfully updated!'));
          return dispatch({ type: actionTypes.UPDATE_PROGRAM, payload });
        }
      })
  }
}

export function programIsLoading(bool) {
  return {
    type: actionTypes.PROGRAM_IS_LOADING,
    payload: bool
  }
}

export function programHasError(bool, errors, success_message) {
  return {
    type: actionTypes.PROGRAM_HAS_ERROR,
    payload: { status: bool, errors, success_message }
  }
}
