import './timer.test.mocks';

import { assert, describe, expect, it } from 'vitest';
import { Timer } from '../src/timer';

it('Tests time', () => {
  const myTimer = Timer();
  expect(myTimer).toBe(2021);
});
