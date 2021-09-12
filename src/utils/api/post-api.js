export const getPosts = async (startDate, endDate) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`,
    requestOptions
  );
  let result = response.json();

  return result;
};
