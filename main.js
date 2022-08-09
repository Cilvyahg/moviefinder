'use strict';

// TODO : baseurl imdbID is not good yet. 

const log = console.log;

// 1

const addMoviesToDom = function (movies) {
  // get the UL by using id that you made
  const moviesList = document.querySelector('#list-movies');
  // let baseURL = 'https://www.imdb.com/title/';
  // const imdbID = movies[1].imdbID;

  const movieArray = movies.map(function (movie) {
    const newliItem = document.createElement('li'); // step 2 array with 35 li elements.

    const movieLink = document.createElement('a');

    movieLink.setAttribute('href', movie.title);
    newliItem.append(movieLink);

    const newImg = document.createElement('img');
    newImg.setAttribute('src', movie.poster);
    movieLink.append(newImg);

    log(newliItem);
    return newliItem; // step 3 for each movie create a li and put the title of the movie as a string
  });

  log(movieArray);

  movieArray.forEach(function (movie) {
    moviesList.append(movie);
  });

  return movieArray;
};

addMoviesToDom(movies);
log(addMoviesToDom(movies));


// 2

const allButtons = document.querySelectorAll('input[name="movies"');
log(allButtons);

const handleOnChangeEvent = function (e) {
  log(`the button with this value :: `, this.value,` has been checked`, e)

}

const buttonClick = function () {
  for (let button of allButtons) {
    button.addEventListener('change', handleOnChangeEvent) }
  }


buttonClick(); 






