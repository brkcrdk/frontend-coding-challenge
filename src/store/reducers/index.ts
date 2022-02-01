import { combineReducers } from 'redux';
import tournaments from './tournaments';
import filter from './filter';

const rootReducer = combineReducers({
  tournamentsStore: tournaments,
  filterStore: filter
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
