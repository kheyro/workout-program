import actionTypes from '../actions/actionTypes';

export function programs(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PROGRAMS:
      return action.payload;

    case actionTypes.ADD_PROGRAM:
      // return [].concat(state, Object.assign({}, action.payload));
      return state;

    case actionTypes.REMOVE_PROGRAM:
      return state.filter(program => program.id !== action.payload);

    case actionTypes.UPDATE_PROGRAM:
      let editedProgram = state.find(program => program.id === action.payload.id);
      editedProgram.title = action.payload.title;
      editedProgram.description = action.payload.description;
      return [].concat(state.filter(p => p.id !== action.payload.id), editedProgram);

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

export function programHasError(state = { status: false, errors: [] }, action) {
  switch(action.type) {
    case actionTypes.PROGRAM_HAS_ERROR:
      return action.payload;
    default:
      return state
  }
}