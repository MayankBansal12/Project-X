// Used to fetch Data from TMDB API using axios

import axios from "axios";

export const fetchData = async (endpoint) => {
  const headers = {
    Authorization: "bearer " + process.env.NEXT_API_TOKEN,
  };
  const response = await axios.get("https://api.themoviedb.org/3" + endpoint, {
    headers,
  });
  return response.data.results;
};
