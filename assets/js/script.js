// Modal opens a dialog box at the click of hero explore button

 document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.btn--open').onclick = function(){
        document.querySelector('#hero__modal').showModal();
    };    
});

// Wait for the DOM to finish loading before the game starts
 // Get the class array "twain-game__card" and listen for a click on each item.

 document.addEventListener('DOMContentLoaded', function(){
    const countries = document.querySelectorAll('.twain-game__card');
    countries.forEach(function(country){
      country.onclick = toggler;

       // An IIFE that shuffle all cards on deck before the game starts.
   (function shuffleCards(){
    let cardLength = document.querySelectorAll('.country').length;
    let randomNum = Math.floor(Math.random() * cardLength) + 1;
    country.style.order = randomNum;
  }());
    });
});

// Global variables necessary for the game
// Game time variable
 let twainSeconds;
 let twainTime;
 let clearTimeRecord = setInterval(startTimer,1000);
 let twainMinutes = 240 ; // time in seconds (3 * 60sec)

/**
 * Sets game countdown timer
 */
 function startTimer(){
    let playerTime = document.querySelector('#game-timer');

  if ((twainTime % 60 === 0) && (twainSeconds % 60 === 0)){
      clearInterval(clearTimeRecord);
   }
   else{
      // code idea from florin pop youtube
      twainTime = Math.floor(twainMinutes/60);
      twainSeconds = twainMinutes % 60;
      twainMinutes--;
      if(twainSeconds < 10){
         twainSeconds = '0' + twainSeconds;
      }
      }
      playerTime.innerHTML = `${twainTime}:${twainSeconds}`;
}

/**
 * Operates the toggling of cards when event starts 
 */
function toggler(){
    this.classList.toggle('on-toggle');
}

 /**
  * Increment score if player finds pair
  */

  function incrementScore(){

  }

  /**
 * Remove cards from deck when pair is found
 */
   function removeCards(){

   }

/**
 * Return cards back to deck when pair is not found
 */
 function returnCards(){

 }

 /**
 * Function resets card deck to starting state
 */
function resetDeck(){

}