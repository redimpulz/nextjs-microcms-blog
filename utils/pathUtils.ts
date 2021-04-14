import validator from 'validator';

export const filterQueryValueToString = (queryValue?: string | string[]) =>
  typeof queryValue === 'string' ? queryValue : '';

export const filterQueryValueToInt = (queryValue?: string | string[]) => {
  if (typeof queryValue === 'string' && validator.isInt(queryValue)) {
    return parseInt(queryValue, 10);
  }
  return undefined;
};
