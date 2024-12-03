console.log("HMM")
var greeting= 'Howdy ';
var thename= 'Molly';
var welcomeMessage = greeting+ thename+ '!';
console.log(welcomeMessage);
var el = window.document.getElementById('greeting');
console.log("TEST");
el.textContent = welcomeMessage;
console.log(el, greeting, "TEST");