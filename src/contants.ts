const currentYear = new Date().getFullYear();

// the default selected year to display based on the current month for the fist user interaction (first access)
// Note that months in JS starts in zero
export const YEAR_FILTER_BY_MONTH: Record<number, number> = {
  0: currentYear - 1, // January
  1: currentYear - 1, // February
  2: currentYear - 1, // March
  3: currentYear, // April
  4: currentYear, // May
  5: currentYear, // June
  6: currentYear, // July
  7: currentYear, // August
  8: currentYear, // September
  9: currentYear, // October
  10: currentYear, // November
  11: currentYear, // December
} as const;
