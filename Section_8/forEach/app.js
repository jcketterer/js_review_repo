//forEach will always return undefined

const colors = ['teal', 'cyan', 'peach','purple'];

// function yell(val,i) {
// 	const caps = val.toUpperCase()
// 	console.log(`At index ${i}, ${caps}`)
// }

// colors.forEach(yell)

// // 'teal', 0, ['teal', 'cyan', 'peach','purple']

// const prices = [30.99, 19.99, 2.50, 99.00];

// let total = 0

// prices.forEach(function (price) {
// 	total += price;
// });

// console.log(total)

function myForEach (arr, callback) {
	for(let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr)
	}
}

myForEach(colors, function(c, i, a) {
	console.log(c.toUpperCase(), 'at index of: ',i, a)
})