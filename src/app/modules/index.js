// import { combineReducers } from 'redux'
// TODO See if continues to use redux-immutable
import { combineReducers } from 'redux-immutable';
import * as routing from './routing';
import * as settings from './settings';
import * as connectivity from './connectivity';

export default {
  routing,
  settings,
  connectivity
};

export const rootReducer = combineReducers({
  routing: routing.reducers.reducer,
  settings: settings.reducers.reducer,
  connectivity: connectivity.reducers.reducer,
});
