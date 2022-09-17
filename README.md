# Twain Land

## Introduction
Twain-land introduces the famous concentration game that both young and old enjoy playing. However, twain-land takes a little tweak by tending towards incorporating a flash card for learning about different countries in the world and pairing them with their corresponding flag colours. The application as of the moment focuses on some countries only in Europe and the program is currently built within the scope of HTML, CSS, and Javascript. The application is fully responsive for the usefulness of users at their convenience. Twain-land intends to be educational and, hopefully, users through consistent usage can expand their recognition of existing countries' flags.
[Link to live website](https://folarin-ogungbemi.github.io/twain-land/ "visit website")

![Twain-Land](./assets/images/twaingame%20mockup-c.png "Game preview")

# Features

## Existing Features

* Game Logo
    * The Game features at its window tab a logo for its uniqueness and for the purpose of identification to users.
    ![Twain-Land Logo](./assets/images/twain%20game%20logo.png "Game logo")
* Introductory message to the game.
    * The application then introduces the goal of the game to its user at the click of the single button "explore". thereafter the user can start the game.
    ![Twain-Land Motive](./assets/images/game%20goal.png "Game goal")
* Game Timer
    * At the start of the game the game countdown timer starts reading.
    ![Twain-Land timer](./assets/images/twain-game%20timer.png "Game timer")
* Game Deck of cards
    * simultaneously, the user can view country flags by flipping the **shuffled card** on deck.
    ![Twain-Land Card-Deck](./assets/images/twain-game%20screenshot%20all%20cards.png "Game deck")
* Game Score board
    * If country is correctly paired to its flag, the score of the game increases
    ![Twain-Land score](./assets/images/twain%20game%20score-c.png "Game score")
* Game won message
    * A successful game completion results in a congratulatory message to the user
    * Player can choose to play the game again.
    ![Twain-Land win](./assets/images/congratulatory%20message-c.png "Game pass")
* Game Lost message
    * Offer of commiseration, when user fails to pair all countries before her time runs out
    * contains how well the player did during the game.
    * The player is given chance to try again.
    ![Twain-Land lose](./assets/images/twain%20game%20commiseration.png "Game lost")
* Responsiveness to devices
    * The application was built to respond to various screen sizes with a minimum of width of 300px. Therefore it is playable on smart-phones.

## Features left to be implemented
* The game intends to help users get accustomed with countries' flags. The application currently features only few countries in Europe and will in the future provide functions for users to select continent of their choice.
* The game will also include stages of difficulty.

# Twain-Land Program Flow-Chart
![Twain-Land Flowchart](./assets/images/twain-game%20flow%20chart.png "Game Flow chart")


# Testing

Twain Land program was tested under different circumstances to check for the games Efficiency and effectiveness.
The following steps were taken during testing procedure.

## Validator testing
* Lighthouse  Test
    * ![Lighthouse](./assets/images/Lighthouse%20test.png "performance test")
* HTML
    * [W3C validator](https://validator.w3.org "Visit website") was used to test the two html files.By direct input, No errors or warnings were found.
* CSS
    * [(Jigsaw)validator](https://jigsaw.w3.org/css-validator "visit website") was used to test the css linked file. By direct input, No errors or warnings were found.
* Javascript
    * No errors were found when passing through the official [Jshint validator](https://jshint.com "visit website")
    * metrics report
        * There are 9 functions in the file.
        * Functions with the largest signature take 1 arguments, while the median is 0.
        * Largest function has 20 statements in it, while the median is 3.
        * The most complex function has a cyclomatic complexity value while the median is 1.
        * 19 *Non-trivial* warnings were reported. These warning were based on es6version implementation.
    * The extension was installed to test for errors.
        * [Why does JSHint throw a warning if i am using const](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const/27442276#27442276 "visit stackoverflow page")

## High Level Testing
* The following steps were taken to test stages of the program
![Test strategy](./assets/images/twain%20game%20testing%20process.png "view image")
[Link to result here!](https://docs.google.com/spreadsheets/d/1zQbxA237BhtKEOATxSnLxXUf_9XH3FDsB3V4f07nk7I/edit#gid=0 "visit page")

## Unfixed Bugs
Bug on favicon 404 error not found in mozilla firefox and microsoft edge remain unfixed as the situation appears to be from speicific browsers. it is as of the moment unclear why the issue persist and what could be done to fix the bug.
