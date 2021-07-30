import type from '@berish/typeof';

export function parse<T>(value: T): T;
export function parse<T, K>(value: T, parser: (data: T) => K): K;
export function parse<T, K>(value: T, parser?: (data: T) => K): T | K {
  if (type(value) === 'undefined' || type(value) === 'null') return null;

  const parsed = parser ? parser(value) : value;

  // Убираем все undefined и null из объекта
  if (type(parsed) === 'object')
    return Object.entries(parsed).reduce(
      (out, [key, value]) => (type(value) === 'undefined' || type(value) === 'null' ? out : { ...out, [key]: value }),
      {} as T | K,
    );

  return parsed;
}
