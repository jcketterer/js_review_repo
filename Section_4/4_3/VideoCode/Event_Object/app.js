const para = document.querySelector('p')

para.addEventListener('click', function (e) {
	console.log(e.type)
})

para.addEventListener('mousedown', function(e){
	console.log(e.type)
})

para.addEventListener('mouseup', function(event){
	console.log(event.type)
})