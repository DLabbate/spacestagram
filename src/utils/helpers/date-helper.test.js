import { formatDate, getDateMonthAgo, formatDateCommas } from "./date-helper";
import "@testing-library/jest-dom/extend-expect";

// Note that in javascript the month ranges from 0-11!

// Year = 2021
// Month = 3 (April)
// Date = 17
const date = new Date(2021, 3, 17);

test("date is formatted in YYYY-MM-DD", () => {
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe("2021-04-17");
});

test("date is formatted with letters and commas", () => {
  const formattedDate = formatDateCommas(date);
  expect(formattedDate).toBe("April 17, 2021");
});

test("date 1 month ago is properly computed", () => {
  const monthAgoDate = getDateMonthAgo(date);
  expect(monthAgoDate.getFullYear()).toBe(2021);
  expect(monthAgoDate.getMonth()).toBe(2); // March
  expect(monthAgoDate.getDate()).toBe(17);
});
