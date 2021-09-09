# Rock, Paper, Scissors, Lizard, Spock!

Rock, Paper, Scissors, Lizard, Spock! Is an interactive game hosted in the web browser, making use of several technologies to create a positive experience for the user.  

Its primary goal is to provide enjoyment whilst also highlighting, a perhaps little known, modern adaptation of a classic game. It creates a competitive element through use of a time limit to the game and a high score stored in the local storage of the browser. 

![readme hero image](/assets/images/hero.png)

## User Experience (UX)

- **User Stories**

    *The site works off the assumption, the user is already aware of the classic game, Rock, Paper, Scissors.*

    + **First Time Visitor Goals**
    
        A. Remind the user of the rules for the classic game type. 

        B. Demonstrate how to the two moves of the modern game type have been incorporated.

        C. Be encouraged to set a high score.   

    + **Returning Visitor Goals**

        A. Further enforce the rules for the modern game type. 

        B. Beat the previous high score. 

    + **Frequent Visitor Goals**

        A. Be fluent in their understanding of the game. 

        B. Continue to set a new high score. 

    - **Owners Story**

        A. The Primary goal of the owner is to educate the user on the modern game type.

        B. To encourage the user to keep returning and set a high score. 

- **Research**

    + **Pros**
  

    + **Cons**


    - **Features**

## Design

- **Colour Scheme**

    *Inspiration for the colour scheme came from Spock's uniform in Star Trek. A limited colour pallet based off this was developed with https://mycolor.space/ Designated colours are as follows:*

    1. #02035E (Dark Blue)
    2. #493A68 (Dark Purple)
    3. #F9EBFF (Off-White)
    4. #66BAA8 (Teal)

![color palette image](/assets/images/palette.png)

- **Typography**

    *I chose **Space Mono** for most of the text and **Poppins** as a secondary font. Space Mono is a font used in Star Trek and has a strong sci-fi appearance, I felt this was emotive of the sites purpose and when coupled with Poppins provided good contrast for the sections of text.*

- **Imagery**

    *There is no imagery in the sense of pictures used in the site, I chose to do this so not to distract from the icons used as the buttons for the game, allowing the user to focus fully when making their decision during game play.* 

- **Layout**

    *The site consists of a landing page, used to display the rules and two separate pages used to hold the two individual game types. This multipage approach allowed me to achieve all the owner goals.*
   ## Existing Features

![image of the index page](/assets/images/index.png)

- **The Header**

    * As is industry standard the page header, which is consistent throughout the site, acts as a link to the home page. 

    * The Rock, Paper and Scissors parts of it are uppercase, whilst the Lizard and Spock part are not. This is done so the user can differentiate between the rules for the Traditional game type and the Modern game type as wrote below it. 

- **The Rules Section**

    * The intention with the rules section is to be clear and concise. The rules for the traditional game type are uppercase and the modern are lowercase, as is done in the header. 

    * They are wrapped in a simple border to help frame them on the page, attempting to make them appear like a notice board. 

- **The Type Section** 

    * As is with the header and rules sections, the text for the Traditional game type in the buttons to direct you is uppercase and the Modern game type is lowercase. 

    * Dice icons are used to highlight the amount of moves in the respective game types. 

**The Game Areas**

![the game image](/assets/images/gamearea.png)

* The score and countdown displays are intended to mimic a basketball scoreboard, both incrementing as intended, whilst the user plays. The high score is stored within the browser's local storage to allow for repeated gaming. 

* The timer begins once the first move is called, upon its completion an alert is displayed with the final score and a “Try Again!” message is displayed within the countdown container. This is intended to encourage the user to keep playing. 

* The footer allows the user to easily navigate between the two game types or to the home page to be reminded of the rules. The dice icons are used again to allow for intuitive use of the site. A hover pseudo class is used on the icons so to show the user they are links.

* The game area also contains a prompt at the top to inform the user that the aim of the game is to set a high score within the time frame and the countdown begins once they chose their first move. 

![the computer choice image](/assets/images/comchoice.png)

* The computer choice is updated as moves are called, highlighting to the user the choice is random. 

* The result area has a glow class applied to it; this allows the user to identify their result without having to read the result each time. Green for a win, red for a loss and grey for a draw. 

![the game moves image](/assets/images/moves.png)

* The move icons are designed to be the focus point of the game areas. Big and bold in the page centre. 

![the hover pseudo class image](/assets/images/hoverpsudo.png)

* A hover pseudo class is applied to the game moves so the user can see which move they are about to pick with ease. 
## Features Left to Implement

* A congratulatory message if a new high score is set. 

* Multiple time variations for the countdown. 

* Competitive play against another user rather than AI.

## Testing  

- I have  run my website on: Chrome, Microsoft Edge, Firefox and Safari. Performing as intended on all of them.  

- It has also been run on my own personal computer, laptop and iPhone X, running as intended on these also.   

- To broaden my device spectrum, chrome developer tools was used to mimic the site running on several other devices, no issues have yet been found. 

- **Validator Testing**

    - HTML
        - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
    - CSS
        - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
    - JS
        - No errors were found when passing through the [JS Quality tool](https://jshint.com/)

- **Lighthouse**

![the computer choice image](/assets/images/lighthouse.png)

- When passed through the google chrome lighthouse extension for mobile devices a 100% was achieved. 

![the computer choice image](/assets/images/lighthouse.web.png)

- When passed through the google chrome lighthouse extension for web applications it scored 100% on everything but performance, I am currently unaware on how to fix the problems highlighted in this test. 

## Unfixed Bugs

- Firefox had a slight discrepancy in the landing page view height. Causing it to have a scroll bar which I didn’t intend. I deemed this not to currently be a major issue though. 

- The issues preventing me from scoring a 100% for web applications on Lighthouse. Lack of knowlage is the root cause of this.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 

  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Rock, Paper, Scissors](https://lewiscm14.github.io/rock-paper-scissors/index.html)

## Technologies Used

- **Languages Used**

    * HTML5
    * CSS3
    * JS

- **Frameworks, Libraries & Programs Used**

    1. Balsamiq. 
            * Balsamiq was used to create the wireframes during the design process.

    2. mycolour.space.
            * Used to define my  colour pallet for the project based of my primary colour choice.

    3. Google Fonts. 
            * Used to import the Space Mono and Poppins font into the style.css file which is used on all pages throughout the project.

    4. Font Awesome.
            * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

    5. Git.
            * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

     6. GitHub.
            * GitHub is used to store the projects code after being pushed from Git.

    7. Am i Responsive
            * Used to create hero image for readme.

## Credits 

* A special thank you to my mentor Can Sucullu. 

* Thanks to Scott from the Code Institude tutor support team, who helped me develop my understanding of JS throughout this project.

* Finally thanks to my peers on Slack who responded to my questions.  

- **Content** 

    * I used the breakpoints listed on [FreeCodeCamp](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/) for my media queries.

    * I used this tutorial on [Local Storage](https://www.youtube.com/watch?v=T9GWHFDcELQ&ab_channel=ZacGordon) to aid in writing the code for my high score functions. 

    * I used this tutorial on [writing a timer](https://www.youtube.com/watch?v=_a4XCarxwr8&ab_channel=WEBCIFAR) to help in developing my countdown functions.

    *  I used this [tutorial](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=1730s&ab_channel=freeCodeCamp.org) for help in developing the main game functions and glow classes on my results container.    

- **Media**

    * No media has been used on this project.
