import { combineReducers } from 'redux';
import { programs } from './programs';

const rootReducer = combineReducers({
  programs: programs
});

export default rootReducer