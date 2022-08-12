'use strict';

const log = console.log;

const thirdChild = document.querySelector('ul').children;
log(thirdChild);

log(thirdChild.length); // output 3
log(thirdChild[2]); // output candy

log(document.querySelector('input#check'));

log(document.querySelector('a img'));
//looking for a img inside of the anchor tag

const lItem = document.querySelectorAll('li');

log(lItem[2]);


const ppp = document.querySelector('p'); 

const ptag = ppp.innerHTML =
  '<em><h1> hello</h1></em>';

ptag.addEventListener('mouseover', function () {
  ptag.classList.toggle('huge');
});
