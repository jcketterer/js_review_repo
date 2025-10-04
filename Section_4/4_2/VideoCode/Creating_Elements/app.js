const newTodo = document.createElement('li')
const boldText = document.createElement('b')
const ul = document.querySelector('ul')

boldText.textContent = 'DONT FORGET TO LOCK THE COOP!'
newTodo.classList = 'todo'
newTodo.append(boldText)

const secondTodo = document.createElement('li')
secondTodo.className = 'todo'
secondTodo.textContent = 'ORDER MORE LACROIX'

ul.append(newTodo, secondTodo)

const thirdTodo = document.createElement('li')

thirdTodo.textContent = 'Feed Cats'
thirdTodo.classList = 'todo'
ul.prepend(thirdTodo)

const picture  = document.createElement('img')
picture.classList.add('thumbnail')
picture.setAttribute('src', 'https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?cs=srgb&dl=pexels-pixabay-86596.jpg&fm=jpg')

document.body.append(picture)

//remove element the old way

// const removeMe = document.querySelector('#remove-me')

// ul.removeChild(removeMe)

//remove element the new way

const removeMe = document.querySelector('#remove-me')

removeMe.remove()

const h1 = document.querySelector('h1')

h1.remove()