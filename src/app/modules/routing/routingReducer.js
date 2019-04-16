import produce from 'immer';
import { LOCATION_CHANGE } from 'react-router-redux';

/**
 * Reducers
 */

const initialState = {
  previousLocations: []
};

export const reducer = produce((state = initialState, { type, payload = {} }) => {
  switch (type) {
    case LOCATION_CHANGE: {
      state.location = payload;
      state.previousLocations.push(payload);
      break;
    }
    default:
      return state;
  }
});

export default reducer;
