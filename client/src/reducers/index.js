import { combineReducers } from 'redux';
import { programs, programIsLoading, programHasError } from './programs';

const rootReducer = combineReducers({
  programs,
  programIsLoading,
  programHasError
});

export default rootReducer