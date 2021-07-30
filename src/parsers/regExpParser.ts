import { stringParser } from './stringParser';

export const regExpParser = (value: string | RegExp) => {
  if (value instanceof RegExp) return value;

  const stringValue = stringParser(value);
  return stringValue !== '' ? RegExp(stringValue) : null;
};
