// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.map((movie) => movie);
}
console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sum = 0;
  let count = 0;
  for (i = 0; i < moviesArray.length; i++) {
    sum += moviesArray[i].score;
    count += 1;
  }
  return sum / count;
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const result = moviesArray.filter(
    (movie) => movie.director == 'Steven Spielberg'
  );
  return result;
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const s = moviesArray.sort((a, b) => a.year - b.year);
  return s;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });
  return moviesArray;
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  function turnHoursToMinutes(moviesArray) {
    const convertedMovies = moviesArray.map((movie) => {
      const duration = movie.duration;
      const durationParts = duration.split(' ');

      let totalMinutes = 0;

      for (const part of durationParts) {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part);
        }
      }

      return { ...movie, duration: totalMinutes };
    });

    return convertedMovies;
  }
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
