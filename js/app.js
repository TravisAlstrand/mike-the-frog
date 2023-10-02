import { phrases, silent_phrases, you_phrases } from "./phrases.js";
import { handle_mike_mouth_change, handle_mike_idle } from "./animation.js";
const form = document.querySelector("form");
const input = document.querySelector(".text-input");
const submitButton = document.querySelector('button[type="submit"]');

// function to get a random phrase from Mike's array
function getRandomPhrase(phrase_list) {
  // get a random number between 0 & the last number of the phrases array
  const randomNumber = Math.floor(Math.random() * phrase_list.length);

  // return the phrase in the array at the randomNumber's position
  return phrase_list[randomNumber].toUpperCase();
}

let index = 0;
const speed = 50; /* The speed/duration of the effect in milliseconds */

// function to show mikes response show up like he's typing

setInterval(function () {
  handle_mike_idle(document.querySelector("#mike-img"));
}, 100);

// event listener for form submission
form.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  let mikesResponse = "";

  // reset mikes text

  // variable to store user's text at time of submission
  const submittedText = input.value.toUpperCase();

  // if user's text includes 'hello' or 'hi'...
  if (submittedText.includes("HELLO") || submittedText.includes("HI ")) {
    mikesResponse = "HELLO THERE, HOW CAN I HELP?";

    // if user's text includes 'you' or related words...
  } else if (
    submittedText.includes("YOU") ||
    submittedText.includes("YOU'RE") ||
    submittedText.includes("YOU'VE")
  ) {
    mikesResponse = getRandomPhrase(you_phrases);
  } else if (submittedText === "") {
    mikesResponse = getRandomPhrase(silent_phrases);
  } else {
    // append random phrase to the page
    mikesResponse = getRandomPhrase(phrases);
  }

  // Create and add div for user
  const userTextDisplay = document.createElement("p");
  let userDiv = document.createElement("div");
  userDiv.className = "user-text-cont";
  let userName = document.createElement("p");
  userName.className = "name user";
  userName.innerHTML = "YOU:";
  userDiv.appendChild(userName);
  userTextDisplay.className = "user-text";
  userTextDisplay.innerHTML = submittedText;
  userDiv.appendChild(userTextDisplay);

  // append user's text to the page
  document.getElementById("chat-container").appendChild(userDiv);

  // Create and add div for Mike
  const mikesTextDisplay = document.createElement("p");
  let mikesDiv = document.createElement("div");
  mikesDiv.className = "response-cont";
  let mikesName = document.createElement("p");
  mikesName.className = "name mike";
  mikesName.innerHTML = "MIKE:";
  mikesDiv.appendChild(mikesName);
  mikesTextDisplay.className = "response-text";
  mikesDiv.appendChild(mikesTextDisplay);

  // append Mike's text to the page
  document.getElementById("chat-container").appendChild(mikesDiv);

  function typeWriter(string) {
    submitButton.disabled = true;
    if (index < string.length) {
      mikesTextDisplay.innerHTML += string.charAt(index);
      index++;
      setTimeout(function () {
        typeWriter(string);
      }, speed);
      setTimeout(function () {
        handle_mike_mouth_change(document.querySelector("#mike-img"));
      }, 100);
    } else {
      index = 0;
      submitButton.disabled = false;
    }
  }

  // send response to typewriter function
  typeWriter(mikesResponse);

  let chatContainer = document.getElementById("chat-container");
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // reset text input
  input.value = "";
});
