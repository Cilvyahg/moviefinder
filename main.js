'use strict';

const log = console.log;

// FUNCTION FOR NEW MOVIES
const imdbIDlurl = function (imdbID) {
  const baseURL = 'https://www.imdb.com/title/';
  return `${baseURL}${imdbID}`;
};

const moviesList = document.querySelector('#list-movies');

const addMoviesToDom = function (movies) {
  const movieArray = movies.map(function (movie) {
    const newliItem = document.createElement('li');
    newliItem.setAttribute('title', movie.title);
    newliItem.setAttribute('value', movie.year);

    const movieLink = document.createElement('a');

    movieLink.setAttribute('href', imdbIDlurl(movie.imdbID));
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
      filterLatestMovies();
      break;
    case 'avenger':
    case 'x-men':
    case 'princess':
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
  // const moviesFilter = movies.filter(function (movie) {
  //   return movie.title.toLowerCase().includes(wordInMovie.toLowerCase());
  // });
  // log(moviesFilter);

  // return moviesFilter;
    for (let li of moviesList.children) {
      if (li.title.toLowerCase().includes(wordInMovie)) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    }
};

//filtermovie year >= 2014;
const filterLatestMovies = function () {
  // const yearFilter = movies.filter((movie) => parseInt(movie.year) >= 2014);

  for (let li of moviesList.children) {
     
     if (li.value >= 2014) {
       li.style.display = 'block';
     } else {
       li.style.display = 'none';
     }
   }
  // log(yearFilter);
  // return yearFilter;
};
