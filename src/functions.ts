/* eslint-disable */

const multiply = (a: string | number, b: number | string): string => {
  const aNumber = typeof a === 'string' ? parseInt(a, 10) : a;
  const bNumber = typeof b === 'string' ? parseInt(b, 10) : b;

  return String(aNumber * bNumber);
};

multiply(2, 5);

multiply('2', 10);

multiply(10, '5');
