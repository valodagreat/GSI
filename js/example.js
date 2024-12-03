// // Create variables for the welcome message
// var greeting = 'Howdy ';
// var testname = 'Molly';
// var message= ', please check your order: ' ;
// // Concatenate the three variables above to creat e t he welcome message
// var welcome = greeting + testname + message; 

// // Create variables to hold details about the sign
// var sign = 'Montague House' ;
// var tiles= sign.length;
// var subTotal = tiles * 5;
// var shipping = 7;
// var grandTotal = subTotal + shipping;
// // Get the element that has an id of greeti ng
// var el = window.document.getElementById('greeting') ;
// // Replace the content of that element with the personal ized welcome message
// el.textContent = welcome;
// // Get the el ement that has an id of userSign then update its contents
// var elSign = window.document.getElementById('userSign')
// elSign.textContent = sign ;
// // Get the element that has an id of ti l es then update its contents
// var elTiles = window.document.getElementById('tiles');
// elTiles.textContent = tiles;
// // Get the element that has an id of subTotal then update its contents
// var elSubTotal = window.document.getElementById('subTotal');
// elSubTotal.textContent = ' $' + subTotal;
// // Get the element that has an id of shipping then update its contents
// var elSubTotal = window.document.getElementById('shipping') ;
// elSubTotal .textContent = '$' +shipping;
// // Get the element that has an id of grandTotal then update its contents
// var elGrandTotal = window.document.getElementById('grandTotal') ;
// elGrandTotal .textContent = '$ ' + grandTotal; 

var table = 3;
var operator= 'addition';
var i = 1;
var msg = ' ' ;

if (operator=== 'addition') {
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '</br>'
        i++
    }
} else{
    while (i < 11) {
        msg += i +'x'+ table +'='+ (i * table) + '</br>'
        i++
    }
}

// Write the message into the page
var el = window.document.getElementById('blackboard');
el.innerHTML = msg; 