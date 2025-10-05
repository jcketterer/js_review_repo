const form = document.querySelector('#logoform')
const brandInput = document.querySelector('input[name="brandname"]')
const colorInput = document.querySelector('input[name="color"]')
const sizeInput = document.querySelector('input[name="fontsize"]')
const results = document.querySelector('#results')

//REMEMBER TO GET VALUE FROM INPUT YOU USE THE .value ATTRIBUTE
form.addEventListener('submit', function (e) {
	e.preventDefault()

	logo = makeLogo(brandInput.value, colorInput.value, sizeInput.value)

	results.append(logo)
})

function makeLogo (text, color, size) {
	const newElement = document.createElement('h2')

	newElement.innerText = text;
	newElement.style.color = color;
	newElement.style.fontSize =  size + 'px';

	return newElement
}

