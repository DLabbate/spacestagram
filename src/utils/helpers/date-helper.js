/**
 * @param {Date} date the date to be formatted
 * @returns YYYY-MM-DD string
 */
export const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

export const getDateMonthAgo = () => {
  let monthAgo = new Date();
  console.log(monthAgo);
  // Set it to one month ago
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  return monthAgo;
};
