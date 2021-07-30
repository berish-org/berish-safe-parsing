export const dateParser = (value: number | Date | string) => {
  if (value instanceof Date) return value;

  if (typeof value === 'number') {
    if (value === 0) return null;
    return new Date(value);
  }
  if (typeof value === 'string') {
    if (value === '') return null;
    return new Date(value);
  }

  return null;
};
