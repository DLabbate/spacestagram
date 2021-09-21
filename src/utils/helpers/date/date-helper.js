/**
 * Formats a date in YYYY-MM-DD
 * @param {Date} date - the date to be formatted
 * @returns {string} YYYY-MM-DD format, e.g "2021-04-17"
 */
export const formatDate = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
};

/**
 * Formats a date with commas for better visual representation, e.g. "April 17, 2021"
 * @param {Date} date - the date to be formatted
 * @returns {string} "{Month} {Day}, {Year}" e.g. "April 17, 2021"
 */
export const formatDateCommas = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
};

/**
 * Computes the date 1 month prior to a specified date
 * @param {Date} date - the specified date
 * @returns {Date} 1 month prior to the specified date
 */
export const getDateMonthAgo = (date) => {
  let newDate = new Date(date);
  // Set it to one month ago
  newDate.setMonth(date.getUTCMonth() - 1);

  return newDate;
};
