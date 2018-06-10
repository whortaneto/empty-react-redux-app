import { LOCATION_CHANGE } from 'react-router-redux';
import { asImmutable, emptyList } from '../../util';

/**
 * Reducers
 */

const initialState = asImmutable({
  previousLocations: emptyList
});

export const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case LOCATION_CHANGE: {
    return state.merge({
      location: payload,
      previousLocations: state.get('previousLocations').push(asImmutable(payload))
    });
  }
  default:
    return state;
  }
};

export default reducer;
