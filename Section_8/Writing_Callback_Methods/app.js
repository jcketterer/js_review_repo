//THIS IS FUNCTION DECLARATION
function holler () {
	console.log("HEY YOU!S")
}

//ANONYMOUS FUNCTION EXPRESSION
const whisper = function () {
	console.log('psst i have a secret')
}

function add (x,y) {
	return x+y;
}

function subract (x,y) {
	return x-y;
}

function multiply (x,y) {
	return x*y;
}

function divide (x,y) {
	return x/y;
}

function power (x,y) {
	return x**y
}

const mathFuncs = [add, subract, multiply, divide, power];

// setTimeout(whisper, 4000)

function doMath(num1, num2, func) {
	return func(num1,num2)
}

doMath(3,4, function(a,b){
	console.log(a ** b)
})

function doAllMath(a,b, mathFuncs) {
	for (let funcs of mathFuncs) {
		console.log(funcs(a,b));
	}
}