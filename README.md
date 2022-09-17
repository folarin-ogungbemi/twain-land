# Twain Land

## Introduction
Twain-land introduces the famous concentration game that both young and old enjoy playing. However, twain-land takes a little tweak by tending towards incorporating a flash card for learning about different countries in the world and pairing them with their corresponding flag colours. The application as of the moment focuses on some countries only in Europe and the program is currently built within the scope of HTML, CSS, and Javascript. The application is fully responsive for the usefulness of users at their convenience. Twain-land intends to be educational and, hopefully, users through consistent usage can expand their recognition of existing countries' flags.
[Link to live website](https://folarin-ogungbemi.github.io/twain-land/ "visit website")

![Twain-Land](./assets/images/twaingame%20mockup-c.png "Game preview")

---

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

---

# Twain-Land Program Flow-Chart
![Twain-Land Flowchart](./assets/images/twain-game%20flow%20chart.png "Game Flow chart")

## Note
* The program has two html pages, two javascript pages and one css page all properly linked together for the success of the program.
* The markup text implored the use of Block-Element-Modifier(BEM) for the purpose of sectionting the naming convention in the markup code.

---

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
Bug on favicon *404 error not found* in mozilla firefox and microsoft edge remain unfixed as the situation appears to be from speicific browsers. it is as of the moment unclear why the issue persist and what could be done to fix the bug. The error is not pertaining the game

---

# Deployment

Github is the hosting platform for the project and to deploy, The following steps were taken:
[Github Address](https://github.com/folarin-ogungbemi/twain-land.git "visit github address")
* Navigate to settings on Github.
* Click on **pages** from the list on the left flank of the page.
* Navigate to the branch section and select **main** as branch then click save.
* After approximately two minutes refresh the website and a live website will be available.
[Live website here](https://folarin-ogungbemi.github.io/twain-land/ "visit live website")

---

# Technologies

* HTML
    * Hyper Text Markup Language(HTML) is the main text writer used for this website.
* CSS
    * Cascading Style Sheets(CSS) is the technology used for styling the website.
* Javascript
    * Javascript web program was used isn writing the codes that brings interactivity to the game.
* Code Institute
    * A coding school for learning Software Development.
* [Github](https://github.com "Link to Github main-page")
    * Github is the site used for the deployment and hosting of this website.
* [Gitpod](https://www.gitpod.io "Link to Gitpod main-page")
    * Gitpod is the open-source developer platform used in tandem with github for the deployment of the website source code.
* [Visual Studio code](https://code.visualstudio.com "Link to visual studio code main-page")
    * The Integrated development environment(IDE) used for the writing of source code.
* [Flaticon](https://www.flaticon.com/ "Link to flaticon main-page")
    * The icons used in the website were products of flaticon.
* [Google fonts](https://fonts.google.com "Link to google fonts main-page")
    * The fonts used in the website were products of google fonts.
* [Adobe color](https://color.adobe.com/de "Link to Adobe color")
    * Adobe color was used to compare colors used for the website.
* [TinyJPG](https://tinyjpg.com/ "Link to TinyJPG main-page")
    * Website used for the compression of images used in the website.
* [Pexels](https://www.pexels.com "Link to pexels main-page")
    * Website used to source images used in the website.
* [Techsini](https://techsini.com/multi-mockup/index.php "Link to website main-page")
    * The Mock-up generator website used for creating the website mock-up image.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator "Link to W3 CSS main-page")
    * CSS validator used to validate the website's CSS in comparison to standard CSS writing.
* [W3 HTML Checker](https://validator.w3.org/nu/#textarea "Link to W3 HTML main-page")
    * HTML validator used to validate the website's HTML in comparison to standard HTML writing.
* [Jshint validator](https://jshint.com "visit website")
    * For testing of codes in comparison to standard writing of codes.
* [Image resizer](https://imageresizer.com/resize/download/632541ad11b49d00123e785e "Link to main-page")
    * For resizing of images to desired output
* [Youtube](https://www.youtube.com/ "Link to youtube")
    * Ample resources for web dev tutorials
* [Edx](https://www.edx.org/ "Link to edx")
    * Havard web development courses

---
# Credits

## Code

* The turorial from [Code Institute](https://learn.codeinstitute.net/ci_program/diplomainfullstacksoftwarecommoncurriculum "Visit Code Institute") was the most helpful link from the writing of code to the deployment of the program.
* Helpful ideas from  [Kevin Powel](https://youtu.be/TAB_v6yBXIE "Visit Kevin Powel youtube video") in learning how to use modals.
* Helpful ideas from  [Kevin Powel](https://youtu.be/GGcDLOuKaiA "Visit Kevin Powel youtube video") in using grid-auto-flow to layout the cards.
* Building of Readme file using technique from [Daisy McG](https://github.com/Daisy-McG/MilestoneProject-1 "Visit Daisy McG Github").
*  Helpful ideas from  [Code Sketch](https://youtu.be/6-CsPmYQ-VI "Visit Code sketch youtube video") in understanding the matching logic.
*  Helpful idea from  [Florin Pop](https://youtu.be/x7WJEmxNlEs "Visit Code sketch youtube video") in understanding countdown timer logic.

## Media

* Thanks to Pexels and to pixabay who made these pictures available for use:
*  [Pixabay](https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "see image")
*  [Pixabay](https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "see image")
* Thanks to [Flaticon](https://www.flaticon.com/ "visit flaticon") for making the country icons available for use.

## Acknowledgement 

My sincere appreciation goes to :
* To my able mentor, that always come thtough for me. Thank you always for providing me with relevant tips and information to build this website.
* To my nieces Wuraola, Eniola and Dayo, who introduced me to the game during our fun game times. thank you sweethearts for the inspiration.
* And finally to my partner, Mo, for giving her attention at the time of need.