import type from '@berish/typeof';
import { parse } from './parse';

export function parseArray<T, K>(value: T[], mapCallback: (item: T, index: number) => K): K[] {
  if (type(value) === 'array') return value.map((item, index) => parse(item, item => mapCallback(item, index)));
  return null;
}
