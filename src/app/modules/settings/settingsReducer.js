import { asImmutable } from '../../util';
import * as actions from './settingsActions';

/**
 * Reducers
 */

const initialState = asImmutable({
  server: 'https://testserver',
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SETTINGS_SET: {
    return state.merge(action.payload).set('hasServerChanged', state.get('server') !== action.payload.get('server'));
  }
  default:
    return state;
  }
};

export default reducer;
