# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots
![image](https://user-images.githubusercontent.com/46665152/208803543-8a3b1477-10ac-4129-b160-bb2bdff002cc.png) ![image](https://user-images.githubusercontent.com/46665152/208803888-9c64ddd1-09e2-47e2-9937-74252fd012e5.png)

## My process

I really wanted to to have a transition on the "Thank You" card appearing after the form was submitted, and so I had a little trouble getting the positioning to work with what I know. But after fiddling around, I got it to work with the following code:

```css
.hidden {
  opacity: 0;
  transition: opacity 1000ms linear;
}

form {
  display: grid;
  position: relative;
  z-index: 2;
}

.thank-you {
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: opacity 1000ms linear;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
}

```
```js
submitForm: function() {
  document.querySelector('form').classList.toggle('hidden');
  document.querySelector('form').setAttribute('aria-hidden', 'true');
  document.querySelector('.input-cta').setAttribute('tabindex', '-1');
  document.querySelector('.btn').setAttribute('tabindex', '-1');
  setTimeout(function() {
    document.querySelector('.thank-you').classList.toggle('hidden');
    document.querySelector('.thank-you').setAttribute('aria-hidden', 'false');
  }, 1000);
}
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue.js](https://vuejs.org/) - JS framework
