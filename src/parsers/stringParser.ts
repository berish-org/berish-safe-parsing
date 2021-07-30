export const stringParser = (value: any) => {
  if (typeof value === 'string') return value;

  return String(value);
};
