// When a ____ event occurs on ____ element, do this___
//click
//button
//alert('hi')




// *************************************
// OPTION 1: Inline (look in index.html)
// *************************************
function makeBody (color) {
	document.body.style.backgroundColor = color
}
// *************************************
// OPTION 2: onClick property in JS:
// *************************************

const tealButton = document.querySelector('#teal')

tealButton.onclick = function () {
	makeBody('teal')
}

//set the onclick property to a function:

//You cannot attach multiple onclick listeners this way.
//this function will run, but the previous one will not

// btn.onclick = function() {
// 	h1.style.color = 'cyan';
// };

// **************************************
// OPTION 3: addEventListener (THE BEST!)
// *************************************

const violetButton = document.querySelector('#violet')
const h1 = document.querySelector('h1')

violetButton.addEventListener('click', function () {
	makeBody('violet')
})

violetButton.addEventListener('click', function () {
	h1.style.color = 'cyan'
})

// Select an element and call the addEventListener method:


// You can add as many event listeners as you want (even of the same type)

