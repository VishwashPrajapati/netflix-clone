// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const api_key = '76b5e1ad758c307368d10b54b9ebd6b6';

export const environment = {
  production: false,
  api_key: '76b5e1ad758c307368d10b54b9ebd6b6',
  api_Request: 'https://api.themoviedb.org/3/',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmI1ZTFhZDc1OGMzMDczNjhkMTBiNTRiOWViZDZiNiIsInN1YiI6IjYzYTg0ZGIzYWFlYzcxMDBhMTEyYmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v89lVrSTQq1WnFObbE5MNTm132VgbHITX_9an0WOe2s',
};

export const request = {
  fetchTrending: `/tranding/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOrigin: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movies?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${api_key}&with_genres=10749`,
  fetchDocumentries: `/discover/movies?api_key=${api_key}&with_genres=99`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
