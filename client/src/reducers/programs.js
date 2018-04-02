import actionTypes from '../actions/actionTypes';

export function programs(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PROGRAMS:
      return action.payload;
    case actionTypes.ADD_PROGRAM:
      return state;
    case actionTypes.REMOVE_PROGRAM:
      return state.filter(program => program.id !== action.payload);
    case actionTypes.UPDATE_PROGRAM:
      return state;
    default:
      return state;
  }
}