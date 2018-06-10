import { MODULE_NAME } from './settingsConstants';

/**
 * Actions constants
 */
export const SETTINGS_SET = `${MODULE_NAME}/SETTINGS_SET`;

/**
 * Action creators
 * https://github.com/acdlite/flux-standard-action
 */

export const setSettings = settings => ({
  type: SETTINGS_SET,
  payload: settings
});
