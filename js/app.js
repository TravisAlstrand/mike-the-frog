import { phrases } from './phrases.js';
import { handle_mike_mouth_change, handle_mike_idle } from './animation.js';
const form = document.querySelector('form');
const input = document.querySelector('.text-input');
const submitButton = document.querySelector('button[type="submit"]');
const mikesTextDisplay = document.querySelector('.response-text');
const userTextDisplay = document.querySelector('.user-text');
let mikesResponse;

// function to get a random phrase from Mike's array
function getRandomPhrase() {
  // get a random number between 0 & the last number of the phrases array
  const randomNumber = Math.floor(Math.random() * phrases.length);

  // return the phrase in the array at the randomNumber's position
  return phrases[randomNumber].toUpperCase();
};

let index = 0;
const speed = 50; /* The speed/duration of the effect in milliseconds */

// function to show mikes response show up like he's typing
function typeWriter(string) {
  submitButton.disabled = true;
  if (index < string.length) {
    mikesTextDisplay.innerHTML += string.charAt(index);
    index++;
    setTimeout(function(){
      typeWriter(string);
      }, speed);
    setTimeout(function(){
      handle_mike_mouth_change(document.querySelector("#mike-img"));
      }, 100);

  } else {
    index = 0;
    submitButton.disabled = false;
  }

}


// set mikes initial message on page load
typeWriter("HELLO! WHAT SEEMS TO BE THE PROBLEM?");


setInterval(function(){
  handle_mike_idle(document.querySelector("#mike-img"));
}, 100);


// event listener for form submission
form.addEventListener('submit', (e) => {

  // prevent page from reloading
  e.preventDefault();

  // reset mikes text
  mikesTextDisplay.innerHTML = "";

  // variable to store user's text at time of submission
  const submittedText = input.value.toUpperCase();

  // append the user's text to the page
  userTextDisplay.innerHTML = submittedText;

  // if user's text includes 'hello' or 'hi'...
  if (submittedText.includes('HELLO') || submittedText.includes('HI ')) {

    mikesResponse = 'HELLO THERE, HOW CAN I HELP?';

    // if user's text includes 'you' or related words...
  } else if (submittedText.includes('YOU') || submittedText.includes("YOU'RE") || submittedText.includes("YOU'VE")) {

    mikesResponse = "WHO, ME? I'M JUST A FROG SILLY!";

  } else if (submittedText === "") {

    mikesResponse = "AHH... THE SILENT TREATMENT, EH?"

  } else {

    // get a random response from Mike's array
    const randomPhrase = getRandomPhrase();

    // append random phrase to the page
    mikesResponse = randomPhrase;
  }

  // send response to typewriter function
  typeWriter(mikesResponse);

  // reset text input
  input.value = "";
});
