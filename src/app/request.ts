const api_key = '76b5e1ad758c307368d10b54b9ebd6b6';

export const request = {
  fetchTrending: `/trending/all/week?api_key=${api_key}`,
  fetchNetflixOrigin: `/discover/tv?api_key=${api_key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  fetchData: `/movie/550?api_key=76b5e1ad758c307368d10b54b9ebd6b6`,
};
