
/*


9 Give the li the text “four”.
10 Append the li to the ul element.
11 Loop over all of the lis inside the ol tag and give them a background color of “green”.
12 Remove the div with a class of footer
*/

//1 Select the section with an id of container without using querySelector.

const sectionById = document.getElementById('container')

console.log(sectionById)

//2 Select the section with an id of container using querySelector.

const sectionBySelector = document.querySelector('#container')

console.log(sectionBySelector)

//3 Select all of the list items with a class of “second”.

const liClass = document.querySelectorAll('.second')

console.log(liClass)

//4 Select a list item with a class of third, but only the list item inside of the ol tag.

const liInOl = document.querySelector('ol .third')


//5 Give the section with an id of container the text “Hello!”.

const containerText = document.querySelector('section')

// containerText.innerText = 'HELLO!'

//6 Add the class main to the div with a class of footer.

const mainDiv = document.querySelector('.footer')

mainDiv.classList.add('main')

//7 Remove the class main on the div with a class of footer.

mainDiv.classList.remove('main')

//8 Create a new li element.

const newLi = document.createElement('li')

//9 Give the li the text “four”.

newLi.innerText = 'four'

//10 Append the li to the ul element.

const ul = document.querySelector('ul')

ul.append(newLi)

//11 Loop over all of the lis inside the ol tag and give them a background color of “green”.

const allLis = document.querySelectorAll('ol > li')

for (let li of allLis) {
    li.style.backgroundColor = 'green'
} 

//12 Remove the div with a class of footer

mainDiv.remove()