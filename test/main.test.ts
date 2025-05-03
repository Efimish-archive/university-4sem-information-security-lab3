import { expect, test } from "bun:test";
import { generateBigPrime, primitiveRootModulo, getPrimeFactors } from "../src/utils";

test("prime factors", async () => {
  expect(getPrimeFactors(6n)).toEqual([2n, 3n]);

  const phi = generateBigPrime(58) - 1n;

  console.log('phi =', phi);
  console.log('factors =', getPrimeFactors(phi));
});

test("написал сам", async () => {
  expect(await primitiveRootModulo(11n)).toBe(2n);

  const p = generateBigPrime(58);
  console.log('p =', p);
  console.log('g =', await primitiveRootModulo(p));
});
