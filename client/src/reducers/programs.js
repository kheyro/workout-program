import actionTypes from '../actions/actionTypes';

export function programs(state = [], action) {

  switch (action.type) {

    case actionTypes.GET_PROGRAMS:
      return action.payload;

    case actionTypes.ADD_PROGRAM:
      return [].concat(state, Object.assign({}, action.payload, { id: state.length++ }));

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