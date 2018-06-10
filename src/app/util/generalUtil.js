import { getProperty } from './typeUtil';

export const isTest = () => process.env.NODE_ENV === 'test';

export const isProd = () => process.env.NODE_ENV === 'production';

export const isDev = () => !isProd() && !isTest();

export const requestActions = (moduleName, prefix) => ({
  QUEUED: `${moduleName}/${prefix}_QUEUED`,
  DEQUEUED: `${moduleName}/${prefix}_DEQUEUED`,
  REQUESTED: `${moduleName}/${prefix}_REQUESTED`,
  SUCCEEDED: `${moduleName}/${prefix}_SUCCEEDED`,
  FAILED: `${moduleName}/${prefix}_FAILED`
});

export const isRequestAction = (action) => {
  if (!action) return false;
  const payload = getProperty(action, 'payload');
  if (!payload) return false;
  const args = getProperty(payload, 'args');
  if (!args) return false;
  const actions = getProperty(args, 'actions');
  if (!actions) return false;
  return (
    getProperty(actions, 'DEQUEUED') &&
    getProperty(actions, 'QUEUED') &&
    getProperty(actions, 'REQUESTED') &&
    getProperty(actions, 'SUCCEEDED') &&
    getProperty(actions, 'FAILED')
  );
};
