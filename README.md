# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [newsletter-sign-up-with-success-message](https://damishalkina.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript

### What I learned

I learned that element can flicker when its backround transiting from gradient to solid color. In order to avoid this flickering I have added pseudo element after to my button element with following styles:

```
.button::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 8px;
    opacity: 0;
    background: rgb(254,82,122);
    background: linear-gradient(90deg, rgba(254,82,122,1) 0%, rgba(255,94,92,1) 50%, rgba(254,106,60,1) 100%);
    box-shadow: rgba(255, 98, 87, 0.3) 0 19px 38px, rgba(255, 98, 87, 0.22) 0 15px 12px;
    transition: opacity 0.5s ease-in-out;
}
```
then I changed opacity for focus state of this after element

```
.button:focus::after {
    opacity: 1;
}
```
However after all this actions label of my button was hidden behind the after element with gradient. To fix this issue I have changed z-index of label:

```
.button span {
    position: relative;
    z-index: 3;
}
```


### Continued development

I want to add some functionality to close modal window. Also it would be great to use some database like firebase in order to store data.

