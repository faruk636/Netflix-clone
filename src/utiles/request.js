const api_key = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNeflixOriginals: `discover/tv?api_key=${api_key}&language=en-US&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${api_key}&language=en-US&page=1`,
};

export default requests