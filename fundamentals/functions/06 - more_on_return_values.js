//Return statements end function execution

// function square (x) {
//     return x * x
//     console.log('wont show up')// <-- this never runs
// }

// function isPurple (color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//Slight Improvement

// function isPurple (color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     return false
// }

//More Improvement

// function isPurple (color) {
//     return color.toLowerCase() === 'purple';
// }

function containsPurple (arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}
