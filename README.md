![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Rock Paper Scissors lizard spock

Rock paper scissors lizard spock is a game created for the people who wants enjoyment by challenging the computer in a decision game. The difference by playing against the computer and people is that the computer are not readable and makes the choices randomly, which makes the game fairer and more difficult. 

The users of this game will enjoy thier time by challenging the computer and it will improve their mood during the day. The site will be targeted towards adult and children since it is a popular and simple game to understand.

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/rock-paper-scissors-mockup.PNG)

[Live link](https://muadh-hudji.github.io/rock-paper-scissors/)

## User Experience (UX)

### Design


## Features

### Existing Features

- __The Header__

    - The header of the page contains game name and score panel that shows how many times the user has won and lost.
    - By having the score panel in the top of the site will make the score more accessible and creates a challenage for the user to beat the computer. 

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/header.PNG)

- __Game area__

    - The game area includes the five buttons of the game. The buttons are distributed in the area in a form of a pentagon to make the buttons clearly showed and to improve the appearance of the page.
    - Each button have a circle form with a background image of a hand in form of the choises(rock, paper, scissors, lizard and spock).
    - To enhance the gameplay experience, the buttons reacts by changing the color when hovering with the mouse or by clicking on them.
    - The buttons will be disabled when the user clicks on a button to avoid several choises in same a game round.

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/game-area.PNG)

- __Result panel__

    - The result of the round and the computer choice will be displayed in result panel. Information about what will be displayed in each part of the result panel will be shown before the user clicks on a game button.
    - The choice of the computer will be displayed by an image when the user makes the choice. The result of the round will be displayed by text and color after comparing the choices. By displaying the result with different color makes it easier for the user to know the result of the round.

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/result-panel.PNG)

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/result-panel2.PNG)

- __Control section__

    - Play again and reset buttons are included in control section. When the user clicks on play again button a new game round will start, and by clicking on reset button the score will be reseted and a new game will start.
    - The game buttons in game area will reset when the user clicks on one of the buttons in control section. 

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/control-section.PNG)

- __The footer__

    - The rules of the game are presented in the footer.
    - The footer section is important to the user because it gives explanation of how the game is played.

![Responsice Mockup](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/footer.PNG)

### Future Features
- Create an easy version of the game and have it as an alternative choice on the page.

## Testing

### The page on different screen sizes
- Media queries is added to make the page responsive to different screen sizes:
    - 708px and down.
    - 500px and down.

### Manual Test
The site has been manually tested to ensure that everything in the site are working as it should:
- Scrolling up and down on the page to ensure that the items are positioned in correct places.
- Resize the screen by using development tools to ensure that the pages are responsive and suitable to different screen sizes.
- Ensure that all the buttons are working by clicking and hovering with the mouse.
- Tested the website on different browsers: Chrome, explore and firefox.
- Tested the website on desktop and mobile.

### Validation Test

- HTML
    - No error or warnings were returned when passing the home page through [W3C validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmuadh-hudji.github.io%2Frock-paper-scissors%2F)

- CSS
   - No error or warnings were returned when passing the home page through [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmuadh-hudji.github.io%2Frock-paper-scissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- Javascript
    - No Error were returned when passing the home page through (JSHint) validator.
    - Warning returned about function declared within loops.

    ![(JSHint) validator](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/javascript-validation.PNG)

- Report of lighthouse
    - Desktop

    ![Report of lighthouse](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/lighthouse-desktop.PNG)


    - Mobile

    ![Report of lighthouse](https://github.com/muadh-hudji/rock-paper-scissors/blob/main/assets/images/lighthouse-mobile.PNG)

### Fixed Bugs
- Background color of the game buttons when hovering gets lost after changing background colors in javascript, important rule is used to avoid overriding this property.

### Unfixed Bugs
- The warning about the function declared within loops in javascript remains.

## Deployment and local development

### Deployment
- The site is deployed on github pages by following steps:
    - Push the final code to Github
    - Navigate in Github to repository for the project
    - Navigate to "settings"
    - Navigate to "pages" below "code and automation"
    - In section "build and deployment" select the source "deploy from a branch"
    - Then select "main/root" branch
    - Then click on "Save"

### Copy Clone
- The project can be cloned by following steps:
    - Navigate in Github after the repository for the project "rock paper scissors"
    - On the top of the page click on the green button "<>Code"
    - Underneath Local tab, click on "HTTPS"
    - Chose to clone the project by either the address, "Open with GitHub desktop" or download as a ZIP-file

### Create a new Fork 
- Create new fork by following steps:
    - Navigate in Github after the repository for the project "OccupationOfPalestine"
    - On the top of the page on the right side, click on "Fork"
    - Select "Create new fork"


 ## Credits

### Media
- The images used in this project were taken from flaticon.com