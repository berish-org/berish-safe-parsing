export const boolParser = (value: boolean | string) => {
  if (typeof value === 'boolean') return value;

  if (typeof value === 'string') return value.toString().toLowerCase() === 'true';

  return null;
};
