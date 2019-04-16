import produce from 'immer';
import * as actions from './settingsActions';

/**
 * Reducers
 */

const initialState = {
  server: 'https://testserver',
};

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.SETTINGS_SET: {
      state.hasServerChanged = state.server !== action.payload.server;
      state.server = action.payload.server;
      break;
    }
    default:
      return state;
  }
});

export default reducer;
