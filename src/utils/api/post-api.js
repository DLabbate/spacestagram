import { formatDate } from "../helpers/date-helper";

export const getPosts = async (startDate, endDate) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.REACT_APP_API_KEY
    }&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`,
    requestOptions
  );
  let result = response.json();

  return result;
};
