// this mock needs to be located in a separated mock file to be imported before any other imports in the test file.
// setSystemTime() must be mocked before any other import, avoiding that when
// currentYear const in src/constants/index.ts is evaluated, the current date has already been mocked

import { vi } from 'vitest';

// mocking a random day of Feb 2022
vi.useFakeTimers({ now: new Date('2022-02-01'), shouldAdvanceTime: true });
