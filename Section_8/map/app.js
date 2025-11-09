const numbers = [21, 45, 64, 99, 123]

const negative = numbers.map(function(num){
	return num * -1;
});

// const doubles = numbers.map(function (num) {
// 	console.log(num*2)
// 	return num * 2
// })

const todos = [

	{
		id:1,
		text: 'walk the dog',
		priority: 'high'
	},

	{
		id:2,
		text: 'walk the chickens',
		priority: 'medium'
	},

	{
		id:3,
		text: 'feed the cat',
		priority: 'low'
	},

	{
		id:4,
		text: 'put out fire in garage',
		priority: 'very high'
	}

];

const todoText = todos.map(function(todo) {
	return todo.text
})

const links = Array.from(document.querySelectorAll('a'))

const urls = links.map(function(link){
	return link.href
})

//IMPLEMENTING OUR VERSION

function myMap(arr, callback) {
	const newArr = [];

	
	for (let i = 0; i < arr.length; i++){
		const val = callback(arr[i], i, arr)
		newArr.push(val)
	}

	return newArr;

}

const todoPriority = myMap(todos, function(todo) {
	return todo.priority
})

const letters = myMap(['a','b','c','d','e'], function(str,idx) {
	return str.repeat(idx)
})