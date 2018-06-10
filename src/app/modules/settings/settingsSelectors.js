/**
 * Selectors
 * http://jaysoo.ca/2016/02/28/organizing-redux-application/
 */
import { MODULE_NAME } from './settingsConstants';

export const getSettings = state => state.get(MODULE_NAME);
export const getServer = state => state.getIn([MODULE_NAME, 'server']);
export const hasServerChanged = state => state.getIn([MODULE_NAME, 'hasServerChanged']);
