export const numberParser = (value: string | number | Date) => {
  if (typeof value === 'number') return value;

  if (typeof value === 'string') {
    if (value === '0') return 0;
    if (value === '') return null;
    if (value.toString().toLowerCase() === 'infinity') return Infinity;
    if (value.toString().toLowerCase() === 'nan') return NaN;
    return Number.parseFloat(value.toString());
  }

  if (value instanceof Date) {
    return value.getTime();
  }

  return null;
};
