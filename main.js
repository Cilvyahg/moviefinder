'use strict';

const log = console.log;

// const imdbIDlurl = function (imdbID) {
//   const baseURL = 'https://www.imdb.com/title/';
//   return `${baseURL}${imdbID}`;
// };

const moviesList = document.querySelector('#list-movies');

const addMoviesToDom = function (movies) {
  const movieArray = movies.map(function (movie) {
    const newliItem = document.createElement('li');
    newliItem.setAttribute('title', movie.title);
    newliItem.setAttribute('value', movie.year);
    newliItem.classList.add('movieli');

    const movieLink = document.createElement('a');

    movieLink.href = `https://www.imdb.com/title/${movie.imdbID}`; // you don't need to setAttribute() with href because you can access it directly
    // movieLink.setAttribute('target', "_blank");
    movieLink.target = '_blank';
    newliItem.append(movieLink);

    const newImg = document.createElement('img');
    newImg.style.width = "18rem"
    // newImg.setAttribute('src', movie.poster);
    newImg.src = movie.poster; // you have directly access to the image src. no need to use the setAttribute() method
    newImg.classList.add('poster');
    movieLink.append(newImg);

    return newliItem;
  });

  for (let movieHero of movieArray) {
    moviesList.append(movieHero);
  }

  //changed to for of loop because of convenience

  // movieArray.forEach(function (movie) {
  //   moviesList.append(movie);
  // });

  return movieArray;
};

const resultMovies = addMoviesToDom(movies);

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

const moviesListChildren = moviesList.children;
log(moviesListChildren);

const filterMovies = function (wordInMovie) {
  // const moviesFilter = movies.filter(function (movie) {
  //   return movie.title.toLowerCase().includes(wordInMovie.toLowerCase());
  // });

  for (let li of moviesListChildren) {
    if (li.title.toLowerCase().includes(wordInMovie)) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  }
};

const filterLatestMovies = function () {
  // const yearFilter = movies.filter((movie) => parseInt(movie.year) >= 2014);
  for (let li of moviesListChildren) {
    let yearParsed = parseInt(li.value);
    // log(typeof yearParsed)
    if (yearParsed >= 2014) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  }
};

// SEARCHBAR

const searchBarInput = document.querySelector('#search');

const searchInput = function (e) {
  const inputTarget = e.target.value.toLowerCase();

  allButtons.forEach(button => {
    button.checked = false;
  });
  
  for (let movie of moviesListChildren) {
    if (movie.title.toLowerCase().includes(inputTarget)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  }
  
};

searchBarInput.addEventListener('keyup', searchInput);

