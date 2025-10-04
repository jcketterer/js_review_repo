// //GET ELEMENT BY ID
// //ALL START WITH document.getSomething()

// //<form id="muffin-form"> ID = MUFFIN-FORM

// //FINDS FIRST ELEMENT
// //YOU GET AN OBJECT BACK WITH PROPERTIES AND METHODS
// document.getElementById('content');


// //GET ELEMENTS BY TAG NAME

// document.getElementsByTagName('img');

// //GET ELEMENT BY CLASS NAME

// document.getElementsByClassName('latin');

// //QUERY SELECTOR
// //USING A # WILL SELECT ANY ID WITH THE NAME FOLLOWING IT 

// document.querySelector('#main');

// //USING multiple selectors with element.class to be more specific

// document.querySelector('h2.section-heading');

// document.querySelector('#submit')
// document.querySelector('h2')
// document.querySelector('.section-title')
// document.querySelector('h3.section-title')
// document.querySelector('input')
// document.querySelector('input[type="text"]')
// document.querySelector('input[type="range"]')
// document.querySelectorAll('input')

// document.querySelectorAll('h2')

// document.querySelectorAll('h3')

// document.querySelectorAll('h3.section-title.country')

// document.querySelectorAll('hr')

// document.querySelectorAll('body > hr')

// document.querySelectorAll(':not(p)')

// document.querySelectorAll('h2:nth-of-type(3)')




const h3 = document.querySelectorAll('h3');
const h2 = document.getElementsByTagName('h2');

console.log(h3);

for (let h of h3) {
    h.style.color = 'pink'
};

for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = 'purple'
    h2[i].style.fontSize = '80px'
}

const img = document.querySelectorAll('img')


for (let i of img){
    i.style.border = '2px solid green'
    i.style.width = '100px'
}