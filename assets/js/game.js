// Wait for the DOM to finish loading before the game starts
// Get the class array "twain-game__card" and listen for a click on each item.

document.addEventListener("DOMContentLoaded", function () {
   const countries = document.querySelectorAll(".twain-game__card");
   countries.forEach(function (country) {
      country.onclick = toggler;

      // An IIFE that shuffle all cards on deck before the game starts.
      (function shuffleCards() {
         let cardLength = document.querySelectorAll(".country").length;
         let randomNum = Math.floor(Math.random() * cardLength) + 1;
         country.style.order = randomNum;
      }());
   });
});

/* Global variables necessary for the game */

// Game time variable
let tSec; //twainSeconds
let tTime; //twainTime
let clearTimeRecord = setInterval(startTimer, 1000);
let tMin = 240; // twainMinutes in seconds (3 * 60sec)

// variable for defining the style of game
let tScore = 0; //twainScore
let cardA;
let cardB;
let istoggled = false;
let deckLock = false;

/**
 * Sets game countdown timer
 */
function startTimer() {

   let playerTime = document.querySelector("#game-timer");
   const lose = document.querySelector(".twain-game__modal-lose");

   if ((tScore !== 1360) && ((tTime % 60 === 0) && (tSec % 60 === 0))) {
      lose.showModal();
      clearInterval(clearTimeRecord);
   } else {
      // code idea from florin pop youtube
      tTime = Math.floor(tMin / 60);
      tSec = tMin % 60;
      tMin--;
      if (tSec < 10) {
         tSec = "0" + tSec;
      }
   }
   playerTime.innerHTML = `${tTime}:${tSec}`;
}

/**
 * Operates the toggling of cards when event starts
 */
function toggler() {
   if (deckLock) {
      return;
   }
   if (this === cardA){
      return;
   }
   this.classList.toggle("on-toggle");
   // check which card has just been toggled
   // Code guide from Code sketch youtube channel
   if (istoggled === false) {
      cardA = this;
      istoggled = true;
   } else {
      cardB = this;
      istoggled = false;
      // check if cardA and cardB match,lock card deck and remove after 1s.
      if (cardA.dataset.name === cardB.dataset.name) {
         deckLock = true;
         // Code-Institute guide
         let yesPairs = document.querySelector(".correct-pairs").innerText;
         document.querySelector(".correct-pairs").innerText = ++yesPairs;
         incrementScore();
         setTimeout(removeCards, 1000);
      }
      // if cardA and cardB do not match and return cards after 1.75s
      else {
         deckLock = true;
         // Code-Institute guide
         let noPairs = document.querySelector(".incorrect-pairs").innerText;
         document.querySelector(".incorrect-pairs").innerText = ++noPairs;
         setTimeout(returnCards, 1750);
      }
   }
}

/**
 * Increment score if player finds pair
 */
function incrementScore() {

   const win = document.querySelector(".twain-game__modal-win");

   if ((tScore === 1360) && ((tTime % 60 > 0) || (tSec % 60 > 0))) {
      win.showModal();
      clearInterval(clearTimeRecord);
   } else if ((tScore === 1360) && ((tTime % 60 === 0) || (tSec % 60 === 0))) {
      win.showModal();
      clearInterval(clearTimeRecord);
   } else {
      tScore += 80;
      document.querySelector("#game-score").innerHTML = `${tScore}`;
   }
}

/**
 * Remove cards from deck when pair is found
 */
function removeCards() {

   cardA.remove();
   cardB.remove();
   resetDeck();
}

/**
 * Return cards back to deck when pair is not found
 */
function returnCards() {

   cardA.classList.toggle("on-toggle");
   cardB.classList.toggle("on-toggle");
   resetDeck();
}

/**
 * Function resets card deck to starting state
 */
// Code guide from Code sketch youtube channel
function resetDeck() {

   istoggled = false;
   deckLock = false;
   cardA = null;
   cardB = null;
}