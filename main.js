'use strict';
const log = console.log;

// TODO : baseurl imdbID is not good yet.
// FUNCTION FOR NEW MOVIES
// get the UL by using id that you made
// let baseURL = 'https://www.imdb.com/title/';
// const imdbID = movies[1].imdbID;

const moviesList = document.querySelector('#list-movies');

const addMoviesToDom = function (movies) {
  const movieArray = movies.map(function (movie) {
    const newliItem = document.createElement('li');

    const movieLink = document.createElement('a');

    movieLink.setAttribute('href', movie.imdbID);
    newliItem.append(movieLink);

    const newImg = document.createElement('img');
    newImg.setAttribute('src', movie.poster);
    movieLink.append(newImg);

    log(newliItem);
    log(Array.isArray(newliItem));
    return newliItem;
  });

  movieArray.forEach(function (movie) {
    moviesList.append(movie);
  });
  console.dir(movieArray);
  return movieArray;
};

const resultMovies = addMoviesToDom(movies);
log(resultMovies);

// SWITCH STATEMENT
const handleOnChangeEvent = function (e) {
  const movieValue = e.target.value;

  switch (movieValue) {
    case 'movies-new':
      log(`I am the movie ${movieValue}`);
      filterMovies(movieValue);
      break;
    case 'avenger':
      filterMovies(movieValue);
      break;
    case 'x-men':
      filterMovies(movieValue);
      break;
    case 'princess':
      filterMovies(movieValue);
      break;
    case 'batman':
      filterMovies(movieValue);
      break;
    default:
      log('this movie is not in the list');
  }
};

const allButtons = document.querySelectorAll('input[name="movies"]');

const movieBtnClick = function () {
  for (let button of allButtons) {
    button.addEventListener('change', handleOnChangeEvent);
  }
};

movieBtnClick();

const filterMovies = function (wordInMovie) {
  const moviesFilter = movies.filter(function (movie) {
    return movie.title.toLowerCase().includes(wordInMovie.toLowerCase());
  });

  log(`Array of the movie`, wordInMovie.toUpperCase(), moviesFilter);
  return moviesFilter;
};


//filtermovie 
const filterNewMovies = function () {
  movies.filter(function (movie) {
    return movie.year >= 2014;
  });
};
