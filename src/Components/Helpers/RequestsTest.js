// file to test all the movies request
// NOTE: this test file is ignored by default when you run all the app tests

// ===== READ THIS =====
// You should run this test if the movie data fails,
// to verify that it is not an internal failure but an API failure

// command
// yarn run test-movies-api

import chalk from "chalk";
import Request from "./Resquests.js";

async function testMoviesRequest(callback, fnName, expected = "array") {
  let isGoodData = 9;

  try {
    const movies = await callback.bind(Request)();
    if (expected === "object") isGoodData = Object.keys(movies).length > 0;
    else isGoodData = Array.isArray(movies);
  } catch (error) {
    isGoodData = false;
    console.log(chalk.red("The error is: " + error.message));
  }
  console.log(
    isGoodData
      ? chalk.black.bgGreen(`Request.${fnName} is working`)
      : chalk.black.bgRed(`Request.${fnName} is not working`)
  );
}

const tests = {
  testAllMovies: async () => {
    await testMoviesRequest(Request.getAllMovies, "getAllMovies");
  },

  testGenreMovies: async () => {
    await testMoviesRequest(
      () => Request.getGenrerMovie("animation"),
      "getGenrerMovie",
      "object"
    );
  },

  testAllGenresMovies: async () => {
    await testMoviesRequest(Request.getAllGenrersMovies, "getAllGenrersMovies");
  },

  testMoviesById: async () => {
    await testMoviesRequest(
      () => Request.getInfoMovieId("23095"),
      "getInfoMovieId",
      "object"
    );
  },
};

// run all the methods in 'tests' object
(async () => {
  for (const test in tests) {
    console.log(chalk.gray("testing " + test));
    await tests[test]();
  }
})();
