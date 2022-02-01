import { combineReducers } from 'redux';
import tournaments from './tournaments';

const rootReducer = combineReducers({
  tournamentsStore: tournaments
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
