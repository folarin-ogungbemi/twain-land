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

/**
 * Sets game countdown timer
 */
 function startTimer(){
    
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