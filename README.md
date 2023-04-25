![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Rock Paper Scissors


## User Experience (UX)

### Design


## Features

### Existing Features

- __The Header__

    - The header of the page contains site name and score panel that shows how many times the user has won and lost.
    - By having the score panel in the top of the site

- __Game area__

    - The game area includes the five buttons of the game. 

- __Result panel__

- __Control section__

- __The footer__

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
    - No Error were returned when passing the home page through.
    - Warning about function declared within loops.

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