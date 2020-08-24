const DAYS_PER_MONTH = {
    JANUARY: 31,
    FEBUARY: 29,
    MARCH: 31,
    APRIL: 30,
    MAY: 31,
    JUNE: 31,
    JULY: 30,
    AUGUST: 31,
    SEPTEMBER: 30,
    OCTOBER: 30,
    NOVEMBER: 30,
    DECEMBER: 31,
}
const MONTHS_IN_YEAR = 12;

let days_count = Object.values(DAYS_PER_MONTH).reduce((a, b) => a + b, 0);

console.log(days_count/MONTHS_IN_YEAR)

  


