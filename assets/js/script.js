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

 // variable for defining the style of game
 let twainScore = 0;
 let cardA, cardB;
 let istoggled = false;
 let deckLock = false;

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
    if (deckLock) return;
    this.classList.toggle('on-toggle');

    // check which card has just been toggled
    if (istoggled === false){
        cardA = this;
        istoggled = true;
     }
     else{
        cardB = this;
        istoggled = false;
        
    // check if cardA and cardB match,lock card deck and remove after 1s.
   if (cardA.dataset.name === cardB.dataset.name){
    deckLock = true;
    incrementScore();
    setTimeout(removeCards,1000);
  }

  // if cardA and cardB do not match and return cards after 1.75s
  else{
    deckLock = true;
    setTimeout(returnCards,1750);
  }
}
}

 /**
  * Increment score if player finds pair
  */

  function incrementScore(){
 
   if ((twainScore === 1360) && ((twainTime % 60 > 0) || (twainSeconds % 60 > 0))){
      clearInterval(clearTimeRecord);
   }
   else{
      twainScore+= 80;
      document.querySelector('#game-score').innerHTML = `${twainScore}`;
   }
  }

  /**
 * Remove cards from deck when pair is found
 */
   function removeCards(){

    cardA.remove();
    cardB.remove();
    resetDeck();
   }

/**
 * Return cards back to deck when pair is not found
 */
 function returnCards(){

    cardA.classList.toggle('on-toggle');
    cardB.classList.toggle('on-toggle');
    resetDeck();
 }

 /**
 * Function resets card deck to starting state
 */
function resetDeck(){
   istoggled = false ;
   deckLock = false ;
   cardA = null;
   cardB = null;
}