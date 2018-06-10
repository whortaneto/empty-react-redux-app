import { createSelector } from 'reselect';

/**
 * Selectors
 */
import MODULE_NAME from './routingConstants';

export const getRouting = state => state.get(MODULE_NAME);
export const getPreviousLocations = state => state.getIn([MODULE_NAME, 'previousLocations']);
export const getLocation = state => state.getIn([MODULE_NAME, 'location']).toJS();

export const getPathName = createSelector(
  getLocation,
  location => location.pathname
);

export const getPreviousLocation = createSelector(
  getPreviousLocations,
  previousLocations => previousLocations.toJS().slice(-2)[0]
);

export const getPreviousPathName = createSelector(
  getPreviousLocations,
  getPathName,
  (previousLocations, currentPathName) => {
    const lastValidLocation = previousLocations.findLast(item => item.get('pathname') !== currentPathName);
    return lastValidLocation ? lastValidLocation.get('pathname') : '/';
  }
);
