import type from '@berish/typeof';
import { parse } from './parse';
import { parseArray } from './parseArray';

export function parseOptional<T, K>(value: T | T[], parser: (item: T, index?: number) => K): K | K[] {
  if (type(value) === 'array') return parseArray<T, K>(value as T[], parser);

  return parse<T, K>(value as T, parser);
}
