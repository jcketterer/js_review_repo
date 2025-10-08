// const removeButtons = document.querySelectorAll('li button');
// const ul = document.querySelector('#friend-list')
// const textInput = document.querySelector('#first-name') 
// const form = document.querySelector('#add-friend')

// for (let btn of removeButtons) {
// 	btn.addEventListener('click', function (e) {
// 		e.target.parentElement.remove()
// 	})
// }

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const newEl = document.createElement('li')
// 	newEl.innerText = `${textInput.value} `
// 	textInput.value = ''
// 	ul.appendChild(newEl)

// 	const newBtn = document.createElement('button')
// 	newBtn.innerText = 'UnFriend'

// 	//OPTION 1
// 	newBtn.addEventListener('click', function (e) {
// 		e.target.parentElement.remove()
// 	})

// 	newEl.appendChild(newBtn)
// })

const ul = document.querySelector('#friend-list')
const textInput = document.querySelector('#first-name') 
const form = document.querySelector('#add-friend')



//USE DELEGATION TO GRAB THE PARENT ELEMENT TO LISTEN FOR CLICKS ON A TARGET.TAGNAME
ul.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove()
	}
	else if (e.target.tagName === 'LI') {
		const span = document.createElement('span')
		span.innerHTML = '&hearts;'
		e.target.prepend(span)
		
		e.target.classList.toggle('best-friend')
	}
})

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const newEl = document.createElement('li')
	newEl.innerText = `${textInput.value} `
	textInput.value = ''
	ul.appendChild(newEl)

	const newBtn = document.createElement('button')
	newBtn.innerText = 'UnFriend'

	newEl.appendChild(newBtn)
})