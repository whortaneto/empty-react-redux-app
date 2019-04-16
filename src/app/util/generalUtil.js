

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
