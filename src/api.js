export const getDataMovies = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`);
  const respJson = await response.json();
  return respJson.results;
};

export const getSearchMovie = async (q) => {
  const response = await fetch(`${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${q}`);
  const respJson = await response.json();
  return respJson.results;
};

export const getDetailMovie = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`);
  const respJson = await response.json();
  return respJson;
};
