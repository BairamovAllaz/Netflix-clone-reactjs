const API_KEY = "e2163709e499822f22a3b3755cf6fd52";

const request = {
  fetchtrend: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchtoprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchlatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
};

export default request;
