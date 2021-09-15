/**
 * @param {Date} date - the date to be formatted
 * @returns {string} YYYY-MM-DD format, e.g "2021-04-17"
 */
export const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

/**
 * Computes the date 1 month prior to a specified date
 * @param {Date} date - the specified date
 * @returns {Date} 1 month prior to the specified date
 */
export const getDateMonthAgo = (date) => {
  let newDate = new Date(date);
  // Set it to one month ago
  newDate.setMonth(date.getMonth() - 1);

  return newDate;
};
