import { phrases } from './phrases.js';
const form = document.querySelector('form');
const input = document.querySelector('.text-input');
const mikesTextDisplay = document.querySelector('.response-text');
const userTextDisplay = document.querySelector('.user-text');

// function to get a random phrase from Mike's array
function getRandomPhrase() {
  // get a random number between 0 & the last number of the phrases array
  const randomNumber = Math.floor(Math.random() * phrases.length);

  // return the phrase in the array at the randomNumber's position
  return phrases[randomNumber].toUpperCase();
};

// event listener for form submission
form.addEventListener('submit', (e) => {

  // prevent page from reloading
  e.preventDefault();

  // variable to store user's text at time of submission
  const submittedText = input.value.toUpperCase();

  // append the user's text to the page
  userTextDisplay.innerHTML = submittedText;

  // if user's text includes 'hello' or 'hi'...
  if (submittedText.includes('HELLO') || submittedText.includes(' HI ')) {

    mikesTextDisplay.innerHTML = 'HELLO THERE, HOW CAN I HELP?'; 

    // if user's text includes 'you' or related words...
  } else if (submittedText.includes('YOU') || submittedText.includes("YOU'RE") || submittedText.includes("YOU'VE")) {

    mikesTextDisplay.innerHTML = "WHO, ME? I'M JUST A FROG SILLY!";

  } else if (submittedText === "") {

    mikesTextDisplay.innerHTML = "AHH... THE SILENT TREATMENT, EH?"

  } else {

    // get a random response from Mike's array
    const randomPhrase = getRandomPhrase();

    // append random phrase to the page
    mikesTextDisplay.innerHTML = randomPhrase;
  }

  // reset text input
  input.value = "";
});
