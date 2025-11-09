const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const longWord = words.filter(function (word) {
	return word.length >= 20;
})

const uOrC = words.filter(function (word){ 
	return word[0] === 'u' || word[0] === 'c'
})

const containsVowel = function(word) {
	for (let char of word) {
		 if(isVowel(char)) return true;
	}
	return false
}

const isVowel = function(char) {
	return 'aeiou'.indexOf(char) !== -1
}

const containVowel = words.filter(containsVowel)
const noVowel = words.filter(function(word) {
	return !containsVowel(word)
})

//filter with DOM 


const allCheckBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))

const allCheckedBoxed = allCheckBoxes.filter(function(c) {
	return c.checked === true;
})

const completedTodoText = allCheckedBoxed.map(function(checkbox) {
	return checkbox.parentElement.innerText
})

//CHAINING

function extractCompletedTodos () {
	const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
	
	return Array.from(allCheckBoxes)
	.filter(function(box) {
	 	return box.checked;
	}).map(function(checkbox) {
		return checkbox.parentElement.innerText;
	});
}

//IMPLEMENTING FILTER

const numbers = [1,2,3,4,5,6,7];

function myFilter (arr, callback) {
	let newArr = []

	for(let i = 0; i < arr.length; i++) {		

		if(callback(arr[i], i, arr)) {
			 newArr.push(arr[i])
		}
	}
	return newArr

}

const shortWords = myFilter(words, function(w) {
	return w.length <= 5
});

const evenNums = myFilter(numbers, function (n) {
	return n % 2 === 0
})

const everyOtherWord = myFilter(words, function(w,i) {
	return i % 2 === 0
})