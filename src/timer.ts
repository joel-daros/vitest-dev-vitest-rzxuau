import { YEAR_FILTER_BY_MONTH } from './contants.js';

export const Timer = () => {
  const defaultYear = YEAR_FILTER_BY_MONTH[new Date().getMonth()];
  // console.log(defaultYear);
  return defaultYear;
};
