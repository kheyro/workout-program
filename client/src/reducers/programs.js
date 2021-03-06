import actionTypes from '../actions/actionTypes';

export function programs(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PROGRAMS:
      return action.payload;

    case actionTypes.ADD_PROGRAM:
      return [].concat(state, action.payload);

    case actionTypes.REMOVE_PROGRAM:
      return state.filter(program => program.id !== action.payload);

    case actionTypes.UPDATE_PROGRAM:
      return state.map( program => (program.id === action.payload.id) ? action.payload : program )
    default:
      return state;
  }
}

export function getSingleProgram( state = { program: {}, loading: false }, action) {
  switch(action.type) {
    case actionTypes.GET_SINGLE_PROGRAM:
      return Object.assign({}, state, { program: action.payload.program, loading: action.payload.loading});
    default:
      return state
  }
}

export function programIsLoading(state = false, action) {
  switch(action.type) {
    case actionTypes.PROGRAM_IS_LOADING:
      return action.payload;
    default:
      return state
  }
}

export function programHasError(state = { status: false, errors: [], success_message: '' }, action) {
  switch(action.type) {
    case actionTypes.PROGRAM_HAS_ERROR:
      return action.payload;
    default:
      return state
  }
}
