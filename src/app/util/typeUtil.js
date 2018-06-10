import { Iterable, fromJS, is } from 'immutable';
import lodashIsEqual from 'lodash/isEqual';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';

export const objectLength = obj => (obj ? Object.keys(obj).length : 0);

export const asImmutable = obj => (Iterable.isIterable(obj) ? obj : fromJS(obj));

export const asJS = obj => (obj && isFunction(obj.toJS) ? obj.toJS() : obj);

export const asJSArray = (object) => {
  if (!object) return object;
  if (isFunction(object.toArray)) {
    return object.toArray(); // top level only
  } else if (!isArray(object)) {
    return Object.values(object);
  }
  return object;
};

export const asForEachable = (object) => {
  if (!object) return object;
  if (Iterable.isIterable(object)) {
    return object;
  } else if (!isArray(object)) {
    return Object.values(object);
  }
  return object;
};

export const emptyList = asImmutable([]);

export const emptyMap = asImmutable({});

export const emptyMapSelector = () => emptyMap;

export const isEqual = (a, b) => (
  Iterable.isIterable(a) && Iterable.isIterable(b) ? is(a, b) : lodashIsEqual(asJS(a), asJS(b))
);

export const isEmptyMap = a => is(a, emptyMap);

export const isEmptyList = a => is(a, emptyList);

export const getProperty = (object, property, defaultValue) => {
  if (!object) {
    return defaultValue;
  }
  if (!property) {
    return object;
  }
  if (isArray(property)) {
    if (object.getIn) {
      return object.getIn(property, defaultValue);
    }
    let result = object;
    // eslint-disable-next-line
    for (let i = 0; i < property.length; i++) {
      if (result[property[i]] === undefined) {
        return defaultValue;
      }
      result = result[property[i]];
    }
    return result;
  }
  if (object.get) {
    return object.get(property, defaultValue);
  }
  return object[property] !== undefined ? object[property] : defaultValue;
};
