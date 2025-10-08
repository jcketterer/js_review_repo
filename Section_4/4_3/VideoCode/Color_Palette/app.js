const colorsSection = document.querySelector('#colors')

colorsSection.addEventListener('click', function(e) {
	const color = e.target.dataset.hex

	document.body.style.backgroundColor = color
	
})