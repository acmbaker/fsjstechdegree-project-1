/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Used https://www.quotes.net/ for the quotes, for bg colours found a nice colour palette on google :)
let quotes = [
  {source: 'William Faulkner', citation: 'Book(s) of William Faulkner', quote: 'A mans moral conscience is the curse he had to accept from the gods in order to gain from them the right to dream.', year: '1952', tags: 'Dreams', wikipage: 'https://en.wikipedia.org/wiki/William_Faulkner'},
  {source: 'Dr. Martin Luther King', citation: 'Stanford The Martin Luther King, Jr. Research and Education Institute August', quote: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.', year: '1963', tags: 'Dreams', wikipage: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.'},
  {source: 'Barbara Sher', citation: 'Book(s) of Barbara Sher', quote: 'Isolation is a dream killer.', year: '2015', tags: 'Dreams', wikipage: 'https://en.wikipedia.org/wiki/Barbara_Sher'},
  {source: 'Denis Waitley', citation: 'Book(s) of Denis Waitley', quote: 'We have got to have a dream if we are going to make a dream come true.', year: '1985', tags: 'Dreams', wikipage: 'https://en.wikipedia.org/wiki/Denis_Waitley'},
  {source: 'Thomas Jefferson', citation: 'Book(s) of Thomas Jefferson', quote: 'My theory has always been, that if we are to dream, the flatteries of hope are as cheap, and pleasanter, than the gloom of despair.', year: '1785', tags: 'Dreams', wikipage: 'https://en.wikipedia.org/wiki/Thomas_Jefferson'}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //Generates number from 0-5 (as array starts from 0). Returns random quote.
  let randomnum = Math.floor(Math.random() * quotes.length);
  return quotes[randomnum];
}

/***
 * `printQuote` function
***/
function printQuote() {

  //variable to store random quote
  let selector = getRandomQuote();

  //html selector from object
  let html = `
  <p class="quote">${selector.quote}</p>
  <p class="source"> ${selector.source}
  `;

  //if statements that check for empty classes
  if ( selector[1] !== '') {
    html += `<span class="citation">${selector.citation}</span>`;
  }

  if ( selector[3] !== '') {
    html += `<span class="year">${selector.year}</span>`;
  }

  //category of quote (extra credit hopefully :D)
  if ( selector[4] !== '') {
    html += `<br/><span class="tags">${selector.tags}</span>`;
  }

  //bonus if statement for wikipedia page link to read more (extra credit hopefully :D)
  if ( selector[5] !== '') {
    html += ` &amp; <span class="wikipedia"><a href="${selector.wikipage}" target="_blank">View Wikipedia</a></span>`
  }

  html += `</p>`;

  //function changes bg colour
  randomBg();

  //replaces content in index.html
  document.getElementById('quote-box').innerHTML = html; 

}

//random bg colour generator taken from https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
function randomBg() {
  document.body.style.background = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

//Quote changes every 15 seconds.
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);