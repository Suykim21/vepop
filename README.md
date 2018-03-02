# Vepop
Vepop is a fictitious responsive events/tourism website, I structured the project based around BEM and SASS 7-1 Pattern methodologies. It is made purely from html, css/scss, and vanilla javascript(es6) connecting cloud-hosted noSQL database: firebase. Sorting algorithms has been implemented when filtering for specific events such as expensive-affordable and A-Z etc.
I used AJAX - The XMLHttpRequest Object to pull out local json file to manipulate user desired sort and/or filter on events.html. I used Regex when doing validations on user input and once all conditions are passed it would directly store data onto firebase real time.

## Prerequisites/Installing

### NPM
Before doing live-server on your text editor to view the mock-up, please be sure to npm install on root folder. I inputted several scripts to compile sass files, compress, autoprefix, etc.
After you have successfully installed all packages listed on package.json, please type "npm run start" as it will compile sass files and automatically open browser (for my case, I used Firefox as my default as it has better visualization with css-grid).

## Live Demo

[Live Demo](https://suykim21.github.io/vepop/)

## Resources
- [BEM - Block Element Modifier](http://getbem.com/introduction/) </br>
- [Sass/Scss](https://sass-guidelin.es/) </br>
- [Sass 7-1 Pattern Architecture](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization) </br>
- [NPM](https://docs.npmjs.com/) </br>
- [AJAX - The XMLHttpRequest Object](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp) </br>
- [Firebase Google](https://firebase.google.com/) </br>
- [Regex - Syntax Check](https://regexr.com/)

### Mobile & Desktop Snapshot

## Home
Mobile | Desktop 
:---------------:|:--------------:
<img src="https://user-images.githubusercontent.com/25072657/36890173-d4a6d2ee-1db1-11e8-92ce-7e0f6fa4bd9e.png" width="200px"> | <img src="https://user-images.githubusercontent.com/25072657/36890780-08aff2c6-1db4-11e8-99b6-97cb07302fbd.png" width="850px"> 

## Events
Mobile | Desktop 
:---------------:|:--------------:
<img src="https://user-images.githubusercontent.com/25072657/36890243-07ab1c18-1db2-11e8-8e7e-9a99fc28004d.png" width="200px"> | <img src="https://user-images.githubusercontent.com/25072657/36890240-062210e0-1db2-11e8-96bf-c17cd65ae664.png" width="850px"> 

## Events
Mobile | Desktop 
:---------------:|:--------------:
<img src="https://user-images.githubusercontent.com/25072657/36890295-33bd26b6-1db2-11e8-890a-44f3241dcbb3.png" width="200px"> | <img src="https://user-images.githubusercontent.com/25072657/36890292-31df2998-1db2-11e8-83e1-1e02083bd9ce.png" width="850px"> 
